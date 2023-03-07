import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Post from "../Posts/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const { loading } = useSelector((state) => state.AllPostsOfApp);
  const { allPosts } = useSelector((state) => state.AllPostsOfApp);
  useEffect(() => {
    if (!loading) setPosts(allPosts.Posts);
  }, [loading, setPosts, allPosts.Posts]);
  console.log(loading, posts);

  return (
    <div>
      {loading ? 
        <Loading />
       :
      (
        posts.map((post) => (
       <>
          <Post key={post._id} image={post.image} caption={post.caption} />
          </>
        ))
      )}
    </div>
  );
};

export default Feed;

{
}
