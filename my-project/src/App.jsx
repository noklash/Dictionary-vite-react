import { useState, useEffect } from 'react'
import Output from './Output'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { Form } from './Form'

function App() {
  // const [count, setCount] = useState(0)
  const [word, setWord] = useState("a")
  const [post, setPost] = useState([])
  const [err, setErr] = useState(null)
  const [show, setShow] = useState(false)
  // const [input, setInput] = useState({"searchT": ""})


  useEffect(()=>{
    const getWords = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        if (res.status >= 400){
          throw new Error("SERVER RESPONDS WITH ERROR!")
        }
        return res.json()
      }) 
      .then((data) =>{
        console.log(data)
        setPost(data)
        setShow(true)
      },
          err => {
            setErr(err)
            setShow(true)
          })
        }
        getWords()
        
       
  }, [word])

  if (err) {
    return <div>{err.message}</div>
  } else if (!show){
    return <div>showing...</div>
  } else{
    return(
      <div>
        <Form word={word} setWord={setWord} />
        <Output post={post}/>
    
      </div>
    )
  }


}


  



export default App
