import React, { useState } from 'react'
import Pencil from './Pencil'
import Trash from './Trash';
import EditTodo from './EditTodo';

function Todo(props) {

  const [isEditing, setIsEditing] = useState(false);

  async function handleTodoDone() {
    const response = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: props.todo._id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    props.fetchTodos();
  }

  async function handleTodoDelete() {
    const response = await fetch("http://localhost:3000/deleted", {
      method: "DELETE",
      body: JSON.stringify({
        id: props.todo._id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    alert(json.msg)
    props.fetchTodos();
  }

  return (
    <div>
      {isEditing ? <EditTodo todo={props.todo} cancelEdit={() => {setIsEditing(false)}} fetchTodos={props.fetchTodos}/> :
        <div className='bg-neutral-200 p-3 rounded-2xl shadow-md'>

          <h2 className='font-bold text-2xl underline underline-offset-4'>Title : <span className='font-normal '>{props.todo.title}</span></h2>

          <h4 className='font-bold text-lg mt-2'>Description : <span className='font-normal'>{props.todo.description}</span></h4>

          <div className='mt-4 flex justify-between'>
            <button className='bg-neutral-700 text-sm rounded-md text-white px-2 py-1 mr-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-600' disabled={!props.todo.isPending} onClick={handleTodoDone}>{props.todo.isPending ? "Mark as Done" : "Completed"}</button>
            <div>
              <button className='bg-red-600 text-sm rounded-md text-white px-2 py-1 mr-2' onClick={handleTodoDelete}><Trash /></button>

              <button className='bg-blue-900 text-sm rounded-md text-white px-2 py-1 mr-2' onClick={() => {
                setIsEditing(true)
              }}><Pencil /></button>

            </div>

          </div>
        </div>
      }
    </div>
  )
}

export default Todo