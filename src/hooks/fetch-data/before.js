import { useState, useEffect } from "react";
import "./fetch-quotes.css";

// UI
const QuoteItem = ({ quote }) => {
  return (
    <div className="quote-container">
      <h4 className="quote-title">Current hooks: useEffect and useState</h4>
      <div className="quote-card">
        <cite>{quote.content}</cite>
        <address className="quote-author">Author: {quote.author}</address>
        <p>Tags: {quote.tags}</p>
      </div>
    </div>
  );
};

// Hooks
export const QuoteData = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setQuote(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h5>Loading data with current hooks...</h5>;
  }

  return (
    <div>
      <QuoteItem quote={quote} />
    </div>
  );
};
