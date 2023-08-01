import React, { useRef } from 'react'

export const Form = ({ word, setWord, isDark}) => {

    const inputRef = useRef()

    // function handleChange(e){
    //     setWord(e.target.value)
    //   }
    
      function handleSubmit(e){
        e.preventDefault()
        // setWord(e.target.value)
        const wordie = inputRef.current.value;
        setWord(wordie)
        
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
          className={isDark ? 'border-solid border-2 border-white form_input mr-auto text-black ' : 'form_input mr-auto text-black border-solid border-2 border-black'}
        />
        <button onClick={handleSubmit} className={isDark ? 'btn border-solid border-2 border-white ' : 'btn border-solid border-2 border-sky-800 bg-sky-800'}>search</button>
      </form>
  )
}
