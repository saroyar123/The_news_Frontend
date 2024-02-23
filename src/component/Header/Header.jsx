
import { Link, Outlet } from 'react-router-dom'
import './Header.css'
import Cookies from 'js-cookie'

function Header({auth}) {
  return (
    <div>
      {
        // loading ? <Loading /> : (
          <>
            <div className="Navber_Body">
              <Link className='Hlink' to={'/'}>Feed</Link>
              {
                auth=== false ||Cookies.get("token")===undefined? 
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
    </div>
  )
}

export default Header