import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  const [auth,setAuth]=useState(false);
  const fetchAuth=useSelector((state)=>state.UserAuth.Auth);
  useEffect(()=>{

    if(!auth)
    {
      setAuth(fetchAuth);
    }
  },[auth,fetchAuth])
  return (
    <>
    <div className="Body">
      <Link className='Hlink' to={'home'} >Home</Link>
      <Link className='Hlink' to={'login'}>Login</Link>
      <Link className='Hlink' to={'register'}>Register</Link>
      <Link className='Hlink' to={'account'}>Account</Link>
      <Link className='Hlink' to={'createPost'}>CreatePost</Link>
    </div>
    </>
  )
}

export default Header