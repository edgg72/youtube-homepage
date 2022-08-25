import React from 'react';
import '../../css/styles.css'

function SearchInput({ searchHandler, query, setQuery, keyDownHandler }) {
  return (
    <div className='search-section'>
      <input
        className='search-section__input'
        placeholder='Search'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => keyDownHandler(e)}
      />
      <button
        className='search-section__button'
        onClick={() => searchHandler(query)}
      >
        icon here
      </button>
    </div>
  )
}

export default SearchInput