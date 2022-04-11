import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import Header from '../../components/Header';
import ShowsGrid from '../../components/ShowsGrid';
import Footer from '../../components/Footer';
import './Shows.css';

const Shows = () => {
  const {
    items: shows,
    isLoading,
    error,
  } = useFetch('https://api.tvmaze.com/shows');

  const [inputText, setInputText] = useState('');
  const debouncedText = useDebounce(inputText, 250);

  const debouncedFilteredShows = shows.filter(show =>
    show.name.toLowerCase().startsWith(debouncedText.toLowerCase())
  );

  const changeHandler = e => {
    setInputText(e.target.value);

    return debouncedFilteredShows;
  };

  const clearInput = () => {
    setInputText('');
  };

  return (
    <>
      <Header />
      <h2 className='text-lg'>Shows</h2>
      <section className='search'>
        <div className='searchInputs'>
          <input
            type='text'
            className='form-control'
            placeholder='Search...'
            value={inputText}
            onChange={changeHandler}
            autoFocus
          />
          <div className='searchIcon'>
            {inputText === '' ? (
              <i className='fas fa-search fa-2x'></i>
            ) : (
              <i
                className='fas fa-times fa-2x clear-btn'
                onClick={clearInput}
              ></i>
            )}
          </div>
        </div>
      </section>
      {error ? (
        <h3 className='text-lg'>
          {' '}
          <span> {error} :( </span>{' '}
        </h3>
      ) : (
        <ShowsGrid
          isLoading={isLoading}
          shows={debouncedFilteredShows ? debouncedFilteredShows : shows}
        />
      )}
      {debouncedFilteredShows.length === 0 && inputText !== '' && (
        <h3 className='text-lg'>
          {' '}
          <span>No matches :( </span>
        </h3>
      )}
      <Footer />
    </>
  );
};

export default Shows;
