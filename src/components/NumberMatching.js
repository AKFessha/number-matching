import React, { Component } from "react";
import "./NumberMatching.css";

class NumberMatching extends Component {
  constructor() {
    super();
    this.state = {
      dataValue: null,
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

  onClickWord = (word, event) => {
    if (this.state[word] !== "matched" && this.state.count % 2 === 0) {
      const count = this.state.count + 1;
      this.setState({
        [word]: "matched",
        dataValue: event.target.value,
        count
      });
    }
  };

  onClickNumber = (number, event) => {
    if (
      this.state.dataValue === event.target.value &&
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
      <div class="match-quiz">
        <h1>Match the words to the numbers</h1>
        <h3>
          Click the word and then the number. Match all the pairs to continue.
        </h3>
        <ul className="wordslist1">
          <li
            value="2"
            onClick={event => this.onClickWord("wordTwo", event)}
            className={this.state.wordTwo}
          >
            Two
          </li>
          <li
            value="5"
            onClick={event => this.onClickWord("wordFive", event)}
            className={this.state.wordFive}
          >
            Five
          </li>
          <li
            value="4"
            onClick={event => this.onClickWord("wordFour", event)}
            className={this.state.wordFour}
          >
            Four
          </li>
          <li
            value="1"
            onClick={event => this.onClickWord("wordOne", event)}
            className={this.state.wordOne}
          >
            One
          </li>
          <li
            value="3"
            onClick={event => this.onClickWord("wordThree", event)}
            className={this.state.wordThree}
          >
            Three
          </li>
        </ul>

        <ul className="wordslist2">
          <li
            value="3"
            onClick={event => this.onClickNumber("numThree", event)}
            className={this.state.numThree}
          >
            3
          </li>
          <li
            value="4"
            onClick={event => this.onClickNumber("numFour", event)}
            className={this.state.numFour}
          >
            4
          </li>
          <li
            value="2"
            onClick={event => this.onClickNumber("numTwo", event)}
            className={this.state.numTwo}
          >
            2
          </li>
          <li
            value="5"
            onClick={event => this.onClickNumber("numFive", event)}
            className={this.state.numFive}
          >
            5
          </li>
          <li
            value="1"
            onClick={event => this.onClickNumber("numOne", event)}
            className={this.state.numOne}
          >
            1
          </li>
        </ul>
        {this.state.count === 10 ? (
          <div className="response">Congratulations! Well done!!</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NumberMatching;
