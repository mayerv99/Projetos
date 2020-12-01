import React from 'react'

function TodoList({todos, deleteTodo}) {
    return(
        todos.map((todo) => 
        <div key={todo.id}>
          {todo.name} - {todo.id}
          <span>
             <button onClick = {()=> deleteTodo(todo.id)}>Deletar</button>
          </span>
        </div>
        )
      )
}

export default TodoList
