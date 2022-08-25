import React from 'react';
import '../../css/styles.css'
import { FaSearch } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FiBell } from "react-icons/fi";

function SearchInput({ searchHandler, query, setQuery, keyDownHandler }) {
  return (
    <div className='search-section'>
      <ImYoutube2 className='search-section__logo' onClick={() => window.location.reload()} />
      <div className='search-section__input-container'>
        <input
          className='search-section__input-container__input'
          placeholder='Search'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => keyDownHandler(e)}
        />
        <button
          className='search-section__input-container__button'
          onClick={() => searchHandler(query)}
        >
          <FaSearch
            className='search-section__input-container__button--icon'
          />
        </button>
      </div>
      <FiBell className='search-section__bell' />
    </div>
  )
}

export default SearchInput