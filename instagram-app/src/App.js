import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';


class App extends React.Component {
  constructor() {
    super();
    this.state ={
     post: []
    
    };
    
  }


  componentDidMount() {
    this.setState({
      post: dummyData
    });
    console.log('hello')
  }

  addComment = (comment, index) => {
    const newComment = {
      username: 'shannon',
      text: comment,
    };
    const newData = [
      ...this.state.post
    ]

    newData[index].comments = [...newData[index].comments, newComment]

    

    this.setState({
      ...this.state, 
      post: newData

      
    });
  };


  render(){
    console.log(this.state.post)
  
    return (
      <div className = "App">
      <SearchBar />
      <PostContainer post = {this.state.post} addComment = {this.addComment} />
      </div>
    );
  }
}

export default App;

