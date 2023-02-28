import { useState, useEffect } from 'react';
import { getMoviesReviews } from '../../services/moviesFetch';
import { useParams } from 'react-router-dom';

const INITIAL_VALUE = [];

export const Reviews = () => {
  const [reviews, setReviews] = useState(INITIAL_VALUE);
  const { id } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await getMoviesReviews(id);
        console.log('🆑  data:', data.results);
        setReviews(data.results);
      } catch (error) {}
    };
    getReviews();
  }, [id]);

  if (reviews.length === 0) {
    return;
  }

  return <div>Reviews here...</div>;
};
