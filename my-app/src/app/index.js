import React, { useState, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/mesage/getmessages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Chat App</h1>
      <ChatInput />
      {messages.map((message) => (
        <ChatMessage key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Home;