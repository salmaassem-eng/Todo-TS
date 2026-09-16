import React,{useRef} from 'react';
import classes from './New.module.css';

                                     // if I not put any type  in () means this function not accept any parameter
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
                                     // () => void    means the function 
    const todoInputRef = useRef<HTMLInputElement>(null);  // we can use useRef to get the value of the input field, we can also use it to focus the input field

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();       // FOrmEvent is a generic type for form events, we can use it to type the event parameter
    
        const enteredText = todoInputRef.current!.value;  // we can use the current property of the ref to get the value of the input field, we can also use it to focus the input field
               // we use ! mark if I ensure it's not null value 
        console.log(enteredText);

        if (enteredText.trim().length === 0) {
            throw new Error('Please enter a valid todo');  // we can throw an error if the input field is empty, we can also use it to focus the input field
            return;  // if the input field is empty, we return and do nothing
        }
        props.onAddTodo(enteredText);  // we can use the props to call the onAddTodo function, we can also use it to focus the input field
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo">Todo</label>
            <input type="text" id="todo" placeholder="New Todo" ref={todoInputRef}  />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo;