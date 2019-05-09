import React from 'react';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handlesChanges = e => {
    this.setState({
      comment: e.target.value
    });
  };

  addNewComment = e => {
    e.preventDefault();
    this.props.addComment(this.state.comment, this.props.index);
    this.setState({ comment: "" });
  };


  render () {
  return (

    <div>
    {this.props.comments.map(comment => (
      <div key = {comment.text}>
      <div>
        {comment.username}
      </div>
      <div>
        {comment.text}
      </div>
      </div>
    ))}
    <div>
  <form onSubmit = {this.addNewComment}>
      <input name = 'comment'
             value = {this.state.comment}
             onChange = {this.handlesChanges}
              className = 'new-comment' type = 'text' placeholder = 'Comment...'/>
      <button>Comment</button>
    </form>
    </div>
    </div>
  );
    }
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