import { Avatar, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useDispatch } from 'react-redux';
import { commentAction, getAllPosts } from '../../Action/PostsAction';


function Post({image,caption,id}) {
  const [comment,setComment]=useState("");
  const dispatch=useDispatch();
  const token=localStorage.getItem("token");

  const commentSubmitHandler=async(e)=>{
    e.preventDefault();
    console.log(token,comment,id);
    await dispatch(commentAction(comment,token,id));
    dispatch(getAllPosts());
  }

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