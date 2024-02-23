import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../Loading/Loading"
import { useNavigate } from 'react-router-dom'
import { UserAuth, getUserData } from '../../Action/userAction'
import Cookies from 'js-cookie'


const Account = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { loading, data } = useSelector((state) => state.UserAuth)
  const token = localStorage.getItem("token");
  const logOutHandler =async () => {
      Cookies.remove("token");
      await dispatch(UserAuth(null))
      navigate("/");
  }

  return (
    <>
        {
          loading?
          <Loading/>
          :
          <div>
          {
            data.success?(
             <>
              <h1>{data.data.name}</h1>
              <Avatar src={data.data.image.url} alt="user image"/>
              <Button onClick={logOutHandler}>LogOut</Button>
             </>
            ):<h1>something is wrong</h1>
          }
          </div>

}
    </>


  )
}

export default Account