import { useState, useEffect } from 'react'
import Output from './Output'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Form } from './Form'

function App() {
  // const [count, setCount] = useState(0)
  const [word, setWord] = useState("")
  const [post, setPost] = useState([])
  const [error, setError] = useState(null)
  const [show, setShow] = useState(false)
  // const [input, setInput] = useState({"searchT": ""})


  useEffect(()=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => 
        res.json().then((data) =>{
        console.log(data)
        setPost(data)
      })
      )  
  }, [word])

return(
  <div>
    <Form word={word} setWord={setWord} />
    {/* <Output post={post}/> */}

  </div>
)

}


  



export default App
