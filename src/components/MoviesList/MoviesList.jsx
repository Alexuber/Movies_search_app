import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MoviesListItem key={id} title={title} />
      ))}
    </ul>
  );
};
