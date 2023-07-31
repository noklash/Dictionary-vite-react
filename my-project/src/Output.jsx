import React from 'react'

const Output = ({post}) => {

    const arr = post[0].meanings[0].definitions
    const arrSyn = post[0].meanings[0].synonyms
    const arrAnt = post[0].meanings[0].antonyms
  
    const antonyms = arrAnt.map(ant => {
      return <span>{ant},</span>
    })
    const synonyms = arrSyn.map(syn =>{
      return <span>{syn}{arrSyn.length - 1 === arrSyn.indexOf(syn) ? "." : ","} </span>
    })
    const definition = arr.map(def => {
      return  <li>{def.definition}</li>
    })
  
    console.log(definition)

  return (
    
    <section>
        
        <div>
          <h1 className='title font-extrabold'>{post[0].word}</h1>
          <p className='part_os'>Part of Speech: {post[0].meanings[0].partOfSpeech}</p>
          <p className='transcription'>{post[0].phonetics[0].text}</p>
          <ol>
            {definition}
          </ol>
          
          
          <p><span className='font-bold'>Synonyms: </span> {synonyms}  </p>
          
          <p><span className='font-bold'>Antonyms: </span> {antonyms}</p>
        </div>
      
      </section>
  )
}

export default Output