import React from 'react'

function Input({ value, placeholder, onChange }) {
    return (
        <input className='w-full outline outline-1 outline-neutral-300 p-2 rounded-md text-md font-light focus:outline-none focus:ring-1 mb-2' type='text' placeholder={placeholder} value={value} required onChange={onChange}></input>
    )
}

export default Input