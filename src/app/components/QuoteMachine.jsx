import React, { useState, useEffect } from "react";
import "../css/App.css";
import quotes from './services/quotes'

export const QuoteMachine = function () {
  const [tweets, setTweets] = useState([{
    //dummy objs before promise is returned so obj is not undefined on first render
    'quote':'',
    'author':''
  }])
  const [Quote, setQuote] = useState({
    'quote':'Searching...',
    'author':''
  })

  function handleClick() {
    //when button is clicked get a random quote
    setQuote(tweets[Math.floor(Math.random() * tweets.length)]);
  }

  useEffect(() => {
    //on start ping the api for quotes
    const getQuotes = async () => {
      const q = await quotes();
      //set tweets to the response
      setTweets(q)
    }

    getQuotes();
  }, []);

  useEffect(()=>{
    //once tweets gets a response set quote
    setQuote(tweets[Math.floor(Math.random() * tweets.length)]);
  }, [tweets])

  return (

    <div>
      <div id='quote-box' className="mx-auto shadow-lg rounded p-3 mb-5">
        <p id="quote">{Quote.quote}</p>
        <p id="author">{Quote.author}</p>
        <button className="btn btn-primary ml-3" id="new-quote" onClick={handleClick}>
          New quote?</button>
        <button id='tweet-button' className="btn btn-primary ml-3">
          <a id="tweet-a" href="https://twitter.com/intent/tweet" rel="noopener noreferrer" target="_blank">Tweet me!</a>
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