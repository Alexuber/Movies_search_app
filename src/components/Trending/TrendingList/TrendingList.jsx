import { Link } from 'react-router-dom';
import styles from './TrendingList.module.scss';

export const TrendingList = ({ trending }) => {
  const elements = trending.map(({ title, id, poster_path, overview }) => {
    return (
      <Link key={id} to={`/movies/${id}`}>
        <p className={styles.title}>{title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster"
          width="240"
        />
      </Link>
    );
  });
  return (
    <div className="container">
      <ul className={styles.trending}>{elements}</ul>
    </div>
  );
};
