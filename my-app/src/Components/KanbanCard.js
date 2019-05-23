import React, { Component } from "react";
import CardComment from "./CardComment";

export class KanbanCard extends Component {

  render() {
    return this.props.kanbancard.map((kanbancard, key) => (
      <div key={key} className="shadow p-3 mb-5 bg-white rounded kanban-card col-3">
        <div className="cardAuthor">&nbsp; {kanbancard.author}</div>
        <div className="card-title">
          {kanbancard.title}
          <hr />
          <div className="card-manipulate">
            <button className="btn btn-sm btn-default">
              EDIT DESCRIPTION&nbsp;&nbsp;
              <i className="far fa-edit" />
            </button>
            <button className="btn btn-sm btn-default">
              DELETE CARD&nbsp;&nbsp;
              <i className="fas fa-trash" />
            </button>
            <button id="cardLike" type="like" className="btn btn-md btn-default">{kanbancard.score} &nbsp;<i className="far fa-thumbs-up" /></button>

          </div>
        </div>
        <hr />
        <p className="card-description">{kanbancard.description}</p>
        <hr />
        <textarea
          wrap="off"
          className="kanban-card-comment-field"
          type="text"
          rows="1"
          id="commentbox"
          placeholder="&nbsp;Enter your comment here"
        />
        <br />
        <span className="commentButtonGroup">
          <button type="submit" className="comment-submit btn btn-md">SUBMIT</button>
          <button type="reset" className="comment-submit btn btn-md">CLEAR</button>
        </span>
        <CardComment key={kanbancard.comments.id} comments={kanbancard.comments} />
      </div>
    ));
  }
}

export default KanbanCard;
