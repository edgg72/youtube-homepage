import React from 'react';
import Tag from '../../components/Tag/Tag';
import { tags } from '../../utils/tags';



function TagBar({ onClickTag }) {
  return (
    <div className='tagbar' >
      {tags.map(tag => {
        return <Tag tag={tag} onClickTag={onClickTag} />
      })}
    </div>
  )
}

export default TagBar