import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/moviesFetch';
import styles from './MovieCardPage.module.scss';

const INITIAL_STATE = {};

const MovieCardPage = () => {
  const [movieInfo, setMovieInfo] = useState(INITIAL_STATE);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMovieInfo = async () => {
      try {
        const { data } = await getMovieById(id);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieInfo();
  }, [id]);

  if (!movieInfo.id) {
    return;
  }

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieInfo;

  const releaseDate = new Date(release_date);
  const fullYear = releaseDate.getFullYear();
  const genreEls = genres.map(({ name, id }) => <li key={id}>{name}</li>);
  const normalizedScore = Math.floor(vote_average * 10);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <Link to={backLinkHref}>
        <button type="button" className="movieCardBtn">
          Go back
        </button>
      </Link>
      <div className="card-wrapper">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.com/960x240'
          }
          alt="movie-poster"
          width="320"
          height="480"
        />
        <div className="card-info">
          <h1 className="title">
            {original_title}
            <span> ({fullYear}) </span>
          </h1>
          <p>User Score: {normalizedScore}%</p>
          <div>
            <h2>Overview</h2>
            <p className="overViewDesc">{overview}</p>
          </div>
          <div className="genres">
            <h3>Genres</h3>
            <ul className="genres-list">{genreEls}</ul>
          </div>
        </div>
      </div>
      <ul className="additional">
        <li>
          <Link
            to="cast"
            state={{ from: backLinkHref }}
            className={styles.link}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            state={{ from: backLinkHref }}
            className={styles.link}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieCardPage;
