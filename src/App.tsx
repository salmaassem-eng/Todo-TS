import React,{useContext} from 'react';
import Todos from './components/Todos';
import NewTodo from './components/New';
import classes from './App.module.css';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo  />  
      <h1 className={classes.title}>My Todos</h1>
      <Todos />
    </TodosContextProvider>

  );
}

export default App;
