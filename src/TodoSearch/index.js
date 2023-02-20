import React from 'react';

import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  //
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value); //para actualizar
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Add your task"
      value={searchValue}
      onChange={onSearchValueChange}  //para conectar la funcion con el evento
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };