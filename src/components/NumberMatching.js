import React, { Component } from "react";
import "./NumberMatching.css";

class NumberMatching extends Component {
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
