import React, { Component } from "react";
import "../css/App.css";
import quotes from './services/quotes'

export const QuoteMachine = class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getQuotes();
  }

  async getQuotes() {
    if (this.state.tweets && this.state.tweets.length) {
      return;
    } else {
      const q = await quotes();
      this.setState({
        tweets: q
      })
    }
  }

  /*getWeather() {
    fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
      .then(response => response.json().properties.periods)
      .then((myJson) => {
        console.log(myJson);
      })
  }*/

  //api_key=C9zeqODcfauPysuxbTCwTp80uxLdDsQZzu5XLBTd

  getRandomQuote() {
    //get quotes from state
    // let tweets = this.state.tweets; 
    const { tweets } = this.state;
    //get random quote
    return tweets[Math.floor(Math.random() * tweets.length)];
  }

  handleClick() {
    this.getRandomQuote();
    this.setState({});
  }

  render() {

    const quote = this.getRandomQuote() || {
      quote: 'Searching...',
      author: ''
    };

    return (

      <div>
        <div id='quote-box' className="mx-auto shadow-lg rounded p-3 mb-5">
          <p id="text">{quote.quote}</p>
          <p id="author">{quote.author}</p>
          <button className="btn btn-primary ml-" id="new-quote" onClick={this.handleClick}>
            New quote?</button>
          <button className="btn btn-primary ml-3">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank">Tweet me!</a>
          </button>
        </div>
      </div>

    );
  }
}