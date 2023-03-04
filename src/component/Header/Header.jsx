import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
    <div className="Body">
      <Link className='Hlink' to={'home'}>Home</Link>
      <Link className='Hlink' to={'login'}>Login</Link>
      <Link className='Hlink' to={'register'}>Register</Link>
    </div>
    </>
  )
}

export default Header