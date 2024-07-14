import { useState, useEffect } from 'react'
import TodoAdder from './components/TodoAdder'
import AllTodos from './components/AllTodos'

function App() {
  const [todo, setTodo] = useState([])

  async function fetchTodos(){
    const response = await fetch("http://localhost:3000/todos");
    const json = await response.json();
    setTodo(json.allTodos)
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div className='bg-neutral-50'>
      <TodoAdder todo={todo} setTodo={setTodo} fetchTodos={fetchTodos}/>
      <h1 className='text-center text-3xl font-bold'>----- Todo's -----</h1>
      <AllTodos todo={todo} setTodo={setTodo} fetchTodos={fetchTodos}/>
    </div>
  )
}

export default App
