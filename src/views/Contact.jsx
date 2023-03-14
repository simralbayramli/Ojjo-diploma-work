import React from 'react'
import{HiLocationMarker} from 'react-icons/hi'
import{AiFillPhone} from 'react-icons/ai'
import{AiOutlineMail} from 'react-icons/ai'
//  import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <div className="contact">
      <div className="contact-link">
        <Link to='/'>Home/</Link>
        <Link to='/Catalog'>Catalog</Link>
      </div>
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
        <div className="contact-top">
          <div className="contact-section">
            <h1>Main office</h1>
            <address><HiLocationMarker/>   Nevsky 140, office 1-5</address>
            <address>Nevsky 140, office 1-5</address>
          </div>
          <div className="contact-section">
            <h1>Phones</h1>
            <a href=""><AiFillPhone/> 8 (812) 458-56-45</a>
            <a href="">8 (812) 458-56-45</a>
          </div>
          <div className="contact-section">
             <h1>E-mail</h1>
             <a href=""><AiOutlineMail/>  office@ojjo.com</a>
             <a href="">office@ojjo.com</a>
          </div>
          <div className="contact-section">
              <h1>Add. addresses</h1>
              <address><HiLocationMarker/>   Nevsky 140, office 1-5</address>
              <address>Zagorodny 145, office 11-15</address>
          </div>
        </div>
        <h1></h1>
        
        <div className="contact-bottom">
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4283503014753!2d49.85172681489329!3d40.377198065967654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1sru!2s!4v1668279947467!5m2!1sru!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'></iframe>
        </div>
    </div>
    </>
  )
}

export default Contact