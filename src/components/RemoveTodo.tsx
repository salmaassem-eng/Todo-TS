 import React from 'react';
class RemoveTodo extends React.Component<{ onRemoveTodo: (id: string) => void }> {
    removeTodoHandler = (id: string) => {
        this.props.onRemoveTodo(id);
    }
}

export default RemoveTodo;