import { Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useDispatch, useSelector } from "react-redux";
import "./post.css"
import {
  commentAction,
  getAllPosts,
  likeAction,
  unLikeAction,
} from "../../Action/PostsAction";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const token = Cookies.get("token")

function Post({ image, caption, id, liked, unliked, userInfo, description, comments }) {

  console.log(image)

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.UserAuth)

  // start comment handler
  const [comment, setComment] = useState("");
  const commentSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(comment, id);

    if (auth) {
      await dispatch(commentAction(comment, id));
      setComment("")
      dispatch(getAllPosts())
    }
    else {
      toast.error("Please Login")
    }


  };
  // ending of comment

  // intialize the no of like and dislike
  const [noOfLikePost, setNoOfLikePost] = useState(liked.length)
  const [noOfDislikePost, setNoOfDislikePost] = useState(unliked.length)

  // start working on the like handler
  const [likePost, setlikePost] = useState(false);
  const { loading, userData } = useSelector((state) => state.UserData);

  const likeHandler = (e) => {
    e.preventDefault();

    if (auth) {

      let lu = 1;
      dispatch(likeAction(id, lu));
      if (likePost) {
        setlikePost(false);
        setNoOfLikePost(noOfLikePost - 1);

      }
      else {
        setlikePost(true);
        setNoOfLikePost(noOfLikePost + 1);
      }

      if (unlikedPost) {
        setUnlikedPost(false);
        setNoOfDislikePost(noOfDislikePost - 1);
      }
    }
    else {
      toast.error("Please Login")
    }



  };

  useEffect(() => {
    // setlikePost(false);
    if (token !== null) {
      if (!loading && userData.data) {
        liked.forEach((element) => {
          if (element.toString() === userData.data._id.toString()) {
            setlikePost(true);
          }
        });
      }
    }
    // console.log(likePost)
  }, [liked, loading, userData.data])

  // like handler end here

  //  working on unlike handler
  const [unlikedPost, setUnlikedPost] = useState(false);
  useEffect(() => {
    // setUnlikedPost(false);
    if (token !== null) {
      if (!loading && userData.data) {
        unliked.forEach((element) => {
          if (element.toString() === userData.data._id.toString()) {
            setUnlikedPost(true);
          }
        });
      }
    }
  }, [loading, unliked, userData.data])

  const unLikeHandler = async (e) => {
    e.preventDefault();

    if(auth)
    {
      let lu = 2;
      dispatch(unLikeAction(id, lu));
  
      if (unlikedPost) {
        setUnlikedPost(false);
        setNoOfDislikePost(noOfDislikePost - 1);
      }
      else {
        setUnlikedPost(true);
        setNoOfDislikePost(noOfDislikePost + 1);
      }
  
      if (likePost) {
        setlikePost(false);
        setNoOfLikePost(noOfLikePost - 1);
      }
    }
    else{
      toast.error("Please Login")
    }
   
  };
  // console.log(comments)

  // unlike handler end here


  return (
    <div className="post">
      <div className="userInfo">
        <img src={userInfo.image.url} alt="userImage" />
        <h3>{userInfo.name}</h3>
      </div>


      <div className="caption">
        <p>{caption}</p>
      </div>



      <div className="postImage">
        <img src={image.url} alt="postImage" />
      </div>
      <div className="post_description">
        <h4>{description}</h4>
      </div>


      <div className="postLikeAndDislike">

        <div className="noOfLikes">
          {/* like */}
          <Button disabled={token === null} onClick={likeHandler}>

            {
              likePost ?
                (<ThumbUpIcon fontSize="small" style={{ color: "black" }} />)
                :
                (<ThumbUpOffAltIcon fontSize="small" style={{ color: "black" }} />)

            }
          </Button>
          <h4>{noOfLikePost}</h4>
        </div>

        <div className="noOfUnlikes">
          {/* unlike */}
          <Button disabled={token === null} onClick={unLikeHandler}>
            {
              unlikedPost ? (<ThumbDownAltIcon fontSize="small" style={{ color: "black" }} />) :
                (<ThumbDownOffAltIcon fontSize="small" style={{ color: "black" }} />)
            }
          </Button>
          <h4>{noOfDislikePost}</h4>
        </div>

      </div>

      <div className="postComment">
        <form onSubmit={commentSubmitHandler} className="comment">
          <input
            type="text"
            placeholder="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <Button disabled={token === null} type="submit">comment</Button>
        </form>
      </div>
      <div className="comment_Box">
        <h3>Comments</h3>
        {
          comments.map((comment) => (
            <div className="comment_Details">
              <div className="comment_by_Users">
                <img src={comment.commented_user.image.url} alt="Commented_User"></img>
                <h4>{comment.comment}</h4>
              </div>
                
  


            </div>

          ))
        }
      </div>






    </div>
  );
}

export default Post;
