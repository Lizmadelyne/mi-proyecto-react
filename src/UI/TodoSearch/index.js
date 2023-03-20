import React from 'react';

import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {

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
      onChange={onSearchValueChange} //para conectar la funcion con el evento 
      disabled={loading} // desabilita y no se puede escribir en el buscador has ta que cargue
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };