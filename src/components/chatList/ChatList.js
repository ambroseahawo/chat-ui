import React  from "react";
import { allChatUsers } from "./ChatUsers";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

const ChatList = () => {

  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        <h2>Chat</h2>
        <button className="btn-nobg">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>
      <div className="chatlist__items">
        {allChatUsers.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatList
