import { Suspense, use } from "react";

const fetchDataQuotes = async () => {
  const res = await fetch("https://api.quotable.io/random");
  return res.json();
};

const NewQuotableItem = () => {
  const quote = use(fetchDataQuotes());
  return (
    <>
      <div>
        <h4>New hook: use ( )</h4>
        <div>
          <cite>{quote.content}</cite>
          <address>Author: {quote.author}</address>
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
