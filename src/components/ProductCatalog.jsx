import React from 'react'
import{RiRefund2Fill} from 'react-icons/ri'
import{SlBasketLoaded} from 'react-icons/sl'
import{GiRingBox} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Balans from './Balans'
const ProductCatalog = ({total,money,setMoney,basket,setBasket, product}) => {
  const basketItem= basket.find(item=>item.id===product.id)
  const addBasket =_=>{
    const checkBasket=basketItem
    if(checkBasket) {
      checkBasket.amount +=1
      setBasket([...basket.filter(item=>item.id!==product.id),checkBasket])
    }
    else{
      setBasket([...basket, {
        id:product.id,
        amount:1
      }])
    }
  }
  const refoundProdact = _ =>{
    const currentBasket= basket.find(item =>item.id===product.id)
    const basketWithoutCurrent=basket.filter(item=>item.id !== product.id)
    currentBasket.amount -=1
    if(currentBasket.amount===0){
      setBasket([...basketWithoutCurrent])
    } 
    else{
      setBasket([...basketWithoutCurrent,currentBasket])
    }
  }
  return (
    <>
    <div className="product-catalog-card">
    <Link to ='/Suspension'><div className="product-catalog-img"> 
        <img src={product.img} alt="" data-aos="flip-left"/>
        <div className="detalist">
            <GiRingBox className='ring'/>
            </div> 
      </div>
      </Link>
      <h5>{product.title}</h5>
      <h2>{product.name}</h2>
      <h4>{product.price}<span>&#36;</span></h4>
    <div className="product-catalog-button">
    <button onClick={addBasket} disabled={total+product.price>money}><SlBasketLoaded   size={32}/></button>
    <button disabled={!basketItem} onClick={refoundProdact}  ><RiRefund2Fill size={32} /></button>
    </div>
   
    </div>
    </>
  )
}

export default ProductCatalog