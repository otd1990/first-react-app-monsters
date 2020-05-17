import React from "react";
import './search.styles.css';

const Search = ({placeholder, handleChange}) =>{
  return <input className='search' onChange={handleChange}
  type='search' placeholder={placeholder} />
};

export default Search;
