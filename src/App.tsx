import React from 'react';
import Comment from './components/Comments/Comments'
//import CommentItem from './components/CommentItem/CommentItem';
import Register  from './components/Register/Register';
import TodoList  from './components/TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import NewTodo from './components/NewTodo/NewTodo';

import './App.css';

const App:React.FC=()=>{

  const todos=[{id:'td1',text:'Complete JavaScript'}];


  return(

    <div>
  {/*  <Comment/>
    <Register/>*/}
    <NewTodo/>
    <TodoList items={todos}/>

    <Comment/>
    </div>

  )
}



export default App;
