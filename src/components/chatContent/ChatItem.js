import React from "react";

const ChatItem = (props) => {
  return (
    <div key={props.key} style={{ animationDelay: `0.5` }}
      className={`chat__item ${props.user}`}
    >
      <div className="chat__item__content">
        <div className="chat__meta">
          <span style={{ textTransform: "capitalize"}}>{props.sender}</span>
        </div>
        <div className="chat__msg">{props.msg}</div>
      </div>
    </div>
  );
}

export default ChatItem
