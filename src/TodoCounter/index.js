import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoCounter.css';

function TodoCounter () {
    const  { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <h2 className='TodoCounter'>Haz completado {completedTodos} de {totalTodos} Tareas</h2>
    );
      

    
}

export { TodoCounter };