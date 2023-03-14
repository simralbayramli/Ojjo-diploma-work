import React,{useRef} from "react";
import logo from '../assets/svgs/logo.svg'
import {BsSearch} from 'react-icons/bs'
import{AiOutlineUser} from 'react-icons/ai'
import{AiFillHeart} from 'react-icons/ai'
import{AiFillYoutube} from 'react-icons/ai'
import{GrTwitter} from 'react-icons/gr'
import{AiFillFacebook} from 'react-icons/ai'
import{BsTelegram} from 'react-icons/bs'
import{FaInternetExplorer} from 'react-icons/fa'
import{AiOutlineBars} from 'react-icons/ai'
import{AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import {Link} from 'react-router-dom'


const Navbar=()=>{
    const overleyMenuRef=useRef()
    const barsRef=useRef()
    const closeOverleyMenuRef=useRef()
    const overleySearchRef=useRef()
    const searchRef=useRef()
    const openOverleyRegistrationRef=useRef()
    const registrationRef=useRef()
    const OverleyEmailJsRef=useRef()
    const openOverleyEmailJsRef=useRef()
    const contactRef=useRef()
    const catalogRef=useRef()
    
    const OverleyMenu=e=>{
        const kliklenenElement=e.target 
        if(kliklenenElement.classList.contains('bars')){
            overleyMenuRef.current.classList.add('overley-menu-active')
        }
    }
    const openOverleyEmailJs=(e)=>{
        const kliklenenElement=e.target 
        if(kliklenenElement.classList.contains('vacanties')){
            OverleyEmailJsRef.current.classList.add('overley-menu-active')
        }
    }

    
    const openOverleySearch=(e)=>{
        const kliklenenElement=e.target 
        if(kliklenenElement.classList.contains('search')){
            overleySearchRef.current.classList.add('overley-menu-active')
        }}
       
        const registration=(e)=>{
            const kliklenenElement=e.target 
            if(kliklenenElement.classList.contains('registration')){
                openOverleyRegistrationRef.current.classList.add('overley-menu-active')
            }
        }
const contact=()=>{
    overleyMenuRef.current.classList.remove('overley-menu-active')}
       
    const catalog=()=>{
        overleyMenuRef.current.classList.remove('overley-menu-active')
    }


    const closeOverleyMenu=()=>{
        
        overleyMenuRef.current.classList.remove('overley-menu-active')
        overleySearchRef.current.classList.remove('overley-menu-active')
         openOverleyRegistrationRef.current.classList.remove('overley-menu-active')
        OverleyEmailJsRef.current.classList.remove('overley-menu-active')}


        const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y978808', 'template_abm8yqo', form.current, 'puNZdw9Yps8WKWM8y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const notify = () => toast.success('Message send', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    return(
         <>
         
        
<div className="navbar ">
<div className="navbar-left">
    <Link to='/Contact' className="me-4 link">About Us</Link>
    <Link to='/Catalog' className="me-4 link">Designers</Link>
    <a href="#" className="me-4 link vacanties" ref={openOverleyEmailJsRef} onClick={openOverleyEmailJs}>Contact  </a>
</div>
<div className="logo ms-4"  ><img src={logo} alt=""  className='logo-img'/></div>

<div className="navbar-rigth">
    <a href="#" className="search ms-4 link" ref={searchRef} onClick={openOverleySearch}><BsSearch className="search-icons" ref={searchRef} onClick={openOverleySearch}/>   Search</a>
    <a href="#" className="ms-4 link"><span>Output/</span><span className="registration" ref={registrationRef} onClick={registration}>Registration</span></a>
    <a href="#" className="icons ms-4 link "><AiOutlineUser className=""/>   <AiFillHeart/></a>
    <span ><AiOutlineBars className="bars" ref={barsRef} onClick={OverleyMenu}/></span>
</div>

</div>

<div className="overley-menu" ref={overleyMenuRef}>
<div className="logo"><img src={logo} alt="" /></div> 
  <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOverleyMenu}/></span>
    <div className="menu">
     <Link to='/Contact' className="me-4 link" ref={contactRef} onClick={contact}>Counterparties</Link>
    <Link to='/Catalog' className="me-4 link" ref={catalogRef} onClick={catalog}>Designers</Link>
    <a href="#" className="me-4 link"  ref={openOverleyEmailJsRef} onClick={openOverleyEmailJs}>Vacanties</a>  
    <a href="#" className="link"><span>Output</span><span>/</span><span className="registration" ref={registrationRef} onClick={registration}>Registration</span></a>
    <a href="#" className="icons link  "><AiOutlineUser/><br/>    <AiFillHeart/>  </a>
    <div className="social-icons">
        <a href="#"><AiFillYoutube/></a>
        <a href="#"><GrTwitter/></a>
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><BsTelegram/></a>
        <a href="#"><FaInternetExplorer/></a>
    </div>
    </div>
      

        </div>
        <div className="overley" ref={overleySearchRef}>
        <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOverleyMenu}/></span>
        <input type="text" placeholder="Search" />
    </div>
        <div className="overley" ref={openOverleyRegistrationRef}>
        <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOverleyMenu}/></span>
<form action="">
    <h1>Welcome Ojjo</h1>
    <div className="input-box"><input type="text"  placeholder="username"/>
    </div>
    <div className="input-box"><input type="text" placeholder="email"  />
    </div>
    <div className="input-box"><input type="password" placeholder="password"  />
    </div>
    <div className="input-box">
    <button type="submit">Submit</button>
    <a href="">Forgot password?</a>
    
    </div>

</form>
<div className="social-icons">
        <a href="" className="yutube"><AiFillYoutube/></a>
        <a href="" className="twiter"><GrTwitter/></a>
        <a href="" className="facebook"><AiFillFacebook/></a>
        <a href=""><BsTelegram/></a>
        <a href=""><FaInternetExplorer/></a>
    </div>

        </div>
        <div className="overley" ref={OverleyEmailJsRef}>
        <span><AiOutlineClose className="span-x" ref={closeOverleyMenuRef} onClick={closeOverleyMenu}/></span>
            <form action="" ref={form} onSubmit={sendEmail}>
            <h1>Send your message to ojjo</h1>
            
            <div className="input-box"><input type="text" name="name" placeholder="username"  />
    </div>
    <div className="input-box"><input type="text" name="email" placeholder="email"  />
    </div>
    
    <div className="input-box"><input type="password" name="" placeholder="password"  />
    </div>
    <div className="input-box"><input type="text" name="subject" placeholder="subject" />
    </div>
    <div className="input-box"><textarea type='message' name="message" placeholder="message"/>
    
    </div>
    <div className="input-box">
    <button type="submit" onClick={notify}>Submit</button>
    
    </div>

            </form>
        </div>
        <ToastContainer/>
         </>

    )

}
export default Navbar