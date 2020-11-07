import React, { Component } from "react";
import "./App.css";
import Kanban from "./Components/Kanban";


class App extends React.Component {

  state = {
    id : 4031
  }

  render() {
    return (
      <span id="animate-area" className="App">
        <Kanban key={this.state.id}/>
      </span>
    );
  }
}
export default App;
