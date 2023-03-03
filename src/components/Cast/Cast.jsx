import { useState, useEffect, useRef } from 'react';
import { getMoviesCredits } from '../../services/moviesFetch';
import { useParams } from 'react-router-dom';
import person from '../../assets/img/person.jpg';
import styles from './Cast.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_VALUE = [];

const Cast = () => {
  const [cast, setCast] = useState(INITIAL_VALUE);
  const { id } = useParams();

  const firstRender = useRef(true);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { data } = await getMoviesCredits(id);
        if (firstRender.current && data.cast.length === 0) {
          firstRender.current = false;
          toast.error('No information about cast!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          return;
        }

        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieCast();
  }, [id]);

  if (cast.length === 0 && !firstRender.current) {
    return (
      <div className={styles.noInfo}>Sorry! No information about cast!</div>
    );
  }

  const actors = cast.map(({ name, character, profile_path, id }) => {
    return (
      <li key={id} className={styles.item}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : person
          }
          alt="actor placeholder"
          width="180"
          height="270"
        />
        <div>
          <p>{name}</p>
          <p>Character: {character}</p>
        </div>
      </li>
    );
  });

  return <ul className={styles.list}>{actors}</ul>;
};

export default Cast;
