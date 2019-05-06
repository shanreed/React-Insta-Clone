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
     post: dummyData,
     comment: dummyData.comments
    };
  }


  render(){
    return (
      <div className = "App">
      <SearchBar />
      <PostContainer post = {this.state.post} />
      <CommentSection comment = {this.state.comment} />
      </div>
    );
  }
}

export default App;

