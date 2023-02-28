import { Link } from 'react-router-dom';
import styles from './MoviesListItem.module.scss';

export const MoviesListItem = ({ title, id, poster }) => {
  return (
    <Link key={id} to={`/movies/${id}`}>
      <p className={styles.title}> {title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt="poster"
        width="240"
      />
    </Link>
  );
};
