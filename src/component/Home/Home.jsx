import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const {userData}=useSelector((state)=>state.UserData);
  return (
    <div>{userData[0].name}
    <a href={userData[0].image.url}><Avatar
    src={userData[0].image.url}
    alt="user"
    /></a>
    </div>
    
  )
}

export default Home
