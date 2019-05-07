import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = (props)=> {
  console.log(props)
  return (
    props.comments.map(comment => (
      <div key = {comment.timestamp}>
      <div>
        {comment.username}
      </div>
      <div>
        {comment.text}
      </div>
      </div>

    ))
  );
}
    

CommentSection.propTypes = {
  
}






export default CommentSection;