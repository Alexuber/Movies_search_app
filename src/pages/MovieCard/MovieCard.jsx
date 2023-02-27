import { useParams } from 'react-router-dom';

export const MovieCard = () => {
  const { id } = useParams;
  console.log('🆑  id:', id);

  return (
    <main>
      <div className="card-wrapper">
        <img
          src="https://via.placeholder.com/960x240"
          alt="movie-poster"
          width="240"
          height="320"
        />
        <div className="card-info">
          <div>Now showing product with id - {id}</div>
          <h1 className="title">Avengers</h1>
          <p>Score</p>
          <h2>Overview</h2>
          <h3>Description</h3>
          <ul className="genres">
            <li className="genres__item">Dramma</li>
            <li className="genres__item">History</li>
            <li className="genres__item">War</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
