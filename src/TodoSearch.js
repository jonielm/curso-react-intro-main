import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setsearchValue,
}) {
  return (
    <input 
      placeholder="Filtrar pendientes"
      value={searchValue}
      onChange={(event) =>{
      setsearchValue(event.target.value);
      }}
    />
        );
}

  export {TodoSearch};