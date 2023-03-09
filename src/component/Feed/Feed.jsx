import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Post from "../Posts/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { loading } = useSelector((state) => state.AllPostsOfApp);
  const { allPosts } = useSelector((state) => state.AllPostsOfApp);
  useEffect(() => {
    if (!loading) setPosts(allPosts);
  }, [loading, setPosts, allPosts]);
  console.log(loading,allPosts);

  return (
    <div>
      {loading ? 
        <Loading />
       :
      (
        !loading&&posts.Posts&&posts.Posts.length>0?posts.Posts.map((post) => (
       
          <Post key={post._id} image={post.image} caption={post.caption} id={post._id} liked={post.likes}/>
    
        )):<h1>create some posts</h1>
      )}
    </div>
  );
};

export default Feed;

{
}
