import React from 'react'
import { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import { getUserData } from '../../Action/userAction';
import { useDispatch } from 'react-redux'
import axios from 'axios';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameLocation, setNameLocatin] = useState("");
  const [logititude, setLogititude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [image,setImage]=useState("")
  const dispatch = useDispatch();


  const imageSubmithandler=(e)=>{
    const file = e.target.files[0];

  const Reader = new FileReader();
  Reader.readAsDataURL(file);

  Reader.onload = () => {
    if (Reader.readyState === 2) {
      setImage(Reader.result);
      // console.log(image);
    }
  };
  
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLogititude(position.coords.longitude);
    })
    const location = {
      name: nameLocation,
      coordinates: {
        latitude,
        logititude
      }
    };
    console.log("register")
 // https://thenews-backend.onrender.com
    const { data } = await axios.post("/api/v1/register", {
      name,
      email,
      password,
      location,
      image
    });
    console.log(data);
    await localStorage.setItem("token", data.token);
    dispatch(getUserData(data.token));


  }


  return (
    <div>
       <Avatar
                    src={image}
                    alt="User"
                    sx={{ height: "10vmax", width: "10vmax" }}
         />
      <form onSubmit={submitHandler} >
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='text' placeholder='name of your location' value={nameLocation} onChange={(e) => setNameLocatin(e.target.value)} />
        <input type='file' accept='image/*' onChange={imageSubmithandler} />
        <Button type='submit' >submit</Button>

      </form>
    </div>
  )
}

export default Register;

// https://thenews-backend.onrender.com