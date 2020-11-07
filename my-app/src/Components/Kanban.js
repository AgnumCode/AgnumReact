import React, { Component } from "react";
import KanbanCard from "./KanbanCard";
import text from "../static-content/text.js";


const uuidv4 = require('uuid/v4');

export class Kanban extends Component {

  onCardAdd = () => {
    this.setState({
      cards: [{
        id: uuidv4(),
        description: "Extra card",
        title: "New card",
        author: "Nino K.",
        status: 'development',
        score: Math.floor(Math.random() * 100),
        comments: [
          {
            id: uuidv4(),
            date: new Date().toLocaleDateString(),
            text: "A created card comment.",
            score: 0
          }
        ],
      }, ...this.state.cards]
    });
  }

  //cardKey, index of card
  onCommentSubmit = (cardKey, text) => {
    const cards = [...this.state.cards];
    cards[cardKey] = {
      ...cards[cardKey], comments: [{
        id: uuidv4(),
        date: new Date().toLocaleDateString(),
        text: text,
        score: 0
      }, ...this.state.cards[cardKey].comments]
    };
    this.setState({
      cards
    })
  }

  //cardKey, index of card
  onCardDelete = (cardKey) => {
    this.state.cards.splice(cardKey, 1);
    this.setState({
      cards: this.state.cards.filter(i => i !== cardKey)
    });
  }

  //cardKey, index of card
  onCardLike = (cardKey) => {
    const cards = [...this.state.cards];
    cards[cardKey].score += 1;
    this.setState({
      cards
    });
  }

  //cardKey, index of card
  //cardKey, index of comment
  onCommentLike = (cardKey, commentKey) => {
    const cards = [...this.state.cards];
    cards[cardKey].comments[commentKey].score += 1;
    this.setState({
      cards
    });

  }

  //cardKey, index of card
  //cardKey, index of comment
  onCommentDelete = (cardKey, commentKey) => {
    this.state.cards[cardKey].comments.splice(commentKey, 1);
    this.setState({
      cards: this.state.cards.filter(i => i.comments !== commentKey)
    });

  }

  onChangeSearch = (e) => {
    console.log(e.target.value);
    // this.setState({searchText: e.target.value});
  }

  render() {
    return (
      
      <div id="animate-area" className="App">
        <header className="App-header">
            <span>
          AgnumCode <i className="fas fa-cogs"></i> Kanban
          </span>
        </header>
        <div>
        </div>
        <div className="container-fluid">
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
              &nbsp;&nbsp;
              <button className="btn btn-info-outline btn-lg" value={this.state} onClick={this.onCardAdd} type="button">

                <i className="far fa-plus-square" /> &nbsp;&nbsp;ADD CARD
        </button>
              &nbsp;&nbsp;
        <form id="searchExpand">
                <input type="search" /><i className="fas fa-chevron-down" /><span className="searchText">SEARCH</span></form>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center kanban-cards-style">
          
            <KanbanCard
              onCardDelete={this.onCardDelete.bind(this)}
              onCardLike={this.onCardLike.bind(this)}
              onCommentLike={this.onCommentLike.bind(this)}
              onCommentDelete={this.onCommentDelete.bind(this)}
              onCommentSubmit={this.onCommentSubmit.bind(this)}
              key={this.state.cards.id}
              kanbancard={this.state.cards} />
        </div>
        <div className="container-fluid">
          <div className="kanban-bottom-2 row">
            <div className="col align-self-center">Created by Eric A.</div>
          </div>
        </div>
      </div>
    )
  }

  constructor(props) {
    super(props)

    this.state = {
      id: 12309,
      board: "Sprint #231",
      cards: [
        {
          id: uuidv4(),
          description: text.description1(),
          title: text.title1(),
          author: "Adam G.",
          status: 'development',
          score: 20,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "exciting new information",
              score: 0
            },
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "even better information",
              score: 3
            }
          ]
        },
        {
          id: uuidv4(),
          description: text.description2(),
          title: text.title2(),
          author: "Greg O.",
          status: 'development',
          score: 10,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "needs more work",
              score: 0
            }
          ]
        },
        {
          id: uuidv4(),
          description: text.description3(),
          title: text.title3(),
          author: "Stephen L.",
          status: 'development',
          score: 1,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "Great Work",
              score: 0
            }
          ],
        },
        {
          id: uuidv4(),
          description: text.description4(),
          title: text.title4(),
          author: "Laser M.",
          status: 'development',
          score: 0,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "Keep it up.",
              score: 0
            }
          ],
        },
        {
          id: uuidv4(),
          description: "Extra",
          title: "text.title4()",
          author: "Nino K.",
          status: 'development',
          score: 12,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "Lorem Ipsum",
              score: 0
            }
          ],
        },
        {
          id: uuidv4(),
          description: text.description2(),
          title: text.title2(),
          status: 'development',
          author: "Kayle L.",
          score: 20,
          comments: [
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "needs more work",
              score: 0
            },
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "updated",
              score: 0
            },
            {
              id: uuidv4(),
              date: new Date().toLocaleDateString(),
              text: "finished",
              score: 0
            }
          ]
        }
      ]
    }
  }
}

export default Kanban;
