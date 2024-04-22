import { use, Suspense, useState } from "react";

// simulate receiving a message withg emojis
const getEmojis = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, " 👋, 🌏"));
};

// The code start here using the new hook: use()
const RevelEmojisUseHook = ({ emojisPromise }) => {
  const emojisContent = use(emojisPromise);
  return <p>Here are the emojis: {emojisContent}</p>;
};
// the end

const EmojisContainer = ({ emojisPromise }) => {
  return (
    <Suspense fallback={"Receiving the emojis..."}>
      <RevelEmojisUseHook emojisPromise={emojisPromise} />
    </Suspense>
  );
};

// same code to show the container & promise
export const ReturnPromiseWithUse = () => {
  const [emojisPromise, setEmojisPromise] = useState(null);
  const [show, setShow] = useState(false);

  const reveal = () => {
    setEmojisPromise(getEmojis());
    setShow(true);
  };
  if (show) {
    return <EmojisContainer emojisPromise={emojisPromise} />;
  } else {
    return <button onClick={reveal}>Revel the emojis</button>;
  }
};
