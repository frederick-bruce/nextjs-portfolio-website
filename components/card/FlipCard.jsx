import React from "react";
import { useState } from "react";

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>Front</h1>
          <button onClick={() => setIsFlipped(true)}>Flip</button>
        </div>
        <div className="{flip-card-back}">
          <h1>Back</h1>
          <button onClick={() => setIsFlipped(false)}>Flip</button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
