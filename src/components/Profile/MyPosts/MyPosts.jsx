import React, { createRef, useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

  const newPostElement = createRef()

  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }
    

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>add post</button>
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
