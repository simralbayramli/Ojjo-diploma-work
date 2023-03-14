import React from "react";
// import introsectionimg from '../assets/svgs/introsection.svg'

import Sviper from '../components/Sviper';
import Movingtext from '../components/Movingtext'

import { Link } from "react-router-dom";



const Section=()=>{
    

    return(
<section className="introsection"  >

<div className="introsections-header">
     {/* <h1>Long,Expensive,Rich</h1>  */}
     <Movingtext/>
    
    <Link to='/Catalog'><button>Product Catalog</button></Link>
</div>

  <Sviper/>  
    
    

  

</section>

    );
}
export default Section



