"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


// Initialize EmailJS (add this to your main App component or here)
emailjs.init("QL2nASLUUeySGYSH1"); // Replace with your actual public key


export default function ChatbotPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi! 👋 I\'m Sarah from MLloOps. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const [step, setStep] = useState('chat');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef(null);


  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_7a0tjbj",
    TEMPLATE_ID: "template_h7fij3d",
    PUBLIC_KEY: "QL2nASLUUeySGYSH1"
  };


  const quickReplies = [
    "What is MLloOps?",
    "How much does it cost?", 
    "Can I get a demo?",
    "Tell me about features",
    "I want to talk to sales"
  ];


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const addMessage = (text, type = 'user') => {
    const newMessage = {
      id: Date.now(),
      type,
      text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };


  const simulateTyping = () => {
    setIsTyping(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsTyping(false);
        resolve();
      }, 1500 + Math.random() * 1000);
    });
  };


  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('mllops') || message.includes('what is')) {
      return "MLloOps is an enterprise-grade ML workflow management platform that helps teams deploy, monitor, and scale machine learning models efficiently. We offer automated pipelines, real-time monitoring, and collaborative tools! 🚀";
    }
    
    if (message.includes('cost') || message.includes('price') || message.includes('pricing')) {
      return "Great question! We offer flexible pricing plans starting with a free tier. Our Professional plan is $99/month and Enterprise is custom pricing. Would you like me to connect you with our sales team for detailed pricing? 💰";
    }
    
    if (message.includes('demo') || message.includes('trial')) {
      return "Absolutely! We offer a 14-day free trial and personalized demos. I can set that up for you right now. Just need a few details first! 🎯";
    }
    
    if (message.includes('features') || message.includes('feature')) {
      return "Our key features include:\n• Automated ML Pipelines\n• Real-time Monitoring & Alerts\n• Team Collaboration Tools\n• Universal Integrations\n• Enterprise Security\n• Auto-scaling Infrastructure\n\nWhich feature interests you most? 🔧";
    }
    
    if (message.includes('sales') || message.includes('talk') || message.includes('contact')) {
      return "Perfect! I'd love to connect you with our sales team. They can provide personalized recommendations and answer all your questions. Let me collect a few details to get started! 📞";
    }
    
    return "That's a great question! I'm here to help you learn more about MLloOps. Our team can provide detailed answers to all your questions. Would you like me to connect you with a specialist? 😊";
  };


  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;
    
    const userMessage = currentInput;
    setCurrentInput('');
    setShowQuestions(false);
    
    addMessage(userMessage, 'user');
    
    await simulateTyping();
    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, 'bot');
    
    // Show contact form after a few exchanges
    if (messages.length >= 6) {
      setTimeout(async () => {
        await simulateTyping();
        addMessage("I'd love to help you further! Could you share your contact details so our team can reach out with personalized recommendations? 📋", 'bot');
        setStep('contact');
      }, 2000);
    }
  };


  const handleQuickReply = async (reply) => {
    setShowQuestions(false);
    addMessage(reply, 'user');
    await simulateTyping();
    const response = getBotResponse(reply);
    addMessage(response, 'bot');
  };


  // 📧 UPDATED: Working Email Function
  const handleContactSubmit = async () => {
    if (!userInfo.name || !userInfo.email) {
      alert('Please fill in your name and email');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create chat summary
      const chatSummary = messages
        .filter(msg => msg.type === 'user')
        .map((msg, idx) => `${idx + 1}. ${msg.text}`)
        .join('\n');


      // Email template parameters
      const templateParams = {
        user_name: userInfo.name,
        user_email: userInfo.email,
        user_phone: userInfo.phone || 'Not provided',
        chat_summary: chatSummary,
        to_email: 'dhivya.n@rbg.ai' // Replace with your email
      };


      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );


      console.log('✅ Email sent successfully:', response);
      
      // Show success message
      await simulateTyping();
      addMessage(`Thank you ${userInfo.name}! 🎉\n\nI've sent your details to our team:\n📧 ${userInfo.email}\n${userInfo.phone ? `📱 ${userInfo.phone}` : ''}\n\nOur team will reach out within 24 hours with personalized recommendations. Have a great day!`, 'bot');
      
      setTimeout(() => {
        setStep('success');
      }, 2000);


    } catch (error) {
      console.error('❌ Email sending failed:', error);
      
      // Show error message
      await simulateTyping();
      addMessage("I apologize, but there was an issue sending your details. Please try again or contact us directly at [hi@mllops.com](mailto:hi@mllops.com). Our team is always ready to help! 🛠️", 'bot');
      
      // Allow user to retry
      setTimeout(() => {
        setStep('error');
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };


  const resetChat = () => {
    setMessages([{
      id: 1,
      type: 'bot',
      text: 'Hi! 👋 I\'m Sarah from MLloOps. How can I help you today?',
      timestamp: new Date()
    }]);
    setCurrentInput('');
    setShowQuestions(true);
    setStep('chat');
    setUserInfo({ name: '', email: '', phone: '' });
  };


  const goBack = () => {
    navigate(-1); // ✅ FIXED: Proper navigation
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50/30">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={goBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">ML</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">MLloOps Assistant</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online • Typically replies instantly</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={resetChat}
              className="px-4 py-2 text-sm bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors"
            >
              Reset Chat
            </button>
          </div>
        </div>
      </div>


      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 h-[calc(100vh-200px)] flex flex-col">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  
                  {message.type === 'bot' && (
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        👩‍💼
                      </div>
                      <span className="text-sm font-medium text-gray-600">Sarah</span>
                    </div>
                  )}
                  
                  <div className={`relative px-6 py-4 rounded-2xl shadow-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-br-md ml-12'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      👩‍💼
                    </div>
                    <span className="text-sm font-medium text-gray-600">Sarah</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-6 py-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">Sarah is typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>


          {/* Contact Form */}
          {step === 'contact' && (
            <div className="p-6 border-t border-gray-200 bg-rose-50">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">Share your details to continue:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({...prev, name: e.target.value}))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({...prev, email: e.target.value}))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  placeholder="Phone (Optional)"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({...prev, phone: e.target.value}))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  disabled={isSubmitting}
                />
              </div>
              <button
                onClick={handleContactSubmit}
                disabled={!userInfo.name || !userInfo.email || isSubmitting}
                className="w-full max-w-xs mx-auto mt-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 block flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Submit Details'
                )}
              </button>
            </div>
          )}


          {/* Input Area - Keep your existing input area code */}
          {step === 'chat' && (
            <div className="p-6 border-t border-gray-200">
              {showQuestions && (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Quick questions to get started:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="p-3 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm hover:bg-rose-100 transition-colors text-left"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                  disabled={isTyping}
                />
                
                <button
                  onClick={handleSendMessage}
                  disabled={!currentInput.trim() || isTyping}
                  className="w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure & Private</span>
                </div>
                <span>•</span>
                <span>Powered by MLloOps</span>
              </div>
            </div>
          )}


          {/* Success State */}
          {step === 'success' && (
            <div className="p-8 border-t border-gray-200 text-center bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You! 🎉</h4>
              <p className="text-gray-600 mb-6">Our team will contact you within 24 hours with personalized recommendations.</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetChat}
                  className="px-6 py-3 border border-rose-300 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  Start New Chat
                </button>
                <button
                  onClick={goBack}
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}


          {/* Error State */}
          {step === 'error' && (
            <div className="p-8 border-t border-gray-200 text-center bg-red-50">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h4>
              <p className="text-gray-600 mb-6">Please try again or contact us directly at hi@mllops.com</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setStep('contact')}
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={resetChat}
                  className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
