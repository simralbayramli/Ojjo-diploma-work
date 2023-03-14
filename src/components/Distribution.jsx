import React from 'react'
import distrubition from '../assets/svgs/disrtibution.svg'
import {AiFillCaretRight} from 'react-icons/ai'

const Distribution = () => {
  return (
    <>
    <div className="distribution">
      <div className="distribution-header">
      <h5>Helpful tips and personalized suggestions</h5>
      <h3>Exclusive mailing list</h3>
      </div>
      <div className="distribution-section">
        <div className="distribution-list">
          <a href=""><AiFillCaretRight/>Personal manager</a>
          <a href=""><AiFillCaretRight/>Delivery and clearance</a>
          <a href=""><AiFillCaretRight/>Individual designn</a>
        </div>
        <div className="distribution-form">
          <form action="" className='forms'>
            <input type="email" placeholder='email' />
            <button type='submit'>send</button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Distribution