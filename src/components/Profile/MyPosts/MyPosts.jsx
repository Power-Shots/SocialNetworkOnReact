import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    const postData = [
        {
            id: 1,
            message: `Hi, how are you?`
        },
        {
            id: 2,
            message: `It's my first post`
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
        {postData.map(post => 
            <Post message={post.message} id={post.id}/>    
        )}
      </div>
    </div>
  );
};

export default MyPosts;
