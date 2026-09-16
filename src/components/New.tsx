import React,{useRef,useContext} from 'react';
import classes from './New.module.css';
import { TodoContext } from '../store/todos-context';

                                     // if I not put any type  in () means this function not accept any parameter
const NewTodo: React.FC = () => {
                                     // () => void    means the function 
    const todoCtx = useContext(TodoContext);  // we use useContext hook to access the context value, so we can access the todos array and the addTodo and removeTodo functions
    const todoInputRef = React.useRef<HTMLInputElement>(null);  // we use useRef hook to create a reference to the input field, so we can access the value of the input field, we can also use it to focus the input field
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();       // FOrmEvent is a generic type for form events, we can use it to type the event parameter
    
        const enteredText = todoInputRef.current!.value;  // we can use the current property of the ref to get the value of the input field, we can also use it to focus the input field
               // we use ! mark if I ensure it's not null value 
        console.log(enteredText);

        if (enteredText.trim().length === 0) {
            throw new Error('Please enter a valid todo');  // we can throw an error if the input field is empty, we can also use it to focus the input field
            return;  // if the input field is empty, we return and do nothing
        }
todoCtx.addTodo(enteredText); 
     } // we can use the addTodo function from the context to add a new todo item to the list, we can also use it to remove a todo item from the list}

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo">Todo</label>
            <input type="text" id="todo" placeholder="New Todo" ref={todoInputRef}  />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo;