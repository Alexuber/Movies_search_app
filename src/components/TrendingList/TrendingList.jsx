import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './TrendingList.module.scss';

export const TrendingList = ({ trending }) => {
  const location = useLocation();

  const elements = trending.map(({ title, id, poster_path }) => {
    return (
      <Link key={id} to={`/movie/${id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster"
          width="240"
          className={styles.img}
        />
        <p className={styles.title}>{title}</p>
      </Link>
    );
  });
  return (
    <div className="container">
      <ul className={styles.trending}>{elements}</ul>
    </div>
  );
};

TrendingList.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
