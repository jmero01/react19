import { useState, useEffect } from "react";

// simulate receiving a message with emoji
const getEmoji = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, " 😴"));
};

// the code starts here using the current hooks: useState and useEffect
const RevelEmojiHooks = ({ emojiPromise }) => {
  const [emojiContent, setEmojiContent] = useState(null);

  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const emoji = await emojiPromise;
        setEmojiContent(emoji);
      } catch (error) {
        console.error("Error retrieving the gift:", error);
      }
    };

    fetchEmoji();
  }, [emojiPromise]);
  // the end

  if (!emojiContent) {
    return <p>Receiving the emoji...</p>;
  }
  return <p>Here is the emoji: {emojiContent}</p>;
};

// same code to show the container & promise
export const HooksReturnPromise = () => {
  const [emojiPromise, setEmojiPromise] = useState(null);
  const [show, setShow] = useState(false);
  const reveal = () => {
    setEmojiPromise(getEmoji());
    setShow(true);
  };
  if (show) {
    return <RevelEmojiHooks emojiPromise={emojiPromise} />;
  } else {
    return <button onClick={reveal}>Reveal the emoji</button>;
  }
};
