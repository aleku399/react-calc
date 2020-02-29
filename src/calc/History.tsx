import React from "react";

interface Props {
  onSelected: any;
  history: any;
  onDelete: any;
}

function History({onDelete, history, onSelected}: Props) {
  return (
    <div className="history">
      {
        history.map((history: any, index: number) => (
          <div className="history_item">
            <button className="history_item_button" onClick={(_event) => onSelected(index)}>
              <div className="text_right">
                <div>{history.express}</div>
                <div style={{fontWeight: 700}}>{history.answer}</div>
              </div>
            </button>
            <button onClick={onDelete} className="trash">
              delete
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default History;
