import React, { useRef } from 'react'

export const Form = ({ word, setWord}) => {

    const inputRef = useRef()

    // function handleChange(e){
    //     setWord(e.target.value)
    //   }
    
      function handleSubmit(e){
        e.preventDefault()
        // setWord(e.target.value)
        const wordie = inputRef.current.value;
        setWord(wordie)
        console.log(wordie)
        
      }

  return (
    <form className='form flex mx-7 pt-6'>
        <input
          ref={inputRef}
          name='searchT'
          type='text'
        //   value={word}
        //   onChange={handleChange}
          placeholder="Enter word"
          className='border-solid border-2 border-sky-800 form_input mr-auto text-black ' 
        />
        <button onClick={handleSubmit} className='btn border-solid border-2 text-white border-sky-800 bg-sky-800'>search</button>
      </form>
  )
}
