import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import './Header.css'

function Header() {
  const [auth, setAuth] = useState(false);
  const { Auth } = useSelector((state) => state.UserAuth);

  useEffect(() => {

    if (!auth) {
      setAuth(Auth.success);
      console.log("auth", Auth)
    }

  }, [auth, Auth])
  return (
    <>
      {
        // loading ? <Loading /> : (
          <>
            <div className="Navber_Body">
              <Link className='Hlink' to={'/'}>Feed</Link>
              {
                auth === false ? 
                (<Link className='Hlink' to={'login'}>Login</Link>) : (
                  <>
                    <Link className='Hlink' to={'account'}>Account</Link>
                    <Link className='Hlink' to={'createPost'}>CreatePost</Link>
                  </>

                )
              }

            </div>
            <div>
              <Outlet />
            </div>
          </>
        // )
      }
    </>
  )
}

export default Header