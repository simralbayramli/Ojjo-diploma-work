import React from 'react'
import Errorimg from '../assets/images/gif img/g-1.gif'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
  <p>404</p>
  <h2>Look like you're lost</h2>
  <h5>the page you are looking for not avaible!</h5>
  <Link to='/'>Go to Home</Link>
    </div>
  )
}

export default Error