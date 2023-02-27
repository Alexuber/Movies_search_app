import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../services/moviesFetch';
import { MoviesList } from 'components/MoviesList/MoviesList';

const INITIAL_STATE = {
  query: null,
  movies: [],
  error: '',
};

export const Movies = () => {
  const [movies, setMovies] = useState(INITIAL_STATE.movies);
  const [query, setQuery] = useState(INITIAL_STATE.query);
  const [error, setError] = useState(INITIAL_STATE.error);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await getMoviesBySearch(query);
        console.log('🆑  data:', data);
        setMovies(data.results);
      } catch ({ response }) {
        setError(
          response.data.status_message || 'Opps...Something wrong, try later!'
        );
      }
    };
    if (query !== null) {
      getMovies();
    }
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <main>
      <button type="button">Go back</button>
      {!query && <SearchForm handleFormSubmit={handleFormSubmit} />}
      <MoviesList movies={movies} />
    </main>
  );
};
