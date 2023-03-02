import { TrendingList } from './TrendingList/TrendingList';
import { useState, useEffect } from 'react';
import { trendingMovies } from '../../services/moviesFetch';
const INITIAL_VALUE = { trending: [], error: '' };

export const Trending = () => {
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
    <>
      <TrendingList trending={trending} />
      {error && <p>{error}</p>}
    </>
  );
};
