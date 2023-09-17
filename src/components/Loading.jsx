import WorldImg from '../assets/world.svg';
import styles from '../styles/Loading.module.css';

const Loading = () => (
  <main className={`${styles.container} maxContainer`}>
    <div className="loadingSpinner" />
    <h2 className={styles.title}>Collecting real-time data...</h2>
    <img
      className={styles.img}
      src={WorldImg}
      alt="World"
      sizes="(max-width: 768px) 100vw, 768px"
      width={768}
      height={432}
    />
  </main>
);

export default Loading;
