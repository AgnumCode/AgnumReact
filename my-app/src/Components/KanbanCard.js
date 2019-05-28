import React, { Component } from "react";
import CardComment from "./CardComment";

export class KanbanCard extends Component {

  state = {
    textInput: '',
  }

  commentSubmit = (e) => {
    this.setState({ textInput: e.target.value})
  }

  clearComment = () => {
    this.setState({
      textInput : ''
    })
  }

  render() {
    return this.props.kanbancard.map((kanbancard, key) => (
      <div key={key} className="shadow p-3 mb-5 bg-white rounded kanban-card col-3">
        <div className="cardAuthor">&nbsp; {kanbancard.author}</div>
        <div className="card-title">
          {kanbancard.title}
          <hr />
          <div className="card-manipulate">
            <button onClick={this.props.onCardDelete} className="btn btn-sm btn-default">
              DELETE CARD&nbsp;&nbsp;
              <i className="fas fa-trash" />
            </button>
            <button onClick={() => this.props.onCardLike(key)} className="btn btn-md btn-default">{kanbancard.score} &nbsp;<i className="far fa-thumbs-up" /></button>
          </div>
        </div>
        <hr />
        <p className="card-description">{kanbancard.description}</p>
        <hr />
        <form>
          <textarea
            onChange={this.commentSubmit.bind(this)}
            wrap="off"
            className="kanban-card-comment-field"
            type="text"
            rows="1"
            id="commentForm"
            placeholder="&nbsp;Enter your comment here"
          />
          <br />
          <span className="commentButtonGroup">
            <button onClick={() => this.props.onCommentSubmit(key, this.state.textInput)} type="button" className="comment-submit btn btn-md">SUBMIT</button>
            <button onClick={() => this.clearComment()} type="reset" className="comment-submit btn btn-md">CLEAR</button>
          </span>
          </form>

        <CardComment
          key={kanbancard.comments.id}
          onCommentLike={this.props.onCommentLike.bind(this, key)}
          onCommentDelete={this.props.onCommentDelete.bind(this, key)}
          comments={kanbancard.comments} />
      </div>
    ));
  }
}

export default KanbanCard;
