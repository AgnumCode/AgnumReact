import React, { Component } from "react";
import Fade from "react-reveal";



export class CardComment extends Component {



  render() {
      if (Array(this.props.comment).length === 0){
        alert("EMPTY")
      } else
      return this.props.comments.map((comment, key) => (
        <Fade distance="10px" bottom key={key}>
        <div key={key} className="comments">
          <div className="comments-style">
            <u>{comment.name}</u> {comment.date}
          </div>
          <p className="card-description">
            {comment.text}
          </p>

          <div className="comment-manipulate">
          <button onClick={() => this.props.onCommentLike(key)} className="btn btn-md btn-default">
          <i className="far fa-thumbs-up" />
          &nbsp;
              LIKE  {comment.score}
            </button>
            <button onClick={() => this.props.onCommentDelete(key)} className="btn btn-md btn-default">
              DELETE&nbsp;&nbsp;
     <i className="fas fa-trash" />
            </button>
          </div>
        </div>
        </Fade>
      ));
  }
}


export default CardComment;
