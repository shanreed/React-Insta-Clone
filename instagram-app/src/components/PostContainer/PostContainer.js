import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = props => {
    return (
         props.post.map(post => (
            <div className = 'post-container' key = {post.timestamp}>
            <div className = 'user-pic-name'>
              <img className = 'user-pic' src =  {post.thumbnailUrl} alt = {post.username} />
              <h3>{post.username}</h3>
              </div>
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