import React from "react";
import "./App.css";

//<img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div id="animate-area" className="App">
      <header className="App-header">
        <img href="./static-content/icon.png" />
        AgnumCode = () => Kanban
      </header>
      <div className="fluid-container kanban-border">
        <div className="row" />
      </div>
      <nav className="navbar navbar-expand-lg nav-style">
        <button className="btn btn-info-outline btn-lg" type="button">
          &nbsp;&nbsp;
          <i className="far fa-plus-square" /> &nbsp;&nbsp;CREATE
        </button>
        <button className="btn btn-info-outline btn-lg" type="button">
          <i className="fas fa-search" />
          &nbsp;&nbsp;SEARCH
        </button>
        <button className="btn btn-info-outline btn-lg" type="button">
          <i className="fas fa-question" />
          &nbsp;&nbsp;HELP
        </button>
      </nav>
      <div className="fluid-container kanban-border">
        <div className="row">&nbsp;</div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center kanban-cards-style">
          <div className="kanban-card col-3">
            <div className="card-title">
              What is Lorem Ipsum?{" "}
              <div className="card-manipulate">
                <button className="btn btn-sm btn-default">
                  Edit description&nbsp;&nbsp;
                  <i class="far fa-edit" />
                </button>
                <button className="btn btn-sm btn-default">
                  Delete card&nbsp;&nbsp;
                  <i class="fas fa-trash" />
                </button>
              </div>
            </div>
            <hr />
            <p className="card-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr />
            <textarea
              rows="4"
              cols="70"
              className="kanban-card-comment-field"
              type="textarea"
              placeholder="&nbsp;Enter your comment here"
            />
              <button className="comment-submit btn btn-md">Submit</button>
              <button className="comment-submit btn btn-md">Clear</button>
            <div className="comments">
              <div className="comments-style">
                Phil {new Date().toLocaleDateString()}
              </div>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="comment-manipulate">
                {" "}
                <button className="btn btn-sm btn-default">
                  Delete comment&nbsp;&nbsp;
                  <i class="fas fa-trash" />
                </button>
                <button className="btn btn-sm btn-default">
                  Edit comment&nbsp;&nbsp;
                  <i class="far fa-edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="kanban-bottom row">
          <div className="col align-self-center">Created by Eric Agocs</div>
        </div>
      </div>
    </div>
  );
}
export default App;
