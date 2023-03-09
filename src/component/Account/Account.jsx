import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  const {loading,userData}=useSelector((state)=>state.UserData)
  console.log(loading,userData)
  return (
    <div>
    {
      userData &&userData.length>0 ?(
       <>
        <h1>{userData[0].name}</h1>
        <Avatar src={userData[0].image.url} alt="user image"/>
       </>
      ):<h1>something is wrong</h1>
    }
    </div>
  )
}

export default Account