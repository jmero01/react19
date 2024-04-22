import { Suspense, use } from "react";
import "./fetch-quotes.css";

const fetchDataQuotes = async () => {
  const res = await fetch("https://api.quotable.io/random");
  return res.json();
};

const NewQuotableItem = () => {
  const quote = use(fetchDataQuotes());
  return (
    <>
      <div className="quote-container">
        <h4 className="quote-title">New hook: use ( )</h4>
        <div className="quote-card">
          <cite>{quote.content}</cite>
          <address className="quote-author">Author: {quote.author}</address>
          <p>Tags: {quote.tags}</p>
        </div>
      </div>
    </>
  );
};

export const OneHookUse = () => {
  return (
    <>
      <Suspense fallback={"Loading data with use( )..."}>
        <NewQuotableItem />
      </Suspense>
    </>
  );
};
