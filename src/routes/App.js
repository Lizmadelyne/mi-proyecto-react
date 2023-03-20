import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';



function App() {
 return(
  <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/new' element={<NewTodoPage />}/>
      <Route path='/edit/:id' element={<EditTodoPage/>} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  </HashRouter>
 )
}

function PageNotFound() {
  return (
    <div  style={{ display: "inline-block", top:30, left:30}}>
      <h1 style={{ color:"white" }}>404</h1>
      <h2 style={{ color:"white", }}>sorry, Page not found </h2>
    </div>
  );
}

export default App;