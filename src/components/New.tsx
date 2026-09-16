const NewTodo = () => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();       // FOrmEvent is a generic type for form events, we can use it to type the event parameter
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">Todo</label>
            <input type="text" id="todo" placeholder="New Todo" />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo;