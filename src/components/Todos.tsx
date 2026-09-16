import React from "react";
import Todo from "../TypeDefinition/Todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items:Todo[] }> = (props) => {  // function component with props type defined
                       // we use todo as a type definition instead of string array, so we can access the properties of todo class
  return (
    <ul> 
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.item} />
        ))}
    </ul>
  );
}

export default Todos;