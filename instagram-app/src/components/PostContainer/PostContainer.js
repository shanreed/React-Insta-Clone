import React from 'react';
import './PostContainer.css'



const PostContainer = (props) => {
    return (
          props.post.map(post => (
            <div key = {post.id} className = "post">
              <img src = {post.imageUrl} alt = {post.username} />
              <div>
                <h3>{post.username}</h3>
              </div>
            </div>
       
          ))
      );
    }





export default PostContainer;