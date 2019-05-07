import React, { Component } from "react";
import KanbanCard from "./KanbanCard";
import CreateCard from "./CreateCard";
import text from "../static-content/text.js"
const uuidv4 = require('uuid/v4');

export class Kanban extends Component {

  state = {
    board: "Development Sprint Apr/21",
    cards: [
      {
        id: uuidv4(),
        description: text.description1(),
        title: text.title1(),
        status: 'development',
        comments: [
          {
            id: uuidv4(),
            name: "Phil",
            date: new Date().toLocaleDateString(),
            text: "exciting new information",
            score: -2,
            subthreads: [
              {
                id: 302,
                name: "Lerry",
                text: "I don't know"
              }
            ]
          },
          {
            id: uuidv4(),
            name: "JK",
            date: new Date().toLocaleDateString(),
            text: "even better information",
            score: 3,
            subthreads: []
          }
        ]
      },
      {
        id: uuidv4(),
        description: text.description2(),
        title: text.title2(),
        status: 'development',
        comments: [
          {
            id: uuidv4(),
            name: "Pell",
            date: new Date().toLocaleDateString(),
            text: "needs more work",
            score: 0,
            subthreads: []
          }
        ]
      },
      {
        id: uuidv4(),
        description: text.description3(),
        title: text.title3(),
        status: 'development',
        comments: [
          {
            id: NaN,
            name: "",
            date: "",
            text: "",
            score: 0,
            subthreads: []
          }
        ],
      },
      {
        id: uuidv4(),
        description: text.description4(),
        title: text.title4(),
        status: 'development',
        comments: [
          {
            id: NaN,
            name: "",
            date: "",
            text: "",
            score: 0,
            subthreads: []
          }
        ],
      },
      {
        id: uuidv4(),
        description: "Extra",
        title: "text.title4()",
        status: 'development',
        comments: [
          {
            id: NaN,
            name: "",
            date: "",
            text: "",
            score: 0,
            subthreads: []
          }
        ],
      }
    ]
  };

  render() {
    return (
      <div id="animate-area" className="App">
        <header className="App-header">
          AgnumCode = () => Kanban
      </header>
        <div className="fluid-container kanban-border">
          <div className="row" />
        </div>
        <div className="fluid-container">
          <div className="row" />&nbsp;
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <p className="boardText">
              {this.state.board}
            </p>
          </div>
          <div className="row justify-content-center">
            <nav className="navbar navbar-expand-lg nav-style">

              <button className="btn btn-info-outline btn-lg" type="button">
                &nbsp;&nbsp;
          <i className="far fa-plus-square" /> &nbsp;&nbsp;ADD CARD
        </button>
              <button className="btn btn-info-outline btn-lg" type="button">
                &nbsp;&nbsp;
                <i class="fas fa-exchange-alt"></i> &nbsp;&nbsp;CHANGE BOARD
        </button>
              <button className="btn btn-info-outline btn-lg" type="button">
                <i className="fas fa-search" />
                &nbsp;&nbsp;FIND BY TAG
        </button>
              <button className="btn btn-info-outline btn-lg" type="button">
                <i className="fas fa-question" />
                &nbsp;&nbsp;MAINTAINER
        </button>

            </nav>

          </div>
        </div>
        <div className="row justify-content-center kanban-cards-style">

          <KanbanCard key={this.state.cards.id} kanbancard={this.state.cards} />
        </div>
        <div className="container-fluid">
          <div className="kanban-bottom row">
            <div className="col align-self-center">Created by Eric Agocs</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kanban;
