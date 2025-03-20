import { useState, useEffect } from "react";

const TypewriterParagraph = ({ text = "", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="font-mono border-l-4 border-primary pl-4 whitespace-pre-wrap">
      {displayedText}
      <span className="animate-blink">|</span>
    </p>
  );
};

export default TypewriterParagraph;
