import React from "react";

interface Props {
  topText: string;
  bottomText: string;
}

function Display({topText, bottomText}: Props) {
  return (
  <div className="display">
    <div className="top">{topText}</div>
    <div className="bottom">{bottomText}</div>
  </div>
  )
}

export default Display;
