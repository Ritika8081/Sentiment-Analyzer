import React, { useEffect, useState } from "react";
import "./App.css"; // Ensure you have appropriate styles in App.css

const App = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:3000/getQuote"); // Fetch from your backend
      const data = await response.json(); // Parse the JSON response

      setQuote(data.content); // Set the quote from the content field
      setAuthor(data.author); // Set the author from the author field
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Could not fetch quote at this time.");
      setAuthor(""); // Reset author if there's an error
      setLoading(false);
    }
  };

  const analyzeSentiment = () => {
    const positiveWords = [
      "good",
      "great",
      "happy",
      "joy",
      "love",
      "excellent",
    ];
    const negativeWords = ["bad", "sad", "hate", "angry", "upset", "terrible"];

    let sentimentScore = 0;
    let positiveCount = 0;
    let negativeCount = 0;

    const normalizedText = userInput.toLowerCase();

    positiveWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "g");
      const matches = normalizedText.match(regex);
      if (matches) {
        positiveCount += matches.length;
        sentimentScore += matches.length;
      }
    });

    negativeWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "g");
      const matches = normalizedText.match(regex);
      if (matches) {
        negativeCount += matches.length;
        sentimentScore -= matches.length;
      }
    });

    let sentimentLabel;
    if (sentimentScore > 0) {
      sentimentLabel = "Positive";
    } else if (sentimentScore < 0) {
      sentimentLabel = "Negative";
    } else {
      sentimentLabel = "Neutral";
    }

    setSentimentResult({
      label: sentimentLabel,
      positive: positiveCount,
      negative: negativeCount,
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>Sentiment Analyzer</h1>

        <div className="quote-section">
          <h2>Daily Quote</h2>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <p className="quote">
              "{quote}" <br />
              <span className="author">- {author}</span>
            </p>
          )}
        </div>

        <div className="input-section">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type something to analyze sentiment..."
          />

          <button onClick={analyzeSentiment}>Analyze Sentiment</button>

          {sentimentResult && (
            <div className="result">
              <h3>Analysis Result</h3>
              <div
                className={`sentiment-label ${sentimentResult.label.toLowerCase()}`}
              >
                {sentimentResult.label}
              </div>
              <div className="word-counts">
                <span className="positive">
                  Positive words: {sentimentResult.positive}
                </span>
                <span className="divider">|</span>
                <span className="negative">
                  Negative words: {sentimentResult.negative}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
