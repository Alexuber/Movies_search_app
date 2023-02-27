import { useState } from 'react';

const INITIAL_STATE = '';

export const SearchForm = ({ handleFormSubmit }) => {
  const [query, setQuery] = useState(INITIAL_STATE);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      // toast.error('Search field is empty!', {
      //   position: 'top-right',
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'colored',
      // });
      return alert('empty query');
    }
    handleFormSubmit(query);
    setQuery(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search movie"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};
