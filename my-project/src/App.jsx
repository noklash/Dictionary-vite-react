import { useState, useEffect } from 'react'
import Output from './Output'


import './App.css'
import { Form } from './Form'




function App() {
  // const [count, setCount] = useState(0)
  const [word, setWord] = useState("")
  const [post, setPost] = useState([])
  const [err, setErr] = useState(null)
  const [show, setShow] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsloading] = useState(true)

// function handleMode(){
//   setIsDark(prev => !prev)
// }

// testing starts
  useEffect(() => {
    setTimeout(() => {
    setIsloading(false)
    }, 5000)
  }, [])

  // if (isLoading) {
  //   return <div className='loading text-center justify-center'>NOKLASH DICTIONARY</div>
  // }

  // testing stops here


  useEffect(()=>{
    // setTimeout(() => {
    //   setIsloading(false)
    //   }, 5000)


    const getWords = () => {
      word !== "" && fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        if (res.status >= 400){
          throw new Error("ERROR WORD NOT FOUND PLEASE REFRESH PAGE") 
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
  // } else if (!show){
  //   return <div>Loading...</div>
  } else{
    return(

      
      <div className="ten">
        {isLoading && <div className='loading '>
                <h1 className='flicker'>Checkam <span className='tm'>&#8482;</span></h1>
        </div>}
        {/* new up */}
        {!isLoading && <div className='mb-auto pb-12'>
          <Form word={word} setWord={setWord} isDark={isDark}/>
          {show && <Output post={post}/>}
        
          {/* since show is only true when there is a fetch  */}
          {!show && <h2 className='text-center'>BLANK SPACE PLACE ADVERT LOL </h2>}
        </div>}
        <footer className='footer'>
          &copy; 2023 Noklashn. All rights reserved
        </footer>
    </div> 
     
    )
  }


}


  



export default App
