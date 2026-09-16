import React from "react";
import { useState } from "react";
import todo from "../TypeDefinition/Todo";

type ContextObj = {
    items: todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodoContext = React.createContext<ContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<todo[]>([]);

    const addTodoHandler = (text: string) => {  // function will pass to new todo as a prop
        console.log(text);
        const newTodo = new todo(text, Date.now().toString());  // we can use the Date.now() method to generate a unique id for each todo item
        setTodos((prevTodos) => { return prevTodos.concat(newTodo) });  // we can use the concat method to add a new todo item to the array, we can also use the spread operator to add a new todo item to the array
    }

    const removeTodoHandler = (todoId: string) => {  // function will pass to todos as a prop
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);  // we can use the filter method to remove a todo item from the array, we can also use the splice method to remove a todo item from the array
        });
    }

    const contextValue: ContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };
    return React.createElement(
        TodoContext.Provider,
        { value: contextValue },
        props.children
    );
};

export default TodosContextProvider;