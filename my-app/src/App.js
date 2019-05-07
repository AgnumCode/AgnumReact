import React, { Component } from "react";
import "./App.css";
import Kanban from "./Components/Kanban";

class App extends Component {

  state = {

  }

  render() {
    return (
      <span id="animate-area" className="App">
        <Kanban />
      </span>
    );
  }
}
export default App;
