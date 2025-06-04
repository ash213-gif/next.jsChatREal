import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div>
      <p>{message.text}</p>
      <p>Sender: {message.sender.name}</p>
      <p>Receiver: {message.receiver.name}</p>
    </div>
  );
};

export default ChatMessage;