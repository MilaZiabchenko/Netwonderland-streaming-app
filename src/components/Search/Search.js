import './Search.css';

const Search = ({ inputText, changeHandler, clearInput }) => {
  return (
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
  );
};

export default Search;
