import React, { Component } from "react";
import "./ResultComponent.css";
import { Link } from "react-router-dom";

class ResultComponent extends Component {
  
  render() {
    return (
      <div className="resultContainer">
        <div className="resultTitle">Result</div>
        <div className="resultDescription">
          <div>You Need more practice!</div>
          <div>Your Score is {this.props.score}</div>
          <div className="questionsList">
            <div>
              <p>Total number of questions</p>
              <p>15</p>
            </div>
            <div>
              <p>Number of attempted questions</p>
              <p>{this.props.attempt}</p>
            </div>
            <div>
              <p>Number of correct answers</p>
              <p>{this.props.score}</p>
            </div>
            <div>
              <p>Number of wrong answers</p>
              <p>{15 - this.props.score}</p>
            </div>
          </div>
        </div>
        <div className="resultButtons">
          <Link to={"/game"}>
            <button>Play Again</button>
          </Link>
          <Link to={"/"}>
            <button>Back to home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
