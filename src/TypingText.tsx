import { useState, useEffect } from "react";

const TypingText = ({ phrases }: { phrases: string[] }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which phrase
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        // typing
        setText(phrases[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === phrases[index].length) {
          setTimeout(() => setDeleting(true), 1000); // start deleting after finished
        }
      } else {
        // deleting
        setText(phrases[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % phrases.length); // move to next phrase
        }
      }
    }, deleting ? 50 : 150); // speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, phrases]);

  return <h2>{text}|</h2>;
};

export default TypingText;
