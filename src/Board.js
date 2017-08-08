import React, { Component } from 'react';
import Comment from './Comment.js';

export default class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      comments:[]
    };
    this.removeComment = this.removeComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.eachComment = this.eachComment.bind(this);
    this.add = this.add.bind(this);

  }

  /*setInitialState= (e) => {
    var m = [
      'I like bacon',
      'Want to get ice cream?',
      'Ok enough comments'
    ];

    this.setState({comments:m}, function(){
      console.log(this.state.comments);
    });
  }*/

  add(text){
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments:arr});
  }

  removeComment(i){
    console.log('Removing comment' +i)
    var arr = this.state.comments;
    arr.splice(i,1);
    this.setState({comments:arr});
  }

  updateComment(newText, i){
    console.log('Updating comment' +i);
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments:arr});

  }

  eachComment(text,i){
    return(
      <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
        {text}
      </Comment>);
  }

  render(){
    return (
      <div>
        <button className="button-info create" onClick={this.add.bind(null, "New Sticky")}>Add New</button>
        <div className="board">
          {console.log(this.state.comments)}
          {console.log("hello")}
          {this.state.comments.map(this.eachComment)}
        </div>
      </div>
    );
  }

}
