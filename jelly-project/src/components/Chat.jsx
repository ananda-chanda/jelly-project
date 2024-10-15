import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../redux/chatSlice';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import { Box } from '@mui/material';

const Chat = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const user = useSelector((state) => state.chat.user);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) {
      setError('Message cannot be empty!');
      return;
    }
    setError('');
    dispatch(sendMessage({ user, text: input, timestamp: new Date().toLocaleTimeString() }));
    setInput('');
  };

  // Simulate receiving a message after 3 seconds
  useEffect(() => {
    const simulateMessage = () => {
      dispatch(receiveMessage({
        user: 'User2',
        text: 'Hello! How can I help you?',
        timestamp: new Date().toLocaleTimeString(),
      }));
    };

    const timeout = setTimeout(simulateMessage, 3000);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: { xs: '100%', sm: '400px' },
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      className="shadow-lg bg-white"
    >
      <Box
        sx={{
          flex: 1,
          padding: '16px',
          overflowY: 'auto',
        }}
        className="bg-gray-50"
      >
        {messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} timestamp={msg.timestamp} isSent={msg.type === 'sent'} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      
      <MessageInput input={input} setInput={setInput} onSend={handleSendMessage} error={error} />
    </Box>
  );
};

export default Chat;
