import React from 'react'

function Tag({ tag, onClickTag }) {
  return (
    <p
      className="tagbar__item"
      onClick={() => onClickTag(tag)}
    >
      {tag}
    </p>
  )
}

export default Tag