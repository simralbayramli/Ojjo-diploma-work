import React from 'react'
import visacard from '../assets/svgs/visacard.svg'
import mastercard from '../assets/svgs/mastercard.svg'
import{AiFillYoutube} from 'react-icons/ai'
import{GrTwitter} from 'react-icons/gr'
import{AiFillFacebook} from 'react-icons/ai'
import{BsTelegram} from 'react-icons/bs'
import{FaInternetExplorer} from 'react-icons/fa'
import phone from '../assets/svgs/phone.svg'
import message from '../assets/svgs/mesage.svg'

const Footer = () => {


  return (
    <>
    <div className="footer">
        <div className="footer-top">
         <div className="footer-section">
           <h1>Useful links</h1> 
           
            <a href="">Delivery</a>
            <a href="">Payment </a>
            <a href="">Stock</a>
            <a href="">Privacy Policy</a>
           
         </div>
         <div className="footer-section">
          <h1>Payment</h1>
          <p>Lorem ipsum dolor sit amet, <br />
           consectetur adipiscing elit. Ullamcorper <br />
            justo, nec, pellentesque.</p>
            
                <div className="cards">
                <a href="" ><img src={visacard} alt="" /></a>
                <a href=""><img src={mastercard} alt="" /></a>
                </div>
        
         </div>
         <div className="footer-section">
          <h1>Contacts</h1>
          
            <a href=""><img src={phone} alt="phone" />      (+994) 51 622-09-22</a>
            <a href=""><img src={phone} alt="phone" />      (+994) 51 622-09-22</a>
            <address><img src={message} alt="message" />    ojjo@ojjo.ru</address>
          
         </div>
         <div className="footer-section">
           <h1>Social Networks</h1>
           <p>Lorem ipsum dolor sit amet, <br />
           consectetur adipiscing elit. Ullamcorper <br />
            justo, nec, pellentesque.</p>
            <div className="social-media">
            <a href="https://www.youtube.com/watch?v=VD0BPupbxeg" className='youtube'><AiFillYoutube/></a>
        <a href='https://twitter.com/?lang=ru' className='twitter'><GrTwitter/></a>
        <a href="" className='facebook'><AiFillFacebook/></a>
        <a href=""><BsTelegram className='Telegram'/></a>
        <a href=""><FaInternetExplorer className='exploler'/></a>
            </div>
         </div>
        </div>
        <div className="footer-bottom">
            <a href="">(c) 2020 OJJO jewelry</a>
          <a href="">public offer agreement</a>
         <a href="">Counterparties</a>
        <a href="">Made by Figma.info</a>
        </div>
    </div>
    </>
  )
}

export default Footer