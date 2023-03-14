import React from 'react'
import Section from '../components/Section'
import Productsection from '../components/Productsection'
import Salonsection from '../components/Salonsection'
// import Giftssection from '../components/Giftssection'
import Socialnetwork from '../components/Socialnetwork'
import Distribution from '../components/Distribution'
import GiftsCorusel from '../components/GiftsCorusel'
const Home = () => {
  return (
    <>
    <Section/> 
  <Productsection/>
  <Salonsection/>
     {/* <Giftssection/> */}
     <GiftsCorusel/>
     <Socialnetwork/>
        <Distribution/> 
    </>
  )
}

export default Home