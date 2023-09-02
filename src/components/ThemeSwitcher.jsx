import useTheme from '../hooks/useTheme';
import styles from '../styles/ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [mode, setMode] = useTheme();

  return (
    <div className={styles.container}>
      <label htmlFor="theme-toggle" className={styles.toggle}>
        <input
          type="checkbox"
          id="theme-toggle"
          onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={styles.checkbox}
          checked={mode === 'light'}
        />
        <span className={styles.slider} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
