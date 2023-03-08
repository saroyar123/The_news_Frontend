import axios from 'axios'

// create post action 
export const createPost = (token,caption,image,location) => async (dispatch) => {
    try {
      dispatch({
        type:"CreatePostRequest"
      })
  // https://thenews-backend.onrender.com
  console.log("user data call")
      const {data}=await axios.post(`/api/post/${token}`,{caption,image,location});
      console.log(data)
      dispatch({
        type:"CreatePostSuccess",
        playload:data
      });
    } catch (error) {
      dispatch({
        type: "CreatePostFailure",
        playload: error.response.data.message,
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
  console.log("post data call")
      const {data}=await axios.get(`/api/getAllPosts`);
    //   console.log(data)


      dispatch({
        type:"allPostsSuccess",
        playload:data
      });
    } catch (error) {
      dispatch({
        type: "allPostsFailure",
        playload: error.response.data.message,
      });
    }
  };

  // action on the post for like 

  // export const likeAction=()=>(dispatch)=>{
  //   try {
  //     dispatch({
  //       type:"likePostRequest"
  //     })


  //     dispatch({
  //       type:"likePostSuccess",
  //       playload:data
  //     })
  //   } catch (error) {
  //     dispatch({
  //       type: "likePostFailure",
  //       playload: error.response.data.message,
  //     });
  //   }
  // }


  // comment on the post

  export const commentAction=(comment,token,id)=>async(dispatch)=>{
    try {
      dispatch({
        type:"commentRequest"
      })
      console.log(token,comment,id)
      
      const {data}=await axios.post(`/api/comment/${token}/${id}`,{comment});
      console.log(data)
     
      dispatch({
        type:"commentSuccess",
        playload:data
      })
    } catch (error) {
      dispatch({
        type: "commentFailure",
        playload: error.response.data.message,
      });
    }
  }

  
  
  