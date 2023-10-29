import React, { useState, useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  const initialText = "  Loading...  ";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < initialText.length) {
        setDisplayedText(initialText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 150);
      }
    };

    typeText();
  }, []);

  return (
    <div className="typing-text">
      <p className="text">{displayedText}</p>
    </div>
  );
};

export default Loading;
