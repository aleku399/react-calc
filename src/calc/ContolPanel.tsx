import React from "react";

interface Props {
  onClick: any;
  anyHistory: boolean;
}

function ControlPanel({onClick, anyHistory}: Props) {
  return (
    <button onClick={onClick} disabled={!anyHistory}>
      show
    </button>
  );
};

export default ControlPanel;
