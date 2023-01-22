import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import "./App.css";
import "./input.css";

function App() {
  const [username, setUsername] = useState('')
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')))

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      if (username.length > 2 && username.length < 11) {
        sessionStorage.setItem('currentUser', JSON.stringify(username))
        setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')))

        let uniqueId = 'id' + (new Date()).getTime();
        sessionStorage.setItem('currentUserId', JSON.stringify(uniqueId))
      }else{
        alert("Username should be at least 3 characters and not exceed 10 characters!")
      }
    }
  }

  return (
    <React.Fragment>
      {
        currentUser ? (
          <div className="__main">
            <Nav />
            <ChatBody />
          </div>
        ) : (
          <div class="subscribe-box">
            <h2>Enter Username To Proceed</h2>
            <form class="subscribe">
              <input type="text" placeholder="e.g. Ludmila" onChange={handleChange}
                value={username} autocomplete="off" required="required"
              />
              <button type="submit" onClick={handleSubmit}>
                <span>Proceed</span>
              </button>
            </form>
          </div>
        )
      }
    </React.Fragment>

  );
}

export default App;
