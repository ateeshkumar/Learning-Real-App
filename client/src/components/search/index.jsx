import React, { useState } from 'react';
import './index.css';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [searchTerm,setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchTerm){
            navigate(`search/${searchTerm}`);
            setSearchTerm('');
        }
        console.log(searchTerm)
    }
    
  return (
    <div className='s-container'>
        <div className="s-input">
            <input type="text" value={searchTerm} placeholder='Search your Favourites Subject...'
            onChange={(e)=>setSearchTerm(e.target.value)} />
            <button className='s-submit' type='submit' onSubmit={handleSubmit}><FaSearch/></button>
        </div>
    </div>
  )
}

export default Search;