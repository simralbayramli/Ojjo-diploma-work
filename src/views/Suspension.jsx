import React from 'react'
import Cataloginformation from '../components/Cataloginformation'
import img from '../assets/images/r.webp'

import { Link } from 'react-router-dom'
// import Message from '../components/Message'
const Suspension = () => {
  return (
    <>
    
    <div className="suspension-link">
      <Link to='/'>Home</Link>
      <Link to='/Catalog'>Catalog</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
      <div className="suspension-section">
        <div className="suspension-left">
  <div className="suspension-left-top">
  <img src={img} alt="" />
  </div>
   <div className="suspension-left-bottom">
    <img src={img} alt="" />
    <img src={img} alt="" />
    <img src={img} alt="" />
   </div>
        </div>
        <div className="suspension-right">
          <h1>Suspension Dolce & Gabbara</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
Et nulla sit convallis orci est, fames sit luctus lacus. 
</p>

        </div>
      </div>
      <Cataloginformation/>
      {/* <Message/> */}
      {/* <div className="suspension-bottom">
      <img src={img} alt="" />
    <img src={img} alt="" />
    <img src={img} alt="" />
      </div> */}
    </>
     
  
  )
}

export default Suspension