import WorldImg from '../assets/world.svg';
import styles from '../styles/Splash.module.css';

const Loading = () => (
  <main className={`${styles.container} maxContainer`}>
    <div className={styles.loader} />
    <h2 className={styles.title}>Collecting real-time data...</h2>
    <img className={styles.img} src={WorldImg} alt="World" />
  </main>
);

export default Loading;
