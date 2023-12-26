import React from "react";
import { useSelector } from "react-redux";
import Post from "../Posts/Post";
import "./Feed.css"
import Loading from "../Loading/Loading";

const Feed = () => {
  const { loading, allPosts } = useSelector((state) => state.AllPostsOfApp)
  return (
    <>
      <div className="feed">
        {
          loading ? <Loading /> :
            <div>
              {allPosts && allPosts.data && allPosts.data.length > 0 ? allPosts.data.map((post) => (

                <Post
                  key={post._id}
                  image={post.image}
                  caption={post.caption}
                  id={post._id}
                  liked={post.likes}
                  unliked={post.disLikes}
                  userInfo={post.owner}
                  description={post.description}

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


