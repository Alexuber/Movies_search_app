import { Trending } from 'components/Trending/Trending';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main>
      <h1 className={styles.title}>Trending today</h1>
      <Trending />
    </main>
  );
};

export default HomePage;
