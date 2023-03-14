import React from 'react'
 import{GiBigDiamondRing} from 'react-icons/gi'
const Productimg = ({ProductsImg,title}) => {
  return (
    
        <div className="img" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={ProductsImg}alt="" />
            <h1>{title}</h1>
            <div className="detalist">
            <GiBigDiamondRing className='ring'/>
            </div>
            
        </div>
        
    
  )
}

export default Productimg