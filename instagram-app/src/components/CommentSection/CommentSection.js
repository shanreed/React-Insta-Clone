import React from 'react';



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
  )
}
     






export default CommentSection;