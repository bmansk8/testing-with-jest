import React, { useState, useEffect } from "react";
import "../css/App.css";
import quotes from './services/quotes'

export const QuoteMachine = function () {
  const [tweets, setTweets] = useState([{
    //dummy objs before promise is returned so obj is not undefined on first render
    'quote':'Searching...',
    'author':''
  }])
  const [Quote, setQuote] = useState({
    'quote':'',
    'author':''
  })

  function getRandomQuote() {
    //set Quote to our randomly chosen quote from tweets
    setQuote(tweets[Math.floor(Math.random() * tweets.length)]);
  }

  function handleClick() {
    //when button is clicked get a random quote
    getRandomQuote();
  }

  useEffect(() => {
    //on start ping the api for quotes
    const getQuotes = async () => {
      const q = await quotes();
      //set tweets to the response
      setTweets(q)
    }

    getQuotes();
    getRandomQuote();
  }, []);

  return (

    <div>
      <div id='quote-box' className="mx-auto shadow-lg rounded p-3 mb-5">
        <p id="text">{Quote.quote}</p>
        <p id="author">{Quote.author}</p>
        <button className="btn btn-primary ml-" id="new-quote" onClick={handleClick}>
          New quote?</button>
        <button className="btn btn-primary ml-3">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank">Tweet me!</a>
        </button>
      </div>
    </div>

  );
}







/*getWeather() {
  fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
    .then(response => response.json().properties.periods)
    .then((myJson) => {
      console.log(myJson);
    })
}*/

  //api_key=C9zeqODcfauPysuxbTCwTp80uxLdDsQZzu5XLBTd