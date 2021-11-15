import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
  // const state = props.store.getState();

  

  return (
    <StoreContext.Consumer>
      {
        (store) => {
        let state = store.getState()
        const addPost = () => {
          store.dispatch(addPostActionCreator())
        }
          
        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text))
        }

        return  (
          <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
          )
        }
      }
      
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
