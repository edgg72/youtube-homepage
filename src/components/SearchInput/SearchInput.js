import React from 'react'

function SearchInput({searchHandler, query, setQuery, keyDownHandler}) {
  return (
    <>
      <input 
        placeholder='Search' 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        onKeyDown={e => keyDownHandler(e)}
      />
      <button onClick={() => searchHandler(query)} >icon here</button>
    </>
  )
}

export default SearchInput