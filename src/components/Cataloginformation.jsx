import React,{useRef} from 'react'
import catalog1 from '../assets/svgs/catalog1.svg'
import catalog2 from '../assets/svgs/catalog2.svg'
import catalog3 from '../assets/svgs/catalog3.svg'
import catalog4 from '../assets/svgs/catalog4.svg'
const Cataloginformation = () => {
    const textRef=useRef()
const openTextRef=useRef()
const openText=(e)=>{
    const kliklenenElement=e.target 
    if(kliklenenElement.classList.contains('open-text')){
        textRef.current.classList.add('text-active')
       
    } 
    
}
    return (
        <>
            <div className="catalog-information">
                <div className="catalog-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />
                     elit. Assumenda, earum velit  consequuntur mollitia  <br />
                        

                        <span ref={textRef} className='text'>  obcaecati,doloribus exercitationem? Ipsa, nulla dolore sunt  <br />
                             nam illo earum consectetur cumque, rerum ullam <br /> eligendi exercitationem doloribus neque asperiores laborum </span></p>
                             <span ref={openTextRef} onClick={openText} className='open-text'>Read completely</span>
                </div>
                <div className="catalog-right">
                    <div className="catalog-right-section">
                    <img src={catalog1} alt="" />
                    <h6>Free delivery</h6>
                    
                    </div>
                    <div className="catalog-right-section">
                    <img src={catalog2} alt="" />
                    <h6>Free delivery</h6>
                    
                    </div>
                    <div className="catalog-right-section">
                    <img src={catalog3} alt="" />
                    <h6>Free delivery</h6>
                
                    </div>
                    <div className="catalog-right-section">
                    <img src={catalog4} alt="" />
                    <h6>Free delivery</h6>
                    
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Cataloginformation