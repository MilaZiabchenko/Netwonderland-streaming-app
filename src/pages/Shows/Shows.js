import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import Header from '../../components/Header';
import Search from '../../components/Search';
import ShowsGrid from '../../components/ShowsGrid';
import Footer from '../../components/Footer';

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
      <main>
        <h2 className='text-lg'>Shows</h2>
        <Search
          inputText={inputText}
          changeHandler={changeHandler}
          clearInput={clearInput}
        />
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
      </main>
      <Footer />
    </>
  );
};

export default Shows;
