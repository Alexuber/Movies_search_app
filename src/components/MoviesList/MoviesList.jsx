import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import styles from './MoviesList.module.scss';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ title, id, poster_path }) => (
        <MoviesListItem key={id} title={title} id={id} poster={poster_path} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
