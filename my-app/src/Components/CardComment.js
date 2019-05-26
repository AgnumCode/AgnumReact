import React, { Component } from "react";

export class CardComment extends Component {

  render() {

    if (this.props.comments[0].text === "") {
      return <div className="noComment"><div>There are no comments. Be the first.</div></div>
    } else
      return this.props.comments.map((comment, key) => (
        <div key={key} className="comments">
          <div className="comments-style">
            <u>{comment.name}</u> {comment.date}
          </div>
          <p className="card-description">
            {comment.text}
          </p>

          <div className="comment-manipulate">
          <button className="btn btn-md btn-default">
          <i className="far fa-thumbs-up" />
          &nbsp;
              LIKE  {comment.score}
            </button>
            <button className="btn btn-md btn-default">
              DELETE&nbsp;&nbsp;
     <i className="fas fa-trash" />
            </button>
            <button className="btn btn-md btn-default">
              EDIT &nbsp;&nbsp;
     <i className="far fa-edit" />
            </button>
          </div>
        </div>
      ));
  }
}


export default CardComment;
