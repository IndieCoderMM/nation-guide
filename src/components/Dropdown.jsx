import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSort } from 'react-icons/fa';
import styles from './styles/Dropdown.module.css';
import useClickOutside from '../hooks/useClickOutside';
import useKeyPress from '../hooks/useKeyPress';

const Dropdown = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((option) => option.value === defaultValue);
  const [selectedOption, setSelectedOption] = useState(selected);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));
  useKeyPress('Escape', () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption.label}</span>
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
              option.value === selectedOption.value ? styles.selected : ''
            }`}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={option.value === selectedOption.value}
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
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
