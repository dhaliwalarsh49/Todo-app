import React, {useState} from 'react'

function EditTodo(props) {
    const [title, setTitle] = useState(props.todo.title);
    const [description, setDescription] = useState(props.todo.description);

    async function handleTodoEdit() {

        const response = await fetch("http://localhost:3000/updated", {
            method: "PUT",
            body: JSON.stringify({
                id: props.todo._id,
                title : title,
                description : description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();

        alert(json.msg)
        props.fetchTodos();
        props.cancelEdit();
    }

    return (
        <div>
            <div className='bg-neutral-200 p-3 rounded-2xl shadow-md'>

                <input className='w-full outline outline-1 outline-neutral-300 p-2 rounded-md text-sm font-light focus:outline-none focus:ring-1 mb-2' type='text' value={title} onChange={(e) => {setTitle(e.target.value)}} required ></input>

                <input className='w-full outline outline-1 outline-neutral-300 p-2 rounded-md text-sm font-light focus:outline-none focus:ring-1 mb-2' type='text' value={description} onChange={(e) => {setDescription(e.target.value)}} required ></input>

                <div className='flex justify-between w-full'>
                    <button onClick={props.cancelEdit} className='bg-red-700 text-sm rounded-md text-white px-2 py-1 mr-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-600'>Cancel</button>

                    <button onClick={handleTodoEdit} className='bg-green-700 text-sm rounded-md text-white px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-600'>Update</button>
                </div>

            </div>
        </div>
    )
}

export default EditTodo