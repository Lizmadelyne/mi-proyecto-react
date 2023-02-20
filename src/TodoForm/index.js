import React from "react";
import './Form.css';


function TodoForm({addTodo, setOpenModal}){

    const [newTodoValue,  setNewTodoValue] = React.useState('');
     
    const onChange = (event) =>{
     setNewTodoValue(event.target.value); 
    };

    const onCancel =()=>{
      setOpenModal(false);
    };
   
    const onSubmit = (event) => {
      event.preventDefault()
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
      };


    return(
       <form onSubmit={onSubmit}>
        <label>Escribe tu nueva tarea</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="cortar la cebolla y el tomate"
        />
       <div className="TodoForm-buttonContainer">
        <button
        type="button"
        className="TodoForm-button  button-cancel"
         onClick={onCancel}
        >Cancelar</button>

        <button
        type="submit"
        className="TodoForm-button  button-add"
        >Añadir
        </button>
       </div>
       </form>
    );
}
export { TodoForm }