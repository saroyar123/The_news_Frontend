import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../Loading/Loading"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserAuth, getUserData } from '../../Action/userAction'


const Account = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const { loading, userData } = useSelector((state) => state.UserData)
  const token = localStorage.getItem("token");
  const logOutHandler =async () => {
     const {data}=await axios.get("/api/v1/logout",{
      headers:{
        "autharization":`Bearer ${token}`
      }
     })

     if(userData.data._id===data.data.id)
     {
      localStorage.removeItem("token");
      
      dispatch(UserAuth(null))
      dispatch(getUserData(null))
      navigate("/");
      
     }
  }

  return (
    <>
        {
          loading?
          <Loading/>
          :
          <div>
          {
            userData.success?(
             <>
              <h1>{userData.data.name}</h1>
              <Avatar src={userData.data.image.url} alt="user image"/>
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