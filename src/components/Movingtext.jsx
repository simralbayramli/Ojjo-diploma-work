import React, { useState } from 'react'
import MovingComponent from 'react-moving-text'
import {letters} from 'react-moving-text'
const AnimationsForChaining = ["swing"]

const Movingtext = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    //  setAnimationType(selectedItems[animationIndex+1])
  }

  return (
    
<MovingComponent
  
  type="fadeInFromTop"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="3"
  fillMode="none">
  <h1 data-aos="zoom-in">Long,Expensive,Rich</h1>




  
</MovingComponent>





  



   


      
    
  )
}
export default Movingtext