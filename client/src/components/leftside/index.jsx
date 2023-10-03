import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const LeftSide = ({search,add}) => {
  
  return (
    <div className='body-left'>
     {
      search.map((item,idx) => (
        <Link className='left-link' to={`/${add}/${item._id}`}>{`${idx+1} - ${item.title}`}</Link>
      ))
     }
    </div>
  )
}

export default LeftSide;