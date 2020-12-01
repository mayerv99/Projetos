import React, {useRef} from 'react'

function TodoForm( {createTodo} ) {
    
    const todoName = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = {name: todoName.current.value}

        createTodo(newTodo)

        todoName.current.value = ""
    }

    

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" ref = {todoName}/>
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TodoForm
