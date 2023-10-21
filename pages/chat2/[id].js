import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";


let socket;

const Home = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const { data: sessionData, status: sessionStatus } = useSession(); 
  const route = useRouter();


  useEffect(() => {
    if (sessionStatus === "authenticated") {
        socketInitializer();

        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }
  }, [sessionStatus]);

  const socketInitializer = async () => {
    try {
      const response = await fetch("/api/socket2");
        if (response.ok){
            socket = io(); // create a new socket connection
      
            socket.emit('joinRoom', {
                username: sessionData.user.userName,
                room: route.query.id
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

  if (sessionStatus !== 'authenticated') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Chat app: {sessionData.user.userName}</h1>
      <div>
        {allMessages.map(({ username, text }, index) => (
          <div key={index}>
            {username}: {text}
          </div>
        ))}
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

export default Home;
