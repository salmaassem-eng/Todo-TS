import React from "react";
import Todo from "../TypeDefinition/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items:Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {  // function component with props type defined
                       // we use todo as a type definition instead of string array, so we can access the properties of todo class
  return (
    <ul className={classes.todos}> 
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.item} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} /> // we use bind method to pass the id of the todo item to the onRemoveTodo function, so we can remove the todo item from the list
        ))}
    </ul>
  );
}

export default Todos;