import React from "react";

import Productimg from './Productimg';
import Products from '../json/product.json';
const Productsection=()=>{


    return(
<>

<section className="product-section">
  <h5>Go to events</h5>
  <h2>The real beauty is here!</h2>
<div className="buttons ">
    
    <button className="">Wedding</button>
    <button className="btn-lg btn-sm">Man</button>
    <button className="btn-lg btn-sm">Woman</button>
    <button className="btn-lg btn-sm">Partner</button>
    <button className="btn-lg btn-sm">Collection</button>
    <button className="btn-lg btn-sm">Rarity</button>
    
</div>
<div className="menu" >
{
      Products.map((Product)=>(
        <Productimg ProductsImg={Product.image}  />
      ))
     }
    
</div>
</section>



</>
    )
}
export default Productsection