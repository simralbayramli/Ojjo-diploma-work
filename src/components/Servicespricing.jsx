import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Servicespricing = () => {
//&#11088;.....⭐

  const [data,setData]=useState(0)
  const [emoji,setEmoji]=useState('😒')
  useEffect(()=>{
    if(data==20){
      setEmoji('😒')
    }
     else if(data==40){
      setEmoji('🙂')
    }
     else if(data==60){
      setEmoji('😛')
    }
     else if(data==80){
     setEmoji('🥰')
    }
     else if(data==100){
       setEmoji('😍')
     }
  },[data])
  return (
    <>
    <div className='Services-price'>
      <h3>We'd love some feedback</h3>
      <div className="services-pricing-section">
        
        <h1>{emoji}</h1>
         <input type="range" min={20} max={100} step={20} value={data} onChange={(e)=>setData(e.target.value)} className='range' /> 
        <h2>{data}%</h2>
        <h4>How would you rate our website?</h4>
      </div>
    </div>
    
    </>
  )
}

export default Servicespricing