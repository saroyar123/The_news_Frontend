import axios from 'axios'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const token=Cookies.get("token")

// create post action 
export const createPost = (caption,image,description,location) => async (dispatch) => {
    try {
      dispatch({
        type:"CreatePostRequest"
      })
  // https://thenews-backend.onrender.com

  console.log("create post call  ")
      const {data}=await axios.post("https://thenews-backend.onrender.com/api/v1/post",{caption,image,description,location},{
        headers:{
          "Authorization":`Bearer ${token}`
         }
      }); 

      // alert
      toast.success("Post created", {
        position: toast.POSITION.TOP_RIGHT,
      });


      dispatch({
        type:"CreatePostSuccess",
        playload:data
      });
    } catch (error) {
      console.log(error.response.data)

      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: "CreatePostFailure",
        playload: error.response.data,
      });
    }
  };

// for get all the posts from the database

export const getAllPosts = () => async (dispatch) => {
    try {
      dispatch({
        type:"allPostsRequest"
      })
  // https://thenews-backend.onrender.com
      const {data}=await axios.get(`https://thenews-backend.onrender.com/api/v1/getAllPosts`);


      dispatch({
        type:"allPostsSuccess",
        playload:data
      });
    } catch (error) {

      dispatch({
        type: "allPostsFailure",
        playload: error.response.data,
      });
    }
  };

  // action on the post for like 

  export const likeAction=(id,lu)=>async(dispatch)=>{
    try {
      dispatch({
        type:"likePostRequest"
      })

      const {data}=await axios.get(`https://thenews-backend.onrender.com/api/v1/like/${id}/${lu}`,
      {
        headers:{
          "Authorization":`Bearer ${token}`
          
        }
      }
      )
      
      dispatch({
        type:"likePostSuccess",
        playload:data
      })
    } catch (error) {
      dispatch({
        type: "likePostFailure",
        playload: error.response.data,
      });
    }
  }


  // action for unliked post
  export const unLikeAction=(id,lu)=>async(dispatch)=>{
    try {
      dispatch({
        type:"unLikePostRequest"
      })

      const {data}=await axios.get(`https://thenews-backend.onrender.com/api/v1/like/${id}/${lu}`,
      {
        headers:{
          "Authorization":`Bearer ${token}`
          
        }
      }
      )
      dispatch({
        type:"unLikePostSuccess",
        playload:data
      })
    } catch (error) {
      dispatch({
        type: "unLikePostFailure",
        playload: error.response.data,
      });
    }
  }


  // comment on the post

  export const commentAction=(comment,id)=>async(dispatch)=>{
    try {
      dispatch({
        type:"commentRequest"
      })
      console.log(token,comment,id)
      
      const {data}=await axios.post(`https://thenews-backend.onrender.com/api/v1/comment/${id}`,{comment},
      {
        headers:{
          "Authorization":`Bearer ${token}`
          
        }
      }
      );
      console.log(data)
     
      dispatch({
        type:"commentSuccess",
        playload:data
      })
    } catch (error) {
      dispatch({
        type: "commentFailure",
        playload: error.response.data,
      });
    }
  }

  
  
  