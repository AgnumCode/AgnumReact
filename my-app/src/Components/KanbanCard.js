import React, { Component } from "react";
import CardComment from "./CardComment";

export class KanbanCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.kanbancard.map(kanbancard => (
      <div className="kanban-card col-3">
        <div className="card-title">
          {kanbancard.title}
          <div className="card-manipulate">
            <button className="btn btn-sm btn-default">
              Edit description&nbsp;&nbsp;
              <i className="far fa-edit" />
            </button>
            <button className="btn btn-sm btn-default">
              Delete card&nbsp;&nbsp;
              <i className="fas fa-trash" />
            </button>
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
          <button type="submit" className="comment-submit btn btn-md">Submit</button>
          <button type="reset" className="comment-submit btn btn-md">Clear</button>
        </span>
        <CardComment key={kanbancard.comments.id} comments={kanbancard.comments} />
      </div>
    ));
  }
}

export default KanbanCard;
