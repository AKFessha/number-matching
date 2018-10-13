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
        <ul class="wordslist1">
          <li>Two</li>
          <li>Six</li>
          <li>Four</li>
          <li>One</li>
          <li class="matched">Three</li>
        </ul>

        <ul class="wordslist2">
          <li class="matched">3</li>
          <li>4</li>
          <li>2</li>
          <li>5</li>
          <li>1</li>
        </ul>
        <div class="response">Correct</div>
      </div>
    );
  }
}

export default NumberMatching;
