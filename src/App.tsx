import React from 'react';  
import { useState } from 'react';
import Todos from './components/Todos';
import todo from './TypeDefinition/Todo';
import NewTodo from './components/New';
import classes from './App.module.css';

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (text: string) => {  // function will pass to new todo as a prop
    console.log(text);
    const newTodo = new todo(text ,Date.now().toString());  // we can use the Date.now() method to generate a unique id for each todo item
    setTodos((prevTodos) => {return prevTodos.concat(newTodo)});  // we can use the concat method to add a new todo item to the array, we can also use the spread operator to add a new todo item to the array
  }

  const removeTodoHandler = (todoId: string) => {  // function will pass to todos as a prop
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);  // we can use the filter method to remove a todo item from the array, we can also use the splice method to remove a todo item from the array
    });
  }
 
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />  

      <h1 className={classes.title}>My Todos</h1>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>

  );
}

export default App;
