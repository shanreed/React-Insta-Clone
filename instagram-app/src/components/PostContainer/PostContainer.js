import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    return (
         props.post.map(post => (
            <div key = {post.timestamp}>
              <img src =  {post.thumbnailUrl} alt = {post.username} />
              <h3>{post.username}</h3>
              <img src = {post.imageUrl} alt = {post.username} />
              <div><p>{post.timestamp}</p></div>
              <div><p>{post.likes}</p></div>
              <CommentSection comments = {post.comments} />
              <input className = 'new-comment' type = 'text' placeholder = 'Comment...'/>
            </div>
          ))
    );
    }





export default PostContainer;