import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/CommentSection/CommentSection';


class App extends React.Component {
  constructor() {
    super();
    this.state ={
     post: [],
    };
    
  }


  componentDidMount() {
    this.setState({
      post: dummyData
    });
    
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

  addLike = (id) => {
     this.setState({
       post: this.state.post.map( post => {
         console.log(post.id, id)
         if (post.id !== id) {
           return post 
         } else {
           return {
             ...post,
             likes: post.likes + 1
           }
         }
       } )
     })
    
  }



  render(){
    
  
    return (
      <div className = "App">
      <SearchBar />
      <PostContainer post = {this.state.post} addComment = {this.addComment}
                     addLike = {this.addLike}/>

      </div>
    );
  }
}

export default App;

