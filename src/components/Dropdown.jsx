import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSort } from 'react-icons/fa';
import styles from './styles/Dropdown.module.css';

const Dropdown = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest(`.${styles.dropdown}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption}
        <FaSort />
      </button>

      <div
        className={`${styles.options} ${isOpen ? styles.open : ''}`}
        role="listbox"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.item} ${
              option.value === selectedOption ? styles.selected : ''
            }`}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={option.value === selectedOption}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Option = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

Dropdown.propTypes = {
  options: PropTypes.arrayOf(Option).isRequired,
  defaultValue: Option.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
