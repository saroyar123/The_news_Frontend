import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../Loading/Loading"
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Action/userAction'
import Cookies from 'js-cookie'
import "./Account.css"
import Post from '../Posts/Post'


const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.UserAuth)
  const logOutHandler = async () => {
    Cookies.remove("token");
    await dispatch(UserAuth(null))
    navigate("/");
  }

  return (
    <>
      {
        loading ?
          <Loading />
          :
          <div>
            {
              data.success ? (
                <>
                  <div className="account">
                    <div className="userDetails">

                      <img src={data.data.image.url} alt="userSnap" className='userImage' />
                      <h1>{data.data.name}</h1>
                      <h3>No of posts {data.data.posts.length}</h3>
                      <button onClick={logOutHandler}>LogOut</button>
                    </div>
                    <div className="userPosts">
                      {
                        data.data.posts.map((post, index) => (
                          <Post
                            key={index}
                            image={post.image}
                            caption={post.caption}
                            id={post._id}
                            liked={post.likes}
                            unliked={post.disLikes}
                            userInfo={{
                              image: data.data.image,
                              name: data.data.name
                             }
                            }
                            description={post.description}
                            comments={post.comments}

                          />
                          // <h1>{post.description}</h1>
                        ))
                      }
                    </div>
                  </div>

                </>
              ) : <h1>something is wrong</h1>
            }
          </div>

      }
    </>


  )
}

export default Account