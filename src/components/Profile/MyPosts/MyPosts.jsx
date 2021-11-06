import React, { createRef, useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  const newPostElement = createRef()

  const addPost = () => {
    props.addPost()
  }
    
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map(post => 
            <Post message={post.message} id={post.id} likesCount={post.likesCount}/>    
        )}
      </div>
    </div>
  );
};

export default MyPosts;
