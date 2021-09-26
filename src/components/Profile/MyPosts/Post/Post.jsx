import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://ps.w.org/simple-user-avatar/assets/icon-128x128.png?rev=2413146"/>
            <p>
                {props.message}
            </p>
            <button>Like</button>
            <button>Dislike</button>
            <input/>
        </div>
    )
}

export default Post
