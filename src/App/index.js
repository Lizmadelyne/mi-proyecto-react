import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos'
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError} from'../TodosError';
import { TodosLoading} from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';


function App() {
  const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos,
      completedTodos,
      searchValue, 
      setSearchValue,
      addTodo,
 
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
      <TodoCounter
       totalTodos ={totalTodos}
       completedTodos = {completedTodos}
      
      />
      <TodoSearch
       searchValue = {searchValue}
       setSearchValue={setSearchValue}
      
      />
      </TodoHeader>

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

     
       {!!openModal && (
         <Modal>
         <TodoForm
         addTodo={addTodo}
         setOpenModal={setOpenModal}  
         />
       </Modal>
       )}
   

      <CreateTodoButton
       setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );

}

export default App;