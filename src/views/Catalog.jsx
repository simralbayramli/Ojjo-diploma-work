

import  Dropdown  from '../components/Dropdown'
import Distribution from '../components/Distribution'
import ProductCatalog from '../components/ProductCatalog'
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import Balans from '../components/Balans'
import { Link } from 'react-router-dom'
import productList from '../json/catalog.json'
import Cataloginformation from '../components/Cataloginformation'
import Servicespricing from '../components/Servicespricing'

const Catalog = () => {


  


  const[money,setMoney]=useState(5000)
  const [basket,setBasket]=useState([])
  const[total,setTotal]=useState(0)
  useEffect(() => {
    setTotal(
      basket.reduce ((acc,item)=>{
        return acc+(item.amount * (productList.find(product => product.id===item.id).price))
      },0)
    )
  }, [basket])


  
  // const resetBasket=()=>{
  //   setBasket([])
  // }

  
  return (
    <>
     <Balans total={total} money={money}className='balans'/> 
    <div className="catalog-link">
      <Link to='/'>Home/</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
   
    <Dropdown/>
    <div className="product-catalog-section">
    
    {
      productList.map((product,index)=>(
        <ProductCatalog key={index} total={total} money={money} setMoney={setMoney} basket={basket} setBasket={setBasket} product={product}/>
      ))
     }
    </div>
   
    <Cataloginformation/>
    <Servicespricing/>
    <Distribution/>
    </>
  )
}

export default Catalog