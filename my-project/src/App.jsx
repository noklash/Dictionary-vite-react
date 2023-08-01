import { useState, useEffect } from 'react'
import Output from './Output'


import './App.css'
import { Form } from './Form'




function App() {
  // const [count, setCount] = useState(0)
  const [word, setWord] = useState("a")
  const [post, setPost] = useState([])
  const [err, setErr] = useState(null)
  const [show, setShow] = useState(false)
  const [isDark, setIsDark] = useState(false)
  // const [input, setInput] = useState({"searchT": ""})

// function handleMode(){
//   setIsDark(prev => !prev)
// }



  useEffect(()=>{
    const getWords = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        if (res.status >= 400){
          throw new Error("ERROR WORD NOT FOUND")
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
    return <div>Loading...</div>
  } else{
    return(

      
      <div className={isDark ? "bg-black text-white" : ""}>
        <div className='mb-auto pb-12'>
          <Form word={word} setWord={setWord} isDark={isDark}/>
          <Output post={post}/>
        </div>
        <footer className='footer'>
          &copy; 2023 Noklashn. All rights reserved
        </footer>
    </div> 
     
    )
  }


}


  



export default App
