import styles from './HomePage.module.scss';
import { TrendingList } from '../../components/TrendingList/TrendingList';
import { useState, useEffect } from 'react';
import { trendingMovies } from '../../services/moviesFetch';
const INITIAL_VALUE = { trending: [], error: '' };

const HomePage = () => {
  const [trending, setTrending] = useState(INITIAL_VALUE.trending);
  const [error, setError] = useState(INITIAL_VALUE.error);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { data } = await trendingMovies();
        setTrending(data.results);
      } catch ({ response }) {
        setError(
          response.data.status_message || 'Opps...Something wrong, try later!'
        );
      }
    };
    getTrending();
  }, []);
  return (
    <main>
      <h1 className={styles.title}>Trending today</h1>
      <TrendingList trending={trending} />
      {error && <p>{error}</p>}
    </main>
  );
};

export default HomePage;
