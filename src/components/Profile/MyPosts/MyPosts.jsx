import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
        <Post message={`Hi, how are you?`} />
        <Post message={`It's my first post`} />
      </div>
    </div>
  );
};

export default MyPosts;
