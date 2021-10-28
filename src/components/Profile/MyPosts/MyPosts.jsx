import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {
            id: 1,
            message: `Hi, how are you?`,
            likesCount: 42
        },
        {
            id: 2,
            message: `It's my first post`,
            likesCount: 12
        },
    ]

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
          <button>Remove post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map(post => 
            <Post message={post.message} id={post.id} likesCount={post.likesCount}/>    
        )}
      </div>
    </div>
  );
};

export default MyPosts;
