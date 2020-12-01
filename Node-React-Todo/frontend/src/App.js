import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(()=> {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:3333')
      setTodos(res.data)
    }
    getTodos()
  }, [])

  const createTodo = async (item) => {
    const res = await axios.post('http://localhost:3333/api/create', item)
    setTodos(res.data)
  }
  
  // Deleta utilizando o id como key // tem que terminar
  const deleteTodo = (item) => {
    // const res = axios.delete('http://localhost:3333/api/delete', text)
    // setTodos(res.data)
    console.log('Remover', item)
  }

  return (
    <div>
      <TodoForm createTodo = {createTodo}/>
      <TodoList todos = {todos} deleteTodo = {deleteTodo}/>
    </div>
  );
}

export default App;
