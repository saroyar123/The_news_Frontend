import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../Action/userAction';
import {redirect} from 'react-router-dom'

const Account = () => {
  
  const {loading,userData}=useSelector((state)=>state.UserData)
  console.log(loading,userData)
  const dispatch=useDispatch();

  // logout action start here

  const [logOutSuccess,setLogOutSuccess]=useState(false)
  const token=localStorage.getItem("token");
  const logOutHandler=()=>{
   dispatch(logOutUser(token));
   
   
  }
  
  const {data}=useSelector((state)=>state.UserActions)
  useEffect(()=>{
   if(data!=null)
   {
     setLogOutSuccess(data.success);
   }
   if(logOutSuccess)
   {
    localStorage.removeItem("token");
    window.location.replace("http://localhost:3000/")
  }

  },[setLogOutSuccess,data,logOutSuccess])




  return (
    <div>
    {
      userData &&userData.length>0 ?(
       <>
        <h1>{userData[0].name}</h1>
        <Avatar src={userData[0].image.url} alt="user image"/>
        <Button onClick={logOutHandler}>LogOut</Button>
       </>
      ):<h1>something is wrong</h1>
    }
    </div>
  )
}

export default Account