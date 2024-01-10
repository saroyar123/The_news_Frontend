import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../Posts/Post";
import "./Feed.css"
import Loading from "../Loading/Loading";

const Feed = () => {
  const { loading,call, allPosts } = useSelector((state) => state.AllPostsOfApp)
  const [allPost,setAllPost]=useState(null)
  useEffect(()=>{
    setAllPost(allPosts);
  },[call])
  console.log(call)
  return (
    <>
      <div className="feed">
        {
          loading&&call===0 ? <Loading /> :
            <div>
              {call!==0&&allPost && allPost.data && allPost.data.length > 0 ? allPost.data.map((post) => (

                <Post
                  key={post._id}
                  image={post.image}
                  caption={post.caption}
                  id={post._id}
                  liked={post.likes}
                  unliked={post.disLikes}
                  userInfo={post.owner}
                  description={post.description}
                  comments={post.comments}

                />

              )) :
                <div className="createSomePost">
                  <h1>Create Some Posts</h1>
                </div>

              }

            </div>
        }
      </div>

    </>

  );
};

export default Feed;


