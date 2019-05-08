import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = (props)=> {
  console.log(props)
  return (
    <div>
    {props.comments.map(comment => (
      <div key = {comment.timestamp}>
      <div>
        {comment.username}
      </div>
      <div>
        {comment.text}
      </div>
      </div>
    ))}
    <div>
      <input className = 'new-comment' type = 'text' placeholder = 'Comment...'/>
      <button>Comment</button>
    </div>
    </div>
  );
}
    



CommentSection.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }))
}


CommentSection.defaultProps = {
  comment: []
}






export default CommentSection;