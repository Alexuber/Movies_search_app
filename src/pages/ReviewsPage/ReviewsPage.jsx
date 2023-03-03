import { useState, useEffect, useRef } from 'react';
import { getMoviesReviews } from '../../services/moviesFetch';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ReviewsPage.module.scss';
import placeholder from '../../assets/img/placeholder.png';
const INITIAL_VALUE = [];

const Reviews = () => {
  const [reviews, setReviews] = useState(INITIAL_VALUE);
  const { id } = useParams();

  const firstRender = useRef(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await getMoviesReviews(id);
        if (firstRender.current && data.results.length === 0) {
          firstRender.current = false;
          toast.error('No information about reviews!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          return;
        }
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [id]);

  if (reviews.length === 0 && !firstRender.current) {
    return (
      <div className={styles.noInfo}>Sorry! No information about reviews!</div>
    );
  }
  const elements = reviews.map(({ author, content, id }) => (
    <li key={id} className={styles.item}>
      <div className={styles.author}>
        <img src={placeholder} alt="placeholder" width="50" height="50" />
        <p>{author}</p>
      </div>
      <p className={styles.text}>{content}</p>
    </li>
  ));
  return <ul className={styles.reviewsList}>{elements}</ul>;
};

export default Reviews;
