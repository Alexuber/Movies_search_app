import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import styles from './MoviesList.module.scss';

export const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ title, id, poster_path }) => (
        <MoviesListItem key={id} title={title} id={id} poster={poster_path} />
      ))}
    </ul>
  );
};
