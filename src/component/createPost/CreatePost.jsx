import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {getUserData } from '../../Action/userAction';
import {createPost, getAllPosts} from '../../Action/PostsAction'

function CreatePost() {
  const [caption,setCaption]=useState("");
  const [image,setImage]=useState("");
  const [nameLocation, setNameLocatin] = useState("");
  const [logititude, setLogititude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const dispatch=useDispatch();



  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
    console.log(image);
  };

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
      }
      const token=localStorage.getItem("token");
      console.log(token)
      await dispatch(createPost(token,caption,image,location));
      dispatch(getUserData(token));
      dispatch(getAllPosts());
}
  return (
    <>
        <Avatar
                    src={image}
                    alt="User"
                    sx={{ height: "10vmax", width: "10vmax" }}
         />
     <form onSubmit={submitHandler} >
        <input type='text' placeholder='caption' value={caption} onChange={(e) => setCaption(e.target.value)} />
        <input type='text' placeholder='name of your location' value={nameLocation} onChange={(e) => setNameLocatin(e.target.value)} />
        <input type='file' accept='image/*' onChange={handleImageChange} />
        <Button type='submit' >submit</Button>

      </form>
    </>
  )
}

export default CreatePost