import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../../services/moviesFetch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const INITIAL_STATE = {
  movies: [],
  error: '',
};

const MoviesPage = () => {
  const [movies, setMovies] = useState(INITIAL_STATE.movies);
  const [searchParams, setSearchParams] = useSearchParams();

  const prevQuery = searchParams.get('search');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await getMoviesBySearch(prevQuery);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    if (prevQuery !== null) {
      getMovies();
    }
  }, [prevQuery]);

  useEffect(() => {
    if (!prevQuery) {
      setMovies(INITIAL_STATE.movies);
    }
  }, [prevQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ search: query });
  };

  return (
    <main>
      {!prevQuery && <SearchForm handleFormSubmit={handleFormSubmit} />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default MoviesPage;
