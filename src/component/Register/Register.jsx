import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import { getUserData } from '../../Action/userAction';
import { useDispatch } from 'react-redux'
import axios from 'axios';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameLocation, setNameLocatin] = useState("");
  const [logititude, setLogititude] = useState(null);
  const [latitude, setLatitude] = useState(null)
  const dispatch = useDispatch();




const submitHandler = async (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    setLatitude(position.coords.altitude);
    setLogititude(position.coords.longitude);
  })
    const location = {
      name: nameLocation,
      coordinates: {
        latitude,
        logititude
      }
    }
    const { data } = await axios.post("/api/register", {
      name,
      email,
      password,
      location
    });
    console.log(data.token);
    localStorage.setItem("token",data.token);
    dispatch(getUserData(data.token));


  }


  return (
    <div>
      <form onSubmit={submitHandler} >
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='text' placeholder='name of your location' value={nameLocation} onChange={(e) => setNameLocatin(e.target.value)} />
        <Button type='submit' >submit</Button>

      </form>
    </div>
  )
}

export default Register;