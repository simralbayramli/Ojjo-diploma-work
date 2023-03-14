import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Navbar from './components/Navbar'
import CookieConsent from 'react-cookie-consent'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
 import Home from './views/Home'
 import Contact from './views/Contact'
   import Catalog from './views/Catalog';
import Suspension from './views/Suspension';
import Error  from './views/Error';
import AOS from 'aos'
import "aos/dist/aos.css"


function App() {
  useEffect(()=>{
    AOS.init({duration:1500})
  },[])
  return (
    
   <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route  path='/' exact element={<Home/>}/>
   <Route  path='/Contact' exact element={<Contact/>}/>
   <Route path='/Catalog' exact element={<Catalog/>}/>
   <Route path='/Suspension' exact element={<Suspension/>}/>
   <Route path='*' exact element={<Error/>}/>
   </Routes>
    
  
        
     
      <Footer/>
      </BrowserRouter>
        <CookieConsent
  location="bottom"
  buttonText="Accept all"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>  

   </>
  );
}

export default App;
