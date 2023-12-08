import React, { Component } from "react";
import "./QuizComponent.css";
import { Link } from "react-router-dom";

class QuizComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    if (this.state.number >= this.props.data.length - 1) return;
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.number < 1) return;
    this.setState({
      number: this.state.number - 1,
    });
  };

  handleQuit = () => {
    confirm("Are you sure you want to quit");
  };

  handleAnswer = (answer) => {
    if (answer) {
      alert("correct answer");
      this.props.handleScore()
      this.handleIncrease()
    } else {
      alert("the wrong answer");
      this.handleIncrease()
    }
    this.props.handleAttempt()
  };

  render() {
    const currQue = this.props.data[this.state.number];
    return (
      <div className="container">
        <div className="heading">
          <h1>Question</h1>
        </div>
        <div className="noOfQuestion">
          <p>{this.state.number + 1} of 15</p>
        </div>
        <div className="titleOfQuestion">
          <p>{currQue.question}</p>
        </div>
        <div className="options">
          <div onClick={() => this.handleAnswer(currQue.optionA === currQue.answer)}>
            {currQue.optionA}
          </div>
          <div onClick={() => this.handleAnswer(currQue.optionB === currQue.answer)}>
            {currQue.optionB}
          </div>
          <div onClick={() => this.handleAnswer(currQue.optionC === currQue.answer)}>
            {currQue.optionC}
          </div>
          <div onClick={() => this.handleAnswer(currQue.optionD === currQue.answer)}>
            {currQue.optionD}
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.handleDecrease}>Previous</button>
          <button onClick={this.handleIncrease}>Next</button>
          <button onClick={this.handleQuit}>Quit</button>
          <Link to={"/result"}>
            <button>FINISH</button>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
