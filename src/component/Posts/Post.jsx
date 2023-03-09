import { Avatar, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useDispatch, useSelector } from 'react-redux';
import { commentAction, getAllPosts } from '../../Action/PostsAction';


function Post({image,caption,id,liked}) {

  
  // start working on comment
  const [comment,setComment]=useState("");
  const dispatch=useDispatch();
  const token=localStorage.getItem("token");

  const commentSubmitHandler=async(e)=>{
    e.preventDefault();
    console.log(token,comment,id);
    await dispatch(commentAction(comment,token,id));
    dispatch(getAllPosts());
  }
// ending of comment 

// start working on the like
const [likePost,setlikePost]=useState(false);
const {loading,userData}=useSelector((state)=>state.UserData);


if(!loading)
{
  console.log(userData[0]._id);
  liked.forEach(element => {
    if(element.toString()===userData[0]._id.toString())
    {
      setlikePost(true);
    }
   });
}

 console.log(likePost)
  const likeHandler=()=>{
     
  }

  const unLikeHandler=()=>{

  }
  return (
    <div>
        <Typography>{caption}</Typography>
        <Avatar
        src={image.url}
        alt='image of post'
        />
        <form onSubmit={commentSubmitHandler} className="comment">
          <input type='text' placeholder='comment' value={comment} onChange={(e)=>setComment(e.target.value)}></input>
          <Button type='submit'>comment</Button>
        </form>
        <Button onClick={likeHandler}>{
        <ThumbUpOffAltIcon
        fontSize="small"
        style={{ color: "black"}}
        />}</Button>
        <Button onClick={unLikeHandler}>{
          <ThumbDownOffAltIcon
          fontSize='small'
        />}</Button>

    </div>
  )
}

export default Post