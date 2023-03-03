import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SearchForm.module.scss';

const INITIAL_STATE = '';

export const SearchForm = ({ handleFormSubmit }) => {
  const [query, setQuery] = useState(INITIAL_STATE);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Search field is empty!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    handleFormSubmit(query);
    setQuery(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search movie"
        value={query}
        onChange={handleChange}
        className={styles.input}
      />
      <button disabled={!query.trim()} className={styles.button}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
