import React from 'react'
import { useState } from 'react';
import Input from "./Input"
import Button from './Button';

function TodoAdder(props) {
  const [inTodo, setInTodo] = useState({
    title: "",
    description: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  async function addNewTodo(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: inTodo.title,
        description: inTodo.description
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setIsLoading(false);
    const json = await response.json();
    alert(json.msg);
    setInTodo({title : "", description : ""})
    props.fetchTodos();
  }

  return (
    <div className='flex justify-center py-7'>
      <form onSubmit={addNewTodo} className='bg-neutral-200 flex flex-col w-1/3 py-5 px-4 rounded-2xl'>

        <Input value={inTodo.title} placeholder={"Todo Title"} onChange={(e) => {
          setInTodo({ ...inTodo, title: e.target.value })
        }}/>

        <Input value={inTodo.description} placeholder={"Todo Description"} onChange={(e) => {
          setInTodo({ ...inTodo, description: e.target.value })
        }}/>

        <Button text={"Add Todo"} isDisabled={isLoading}/>
      </form>
    </div>
  )
}
export default TodoAdder