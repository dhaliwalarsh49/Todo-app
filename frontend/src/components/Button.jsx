
function Button({text, isDisabled}) {
    return (
      <div className='w-full px-1'>
        <button disabled={isDisabled} className='bg-neutral-800 text-neutral-100 w-full rounded-md text-lg font-semibold py-2 mb-2 mt-2 active:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50'>{text}</button>
      </div>
    )
  }
  
  export default Button