import React, { Component } from "react";

export class CardComment extends Component {

  constructor(props) {
    super(props);
  }

  handleCommentEdit() {
    //popover or modal
  }

  handleCommentDelete() {

  }

  render() {

    if (this.props.comments[0].text === "") {
      return <div className="noComment"><div>There are no comments. Be the first.</div></div>
    } else
      return this.props.comments.map(comment => (
        <div className="comments">
          <div className="comments-style">
            <u>{comment.name}</u> {comment.date}
          </div>
          <p className="card-description">
            {comment.text}
          </p>
          <div className="comment-manipulate">
            <button className="btn btn-sm btn-default">
              Delete comment&nbsp;&nbsp;
     <i className="fas fa-trash" />
            </button>
            <button className="btn btn-sm btn-default">
              Edit comment&nbsp;&nbsp;
     <i className="far fa-edit" />
            </button>
          </div>
        </div>
      ));
  }
}


export default CardComment;
