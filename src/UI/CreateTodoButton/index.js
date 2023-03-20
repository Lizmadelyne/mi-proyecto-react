import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(props){ 
 //   const onClickButton =() =>{
    // props.setOpe(prevState => !prevState);  };// este era del modal
       
  
    return(
        <button className="CreateButton" 
       // onClick = {onClickButton}
       onClick={props.onClick}
       
       >
        +
        </button>
    
    );

    
}
export { CreateTodoButton };