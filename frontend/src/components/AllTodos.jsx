import React from 'react'
import Todo from './Todo'

function AllTodos(props) {
  return (
    <div className='grid grid-cols-3 gap-5 px-7 py-5'>
        {props.todo.length === 0 ? "" : props.todo.map((td) =>{
          return <div key={td._id}> <Todo todo={td} setTodo={props.setTodo} fetchTodos={props.fetchTodos}/> </div>
        })}
    </div>
  )
}

export default AllTodos