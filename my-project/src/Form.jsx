import React from 'react'

export const Form = ({ word, setWord}) => {

    function handleChange(e){
        setWord(e.target.value)
      }
    
      function handleSubmit(e){
        e.preventDefault()
        // setWord(e.target.value)
        
      }

  return (
    <form>
        <input
          name='searchT'
          type='text'
          value={word}
          onChange={handleChange}
          placeholder="Search for word"
          className='form_input'
        />
        <button onClick={handleSubmit}>search</button>
      </form>
  )
}
