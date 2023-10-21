import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import styles from '@/styles/Chat.module.css'

let socket;

const Chat_Private = ({ room }) => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { data: sessionData, status: sessionStatus } = useSession(); 

  useEffect(() => {
    if (room !== -1) {
        setAllMessages([])
        socketInitializer();
        
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }
  }, [room]);

  const socketInitializer = async () => {
    try {
      const response = await fetch("/api/socket");
        if (response.ok){
            socket = io();
      
            socket.emit('joinRoom', {
                username: sessionData.user.userName,
                room: room
            });
      
            socket.on('roomUsers', ({room, users}) => {
            })
      
            socket.on('message', (msg) => {
              setAllMessages((prevMessages) => [...prevMessages, msg])
            });
        } else {
            throw new Error("Error initializing socket:", error)
        }
    } catch (error) {
      console.error("Error initializing socket:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      socket.emit("chatMessage", message);
      setMessage("");
    }
  };

  if (room === -1) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat app: {sessionData.user.userName}</h1>
      <div>
        {allMessages.map(({ username, text, time }, index) => (
          <div key={index} className={`${styles.bubbleWrapper}`}>
            <div className={`${styles.inlineContainer} ${sessionData.user.userName === username ? styles.own : ''}`}>
              <b className={styles.inlineIcon}>{username}</b>
              <div className={`${sessionData.user.userName === username ? styles.ownBubble : styles.otherBubble} ${sessionData.user.userName === username ? styles.own : styles.other}`}>{text}</div>
            </div>
            <span className={sessionData.user.userName === username ? styles.own : styles.other}>{time}</span>
          </div>
        ))}
      </div>


      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat_Private;
