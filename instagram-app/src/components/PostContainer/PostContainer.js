import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = props => {
  console.log(props);
    return (
         props.post.map(post => (
            <div className = 'post-container' key = {post.timestamp}>
              <div className = 'user-pic-name'>
                <img className = 'user-pic' src =  {post.thumbnailUrl} alt = {post.username} />
                <h3 className = 'username'>{post.username}</h3>
              </div>

              <div><p>{post.timestamp}</p></div>
                
              <div>
                <img className = 'post-image' src = {post.imageUrl} alt = {post.username} />
              </div>

              <div>
                <i className = "fa fa-heart-o post-heart"></i>
                <i className = "fa fa-comment-o post-comment"></i>
              </div>
                
              <div className = 'likes'>{post.likes} likes</div>
                <CommentSection comments = {post.comments} />
            </div>
          ))
    );
    }

    PostContainer.propTypes = {
      post: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl:PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string.isRequired,
      }))
    }

    PostContainer.defaultProps = {
      post: []
    }




export default PostContainer;