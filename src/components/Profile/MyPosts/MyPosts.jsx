import React, { createRef, useRef } from "react";
import { Field, reduxForm } from "redux-form";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { maxLengthCreator, requiredField } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field name={'newPostText'} 
                 placeholder={'Enter post text'}
                 component={Textarea}
                 validate={[requiredField, maxLength10]}/>
        </div>
        <div>
          <button type="submit">Добавить пост</button>
        </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form: 'post'
})(AddNewPostForm)


const MyPosts = (props) => {

  const onAddPost = (formData) => {
    props.addPost(formData.newPostText)
  }


  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <AddNewPostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {props.posts.map(post => 
            <Post
                  key={post.id}
                  message={post.message}
                  id={post.id} 
                  likesCount={post.likesCount}/>    
        )}
      </div>
    </div>
  );
};

export default MyPosts;
