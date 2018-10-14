import React, { Component } from "react";
import "./NumberMatching.css";

class NumberMatching extends Component {
  constructor() {
    super();
    this.state = {
      fieldValue: null,
      count: 0,
      wordOne: "",
      wordTwo: "",
      wordThree: "",
      wordFour: "",
      wordFive: "",
      numOne: "",
      numTwo: "",
      numThree: "",
      numFour: "",
      numFive: ""
    };
  }
  // e stands for event
  onClickWord = (word, e) => {
    if (this.state[word] !== "matched" && this.state.count % 2 === 0) {
      const count = this.state.count + 1;
      this.setState({
        [word]: "matched",
        fieldValue: e.target.value,
        count
      });
    }
  };

  onClickNumber = (number, e) => {
    if (
      this.state.fieldValue === e.target.value &&
      this.state.count % 2 !== 0
    ) {
      const count = this.state.count + 1;
      this.setState({
        [number]: "matched",
        count
      });
    }
  };

  render() {
    return (
      <div className="match-quiz">
        <h1>Match the words to the numbers</h1>
        <h3>
          Click the word and then the number. Match all the pairs to continue.
        </h3>
        <ul className="wordslist1">
          <li
            value="2"
            onClick={e => this.onClickWord("wordTwo", e)}
            className={this.state.wordTwo}
          >
            Two
          </li>
          <li
            value="5"
            onClick={e => this.onClickWord("wordFive", e)}
            className={this.state.wordFive}
          >
            Five
          </li>
          <li
            value="4"
            onClick={e => this.onClickWord("wordFour", e)}
            className={this.state.wordFour}
          >
            Four
          </li>
          <li
            value="1"
            onClick={e => this.onClickWord("wordOne", e)}
            className={this.state.wordOne}
          >
            One
          </li>
          <li
            value="3"
            onClick={e => this.onClickWord("wordThree", e)}
            className={this.state.wordThree}
          >
            Three
          </li>
        </ul>

        <ul className="wordslist2">
          <li
            value="3"
            onClick={e => this.onClickNumber("numThree", e)}
            className={this.state.numThree}
          >
            3
          </li>
          <li
            value="4"
            onClick={e => this.onClickNumber("numFour", e)}
            className={this.state.numFour}
          >
            4
          </li>
          <li
            value="2"
            onClick={e => this.onClickNumber("numTwo", e)}
            className={this.state.numTwo}
          >
            2
          </li>
          <li
            value="5"
            onClick={e => this.onClickNumber("numFive", e)}
            className={this.state.numFive}
          >
            5
          </li>
          <li
            value="1"
            onClick={e => this.onClickNumber("numOne", e)}
            className={this.state.numOne}
          >
            1
          </li>
        </ul>

        {this.state.count === 10 ? (
          <div className="response">Congratulations! Well done!!</div>
        ) : null}
      </div>
    );
  }
}

export default NumberMatching;
