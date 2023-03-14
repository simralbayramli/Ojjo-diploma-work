import React,{useRef} from 'react'
import video1 from '../assets/video/v-1.mp4'
import video2 from '../assets/video/v-2.mp4'
import socialimg1 from '../assets/svgs/social1.svg'
import socialimg2 from '../assets/svgs/social2.svg'
import socialimg3 from '../assets/svgs/social3.svg'
import socialimg4 from '../assets/svgs/social4.svg'
 import socialimg5 from '../assets/svgs/social5.svg'
 import socialimg6 from '../assets/svgs/social6.svg'
 import{GiCutDiamond} from 'react-icons/gi'
 import{AiOutlineClose} from 'react-icons/ai'
const Socialnetwork = () => {
  const openOverleyVideoRef=useRef()
  const openVideoRef=useRef()
  const openvideoRef=useRef()
  const closeOverleyMenuRef=useRef()
  const openOverleyvideoRef=useRef()
  const openVideo=(e)=>{
    const kliklenenElement=e.target
    if(kliklenenElement.classList.contains('img')){
      openOverleyVideoRef.current.classList.add('ojjo-video-active')
    }
    
  }
  const openvideo=(e)=>{
    const kliklenenElement=e.target
    if(kliklenenElement.classList.contains('img')){
      openOverleyvideoRef.current.classList.add('ojjo-video-active')
    }
  }
  const closeOjjo=(e)=>{
    const kliklenenElement=e.target
    if(kliklenenElement.classList.contains('span-x')){
      openOverleyVideoRef.current.classList.add('ojjoo')
      openOverleyvideoRef.current.classList.add('ojjoo')
    }
  }
  return (
    <>
    <div className='social-network'>
        <a href="#">#ojjo_jewerly</a>
        <h2>we are in social networks</h2>
        <div className="social-network-products">
        <div className="social-product">
        
           <img src={socialimg1} alt="" ref={openVideoRef} onClick={openVideo} className="img" /> 
           <img src={socialimg2} alt="" ref={openVideoRef} onClick={openVideo} className="img" /> 
           <img src={socialimg3} alt="" ref={openVideoRef} onClick={openVideo} className="img" /> 
         
        </div>
         <div className="social-product">
         
        <img src={socialimg4} alt="" ref={openvideoRef} onClick={openvideo} className="img" /> 
           <img src={socialimg5} alt="" ref={openvideoRef} onClick={openvideo} className="img" /> 
           <img src={socialimg6} alt="" ref={openvideoRef} onClick={openvideo} className="img" />  
           
        </div> 
        </div>
    </div>
    <div className="overley-video-top" ref={openOverleyVideoRef}>
    <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOjjo}/></span>
 <video controls loop autoPlay muted className='ojjo-videos'>
              <source src={video1} />
            </video> 
            
    </div>
    <div className="overley-video-top" ref={openOverleyvideoRef} >
    <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOjjo}/></span>
 <video controls loop autoPlay muted className='ojjo-videos'>
              <source src={video2} />
            </video> 
            
    </div>
</>
  )
}

export default Socialnetwork