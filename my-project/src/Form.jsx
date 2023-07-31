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
        
      }

  return (
    <form>
        <input
          ref={inputRef}
          name='searchT'
          type='text'
        //   value={word}
        //   onChange={handleChange}
          placeholder="Search for word"
          className='form_input'
        />
        <button onClick={handleSubmit}>search</button>
      </form>
  )
}
