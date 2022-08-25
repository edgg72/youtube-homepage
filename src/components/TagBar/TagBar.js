import React from 'react';

const DUMMYY_TAGS = ["Música", "Álbumes", "Videojuegos", "Pódcast", "Aplicación informática"]

function TagBar() {
  return (
    <div className='tagbar' >
      {DUMMYY_TAGS.map(tag => {
        return <p className="tagbar__item">{tag}</p>
      })}
    </div>
  )
}

export default TagBar