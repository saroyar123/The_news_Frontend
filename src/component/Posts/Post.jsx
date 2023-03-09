import { Avatar, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useDispatch, useSelector } from "react-redux";
import {
  commentAction,
  getAllPosts,
  likeAction,
  unLikeAction,
} from "../../Action/PostsAction";

function Post({ image, caption, id, liked,unliked }) {
  // start working on comment
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const commentSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(token, comment, id);
    await dispatch(commentAction(comment, token, id));
    dispatch(getAllPosts());
  };
  // ending of comment

  // start working on the like handler
  const [likePost, setlikePost] = useState(false);
  const { loading, userData } = useSelector((state) => state.UserData);
  
  const likeHandler =async (e) => {
    e.preventDefault();
    let lu = 1;
     await dispatch(likeAction(token, id, lu));
     dispatch(getAllPosts());
    
  };

  useEffect(()=>{
    setlikePost(false);
    if (!loading && userData.length > 0) {
      liked.forEach((element) => {
        if (element.toString() === userData[0]._id.toString()) {
          console.log("like posts")
          setlikePost(true);
        }
      });
    }
    console.log(likePost)
   },[loading,likePost,setlikePost,liked,userData])

  // like handler end here

//  working on unlike handler
 const [unlikedPost,setUnlikedPost]=useState(false);
 useEffect(()=>{
  setUnlikedPost(false);
  if (!loading && userData.length > 0) {
    unliked.forEach((element) => {
      if (element.toString() === userData[0]._id.toString()) {
        console.log("unlike posts")
        setUnlikedPost(true);
      }
    });
  }
  console.log(unliked)
 },[loading,unliked,unlikedPost,setUnlikedPost,userData])
  const unLikeHandler =async(e) => {
    e.preventDefault();
    let lu=2;
    await dispatch(unLikeAction(token,id,lu));
    dispatch(getAllPosts());
  };

  // unlike handler end here


  return (
    <div>
      <Typography>{caption}</Typography>
      <Avatar src={image.url} alt="image of post" />
      <form onSubmit={commentSubmitHandler} className="comment">
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <Button type="submit">comment</Button>
      </form>

      {/* like */}
      <Button onClick={likeHandler}>
        
        {likePost ? (
          <ThumbUpIcon fontSize="small" style={{ color: "black" }}/>
        ) : (
          <ThumbUpOffAltIcon fontSize="small" style={{ color: "black" }} />
        )}
      </Button>

      {/* unlike */}
      <Button onClick={unLikeHandler}>
        {
          unlikedPost?(<ThumbDownAltIcon fontSize="small" style={{ color: "black" }}/> ):(<ThumbDownOffAltIcon fontSize="small" style={{ color: "black" }} />)
          
        }
      </Button>
    </div>
  );
}

export default Post;
