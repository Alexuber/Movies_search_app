import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import posterPlaceholder from '../../assets/img/poster.webp';
import styles from './MoviesListItem.module.scss';

export const MoviesListItem = ({ title, id, poster }) => {
  const location = useLocation();

  return (
    <Link key={id} to={`/movie/${id}`} state={{ from: location }}>
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500/${poster}`
            : posterPlaceholder
        }
        alt="poster"
        width="240"
        height="360"
        className={styles.img}
      />
      <p className={styles.title}> {title}</p>
    </Link>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
};
