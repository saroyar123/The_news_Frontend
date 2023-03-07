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

export const getAllPosts = (token,caption,image,location) => async (dispatch) => {
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

  
  
  