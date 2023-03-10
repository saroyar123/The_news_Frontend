import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Link, Outlet} from 'react-router-dom'
import Loading from '../Loading/Loading';
import './Header.css'

function Header() {
  const [auth,setAuth]=useState(false);
  const {loading,Auth}=useSelector((state)=>state.UserAuth);

  useEffect(()=>{

    if(!auth)
    {
      setAuth(Auth.success);
    }

  },[auth,Auth])

  console.log("auth",auth)
  return (
    <>
    {
      loading?<Loading/>:(
      <>
          <div className="Body">
      <Link className='Hlink' to={'/'}>Feed</Link>
      {
        auth===false?(<Link className='Hlink' to={'login'}>Login</Link>):(
          <>
          <Link className='Hlink' to={'account'}>Account</Link>
          <Link className='Hlink' to={'createPost'}>CreatePost</Link>
          </>
          
        )
      }
      
    </div>
    <div>
      <Outlet/>
    </div>
      </>
      )
    }
    </>
  )
}

export default Header