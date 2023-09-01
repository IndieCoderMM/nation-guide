import styles from '../styles/ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  return (
    <div className={styles.container}>
      <label htmlFor="theme-toggle" className={styles.toggle}>
        <input type="checkbox" id="theme-toggle" className={styles.checkbox} />
        <span className={styles.slider} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
