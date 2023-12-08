import React, { Component } from "react";
import "./App.css";
import data from "./resources/quizQuestions.json";
import AllRoutes from "./routes/AllRoutes";

class App extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        score : 0,
        attempt : 0
     }
   }

   handleScore = ()=>{
    this.setState({score: this.state.score + 1})
   }

   handleAttempt = ()=>{
    this.setState({attempt: this.state.attempt + 1})
   }
   
  render() {
    return (
      <div>
        <AllRoutes handleScore={this.handleScore} score={this.state.score} handleAttempt={this.handleAttempt} attempt={this.state.attempt}/>
      </div>
    );
  }
}

export default App;
