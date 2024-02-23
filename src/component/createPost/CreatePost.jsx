import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { UserAuth} from '../../Action/userAction';
import { createPost, getAllPosts } from '../../Action/PostsAction'
import "./CreatePost.css"
import Cookies from 'js-cookie';

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [nameLocation, setNameLocatin] = useState("");
  const [description, setDescription] = useState("Give the description about the event.......")
  const [logititude, setLogititude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const dispatch = useDispatch();



  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
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
    const token = Cookies.get("token");
    console.log(token)
    await dispatch(createPost(caption, image, description, location));
    dispatch(UserAuth(token));
    dispatch(getAllPosts());
    setCaption("")
    setDescription("")
    setImage("")
    setNameLocatin("")


  }
  return (
    <>
      <div className='createPost'>
        <div className='createPostBox'>
          <div className='createPostImage'>
            <img src={image} alt='News' />
          </div>

          <form onSubmit={submitHandler} className='createPostForm' >
            <div className='createPostImageUpload'>
              <label htmlFor="fileInput" className="custom-file-input">
                Choose a file
                <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} />
              </label>

            </div>
            <div className='createPostOtherInputs'>
              <input type='text' placeholder='Headline for you event' value={caption} onChange={(e) => setCaption(e.target.value)} />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              <input type='text' placeholder='name of your location' value={nameLocation} onChange={(e) => setNameLocatin(e.target.value)} />

              <Button type='submit'>submit</Button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}

export default CreatePost