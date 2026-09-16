import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { TodoContext } from '../store/todos-context';


const Todos: React.FC=() => { 
    const todosCtx = useContext(TodoContext);  // we use useContext hook to access the context value, so we can access the todos array and the addTodo and removeTodo functions
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.item} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} /> // we use bind method to pass the id of the todo item to the onRemoveTodo function, so we can remove the todo item from the list
            ))}
        </ul>
    );
}

export default Todos;