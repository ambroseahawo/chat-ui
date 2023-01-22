import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createMessage, getMessages } from "../../globalState/actions/chat";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import "./chatContent.css";

const ChatContent = ({allChatMessages}) => {
  const [message, setMessage] = useState('')
  const chat = useSelector((state) => state.Chat)
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch()
  const currentUserId = JSON.parse(sessionStorage.getItem('currentUserId'))

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(() =>{
    dispatch(getMessages())
  }, [dispatch])
  useEffect(() =>{
    scrollToBottom();
  })

  const handleClick = () => {
    if (message !== "") {
      const messageData = {
        key: 'id' + performance.now(),
        sender: JSON.parse(sessionStorage.getItem('currentUser')),
        senderId: currentUserId,
        msg: message,
      };
      dispatch(createMessage(messageData))
      dispatch(getMessages())
      scrollToBottom();
      setMessage("");
    }
  }

  useEffect(() => {
    const onStorageUpdate = () =>{
      dispatch(getMessages())
    }
    
    window.addEventListener("storage", onStorageUpdate)

    return () => {
      window.removeEventListener("storage", onStorageUpdate)
    }
  }, [dispatch])

  const onStateChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar isOnline="active"
              image="https://c0.wallpaperflare.com/preview/500/556/924/doberman-dog-beauty-nature.jpg"
            />
            <p>Common Chat</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat && chat.map((itm) => {
            return (
              <ChatItem
                key={itm.key}
                sender={itm.sender}
                user={itm.senderId === currentUserId ? "me" : "other"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={message}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={handleClick}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent
