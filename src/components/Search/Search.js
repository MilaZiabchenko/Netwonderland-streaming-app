import './Search.css';

const Search = ({ inputText, handleChange, clearInput }) => {
  return (
    <section className='search'>
      <div className='search-inputs'>
        <input
          type='text'
          value={inputText}
          onChange={handleChange}
          placeholder='Search...'
          autoFocus
        />
        <div className='search-icon'>
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
  );
};

export default Search;
