import React, { Component } from 'react';
import Board from './Board.js';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }

  /*getInitialState= (e) => {
    return{editing:false};
  }*/

  edit= (e) => {
    //var component = this;
    this.setState({editing:true});
    //alert("editing");
  }

  remove= (e) => {
    //alert("removing");
    this.props.deleteFromBoard(this.props.index)
  }

  save= (e) => {
    var val = this.refs.newText.value;
    this.props.updateCommentText(val,this.props.index);
    console.log("new comment: " +val);
    this.setState({editing:false});
  }

  renderNormal() {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button className="button-danger" onClick={this.remove}>Remove</button>
        <button className="button-primary" onClick={this.edit}>Edit</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="commentContainer">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button className="button-success" onClick={this.save}>Save</button>
      </div>
    );
  }


  render(){
    if(this.state.editing){
      return this.renderForm();
    }
    else{
      return this.renderNormal();
    }
  }
}
