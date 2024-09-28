import React, { useState } from 'react';
import axios from 'axios'; // Assuming you'll use axios for API requests

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!message) return;

    // Append user message to the chat history
    const newMessage = { sender: 'user', text: message };
    setChatHistory((prev) => [...prev, newMessage]);

    try {
      // Send user message to the chatbot API (replace this with actual API endpoint)
      const response = await axios.post('/api/chatbot', {
        message: message,
      });

      // Assuming the API returns an object { message: 'response text' }
      const botMessage = { sender: 'bot', text: response.data.message };

      // Append the chatbot's response to the chat history
      setChatHistory((prev) => [...prev, newMessage, botMessage]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }

    // Clear the input field
    setMessage('');
  };

  return (
    <>
      {/* Chat Icon */}
      <div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300 z-50"
      >
        <i className="fas fa-comments text-2xl"></i>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 sm:right-8 bg-white w-full sm:w-64 h-80 rounded-lg shadow-lg z-50 flex flex-col">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Chat with Gemini</span>
            <button onClick={toggleChat} className="text-white">
              X
            </button>
          </div>
          <div className="p-4 flex-grow overflow-y-auto">
            <div className="space-y-2">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    chat.sender === 'user' ? 'bg-gray-300 self-end' : 'bg-blue-100 self-start'
                  }`}
                >
                  {chat.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center p-2 border-t">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="flex-grow border rounded-lg px-2 py-1 mr-2"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;
