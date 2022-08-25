import React from 'react';
import Tag from '../../components/Tag/Tag';

const DUMMYY_TAGS = ["Música", "Álbumes", "Videojuegos", "Pódcast", "Aplicación informática", "Programación", "Comedias", "Debates"]

function TagBar({ onClickTag }) {
  return (
    <div className='tagbar' >
      {DUMMYY_TAGS.map(tag => {
        return <Tag tag={tag} onClickTag={onClickTag} />
      })}
    </div>
  )
}

export default TagBar