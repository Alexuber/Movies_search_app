import { useState, useEffect } from 'react';
import { getMoviesCredits } from '../../services/moviesFetch';
import { useParams } from 'react-router-dom';

const INITIAL_VALUE = [];

export const Cast = () => {
  const [cast, setCast] = useState(INITIAL_VALUE);
  const { id } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await getMoviesCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [id]);

  if (cast.length === 0) {
    return;
  }

  const actors = cast.map(({ name, character, profile_path, id }) => {
    return (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt="actor`s photo"
        />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <ul>{actors}</ul>;
};
