import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/moviesFetch';

const INITIAL_STATE = {};

export const MovieCard = () => {
  const [movieInfo, setMovieInfo] = useState(INITIAL_STATE);
  const { id } = useParams();

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

  return (
    <main>
      <div className="card-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="movie-poster"
          width="240"
          height="320"
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
            <ul className="genres">{genreEls}</ul>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
