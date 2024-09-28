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
    if (!message.trim()) return; // Prevent sending empty messages

    // Append user message to the chat history
    const newMessage = { sender: 'user', text: message };
    setChatHistory((prev) => [...prev, newMessage]);

    // Prepare bot's response based on user input
    let botMessage = { sender: 'bot', text: "I'm sorry, I can't understand that." };

    // Check for common hotel booking phrases
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
      botMessage = { sender: 'bot', text: 'Hi! How can I assist you with your hotel booking today?' };
    } else if (lowerCaseMessage.includes('book a hotel')) {
      botMessage = { sender: 'bot', text: 'Sure! What city are you looking to book a hotel in?' };
    } else if (lowerCaseMessage.includes('hotel in')) {
      botMessage = { sender: 'bot', text: 'Great! What are your check-in and check-out dates?' };
    } else if (lowerCaseMessage.includes('check-in') || lowerCaseMessage.includes('check-out')) {
      botMessage = { sender: 'bot', text: 'Please provide the number of guests.' };
    } else if (lowerCaseMessage.includes('number of guests')) {
      botMessage = { sender: 'bot', text: 'I have found options for you. Would you like to proceed with a booking?' };
    } else if (lowerCaseMessage.includes('yes')) {
      botMessage = { sender: 'bot', text: 'Perfect! Please provide your payment details to complete the booking.' };
    } else {
      // Provide hotel staff contact information for unrecognized input
      botMessage = { sender: 'bot', text: 'I am unable to understand your request. Please contact our hotel staff at: 8298197805.' };
    }

    // Append the chatbot's response to the chat history
    setChatHistory((prev) => [...prev, botMessage]);

    // Clear the input field
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (e.g., new line in textarea)
      handleSendMessage(); // Call the send message function
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300 z-50"
      >
        <i className="fas fa-comments text-2xl"></i>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 sm:right-8 bg-white w-11/12 max-w-xs h-72 rounded-lg shadow-lg z-50 flex flex-col border border-gray-300">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center shadow-md">
            <span className="text-lg font-semibold">Chat with Gemini</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none">
              &times;
            </button>
          </div>
          <div className="p-4 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            <div className="space-y-2">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${
                    chat.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'
                  } max-w-xs break-words`}
                >
                  {chat.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center p-2 border-t border-gray-300">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyDown} // Add the keydown event handler
              className="flex-grow border border-gray-300 rounded-lg px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
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