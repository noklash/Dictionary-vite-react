import React from 'react'

const Output = ({post}) => {

    const arr = post[0].meanings[0].definitions  
    const arrSyn = post[0].meanings[0].synonyms 
    const arrAnt = post[0].meanings[0].antonyms

    // || post[1].meanings[0].synonyms
  
    const antonyms = arrAnt.map(ant => {
      return <span key={arrAnt.indexOf(ant) + 20}>{ant}{arrAnt.length - 1 === arrAnt.indexOf(ant) ? "." : ","} </span>
    })
    const synonyms = arrSyn.map(syn =>{
      return <span key={arrSyn.indexOf(syn) + 40}>{syn}{arrSyn.length - 1 === arrSyn.indexOf(syn) ? "." : ","} </span>
    })
    const definition = arr.map(def => {
      return <div className='flex output' key={arr.indexOf(def) + 1}> 
                <li className='my-2' key={arr.indexOf(def) + 1}> 
                    <hr className='mb-2 w-full'/>
                    <span className='mr-auto'>{arr.indexOf(def) + 1}.
                    </span>
                     <span className='mx-2'>{def.definition}
                     </span> {arr.length - 1 === arr.indexOf(def) ? <hr className='mt-2'/> : ""}
                </li>
             </div>
    })
  
    console.log(definition)

  return (
    
    <section className='mx-7 text-center pb-8'>
            
        {/* new */}
        
        <div>
          <h1 className='title font-extrabold'>{post[0].word}</h1>
          <p className='part_os'>Part of Speech: <span className='part'>{post[0].meanings[0].partOfSpeech}</span></p>
          <p className='transcription'>{post[0].phonetics[0]?.text}</p>
          <ol className=''>
            {definition}
          </ol>
          
          
          <p><span className='font-bold'>Synonyms: </span> {synonyms}  </p>
          
          <p><span className='font-bold'>Antonyms: </span> {antonyms}</p>
        </div>
      
      </section>
  )
}

export default Output