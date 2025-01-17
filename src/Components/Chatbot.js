import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../Styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [documentText, setDocumentText] = useState('');
  const [language, setLanguage] = useState('ta-IN'); // Default language is Tamil
  const chatboxRef = useRef(null);
  const recognitionRef = useRef(null);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false; // Stop after one input
      recognition.interimResults = false; // Show only final results
      recognition.lang = language; // Set language based on state

      recognition.onstart = () => {
        console.log('Speech recognition started');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Transcript received: ', transcript);
        handleSendMessage(transcript); // Handle message from voice input
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ', event.error);
        alert('An error occurred with speech recognition: ' + event.error);
      };

      recognition.onend = () => {
        console.log('Speech recognition ended');
      };

      recognitionRef.current = recognition;
    } else {
      console.log('Speech Recognition API not supported in this browser');
    }
  }, [language]); // Reinitialize when language changes

  // Handle auto-scroll
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    console.log('User Input:', userInput); // Debug: Log user input

    const userMessage = { sender: 'user', text: userInput };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      let responseText = '';
      const lowerInput = userInput.toLowerCase();

      if (language === 'ta-IN') {
        if (lowerInput.includes('கடவுள் உண்டா') || lowerInput.includes('கடவுள்')) {
          responseText = 'கடவுள் நம்மளை படைச்சவரு. என்ன உருவாக்குனது சிபிராஜ் மற்றும் அபிஷேக். கடவுள் இருக்காரு.';
        } else {
          const conversationHistory = [...messages, userMessage]
            .map((msg) => `${msg.sender === 'user' ? 'User' : 'Max'}: ${msg.text}`)
            .join('\n');

          const result = await model.generateContent(conversationHistory);
          responseText = await result.response.text();
        }
      } else {
        if (lowerInput.includes('god exists') || lowerInput.includes('god')) {
          responseText = 'God is the creator. SibiRaj and Abishek created me. God exists.';
        } else {
          const conversationHistory = [...messages, userMessage]
            .map((msg) => `${msg.sender === 'user' ? 'User' : 'Max'}: ${msg.text}`)
            .join('\n');

          const result = await model.generateContent(conversationHistory);
          responseText = await result.response.text();
        }
      }

      const botMessage = { sender: 'bot', text: responseText };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      speak(responseText); // Speak the bot's response in the selected language
    } catch (error) {
      console.error('Error generating content:', error.message);
    }

    setInput('');
  };

  // Handle document upload and extract text
  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      setDocumentText(text);

      const userMessage = { sender: 'user', text: 'Please summarize this document.' };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      try {
        const conversationHistory = `${userMessage.text}\nDocument Content:\n${text}`;
        const result = await model.generateContent(conversationHistory);
        const botMessage = { sender: 'bot', text: await result.response.text() };

        setMessages(prevMessages => [...prevMessages, botMessage]);
        speak(botMessage.text); // Speak the bot's response in the selected language
      } catch (error) {
        console.error('Error summarizing document:', error.message);
      }
    };

    reader.readAsText(file);
  };

  // Speak the bot's response in the selected language
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language; // Set language based on state
      window.speechSynthesis.speak(utterance);
    }
  };

  // Start voice recognition in the selected language
  const startListening = () => {
    if (recognitionRef.current) {
      console.log('Starting voice recognition...');
      recognitionRef.current.start();
    } else {
      console.log('Speech recognition instance is not available');
    }
  };

  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="chat-container">
      <div className="language-toggle">
        <button 
          onClick={() => changeLanguage('ta-IN')}
          className={language === 'ta-IN' ? 'active' : ''}
        >
          Tamil
        </button>
        <button 
          onClick={() => changeLanguage('en-US')}
          className={language === 'en-US' ? 'active' : ''}
        >
          English
        </button>
      </div>
      <div className="chatbox" ref={chatboxRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
      />
      <button onClick={() => handleSendMessage(input)}>Send</button>
      <button onClick={startListening}>Start Voice Input</button>

      <div className="document-section">
        <input type="file" onChange={handleDocumentUpload} />
      </div>
    </div>
  );
};

export default Chatbot
