import React, { useState, useEffect, useRef } from 'react';
import './AutoInsuranceChatbot.css';

const AutoInsuranceChatbot = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({
    started: false,
    hasCoverage: '',
    currentPayment: ''
  });
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [initialized, setInitialized] = useState(false);
  const chatContainerRef = useRef(null);
  const initRef = useRef(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Countdown timer
  useEffect(() => {
    if (showCountdown && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showCountdown, timeRemaining]);

  // Initial greeting sequence - only run once
  useEffect(() => {
    if (isOpen && !initialized && !initRef.current) {
      initRef.current = true;
      setInitialized(true);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage('Hello 👋', 'agent');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addMessage("I'm Emily from Peace Of Mind Insurance", 'agent');
            setTimeout(() => {
              setIsTyping(true);
              setTimeout(() => {
                setIsTyping(false);
                addMessage("Welcome! Let's get started with your auto insurance quote today.", 'agent');
                setTimeout(() => {
                  addMessage('Get Started', 'agent', 'button', () => handleGetStarted());
                }, 500);
              }, 1250);
            }, 500);
          }, 1750);
        }, 500);
      }, 750);
    }
  }, [isOpen, initialized]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      initRef.current = false;
      setInitialized(false);
      setMessages([]);
      setStep(0);
      setUserAnswers({ started: false, hasCoverage: '', currentPayment: '' });
      setShowCountdown(false);
      setTimeRemaining(180);
      setIsTyping(false);
    }
  }, [isOpen]);

  const addMessage = (text, sender, type = 'text', action = null) => {
    const newMessage = {
      id: Date.now() + Math.random(),
      text,
      sender,
      type,
      action
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleGetStarted = () => {
    setUserAnswers(prev => ({ ...prev, started: true }));
    addMessage('Get Started', 'user');
    setStep(1);

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage('Do you currently have any Auto Insurance Coverage for your Car?', 'agent');
        setTimeout(() => {
          addMessage('choice', 'agent', 'choice', {
            options: ['Yes', 'No'],
            onSelect: handleCoverageAnswer
          });
        }, 500);
      }, 1750);
    }, 250);
  };

  const handleCoverageAnswer = (answer) => {
    setUserAnswers(prev => ({ ...prev, hasCoverage: answer }));
    addMessage(answer, 'user');
    setStep(2);

    if (answer === 'No') {
      setTimeout(() => {
        addMessage("You're not qualified for this coverage based on your answers.", 'agent', 'error');
      }, 500);
    } else {
      // New follow-up question about current payment
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage('How much are you currently paying for your auto insurance?', 'agent');
          setTimeout(() => {
            addMessage('choice', 'agent', 'choice', {
              options: ['Under $100', 'Over $100'],
              onSelect: handleCurrentPaymentAnswer
            });
          }, 500);
        }, 1500);
      }, 500);
    }
  };

  const handleCurrentPaymentAnswer = (answer) => {
    setUserAnswers(prev => ({ ...prev, currentPayment: answer }));
    addMessage(answer, 'user');
    setStep(3);

    // Continue with the existing positive flow
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage('🎉 Awesome! 🎁', 'agent');
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addMessage('We can help you compare options and find more affordable coverage for your car — at no cost and with no obligation.', 'agent');
            setTimeout(() => {
              setIsTyping(true);
              setTimeout(() => {
                setIsTyping(false);
                addMessage('Your coverage can help protect you from costly repairs, accidents, and unexpected damages.', 'agent');
                setTimeout(() => {
                  setIsTyping(true);
                  setTimeout(() => {
                    setIsTyping(false);
                    addMessage('Tap the number below to call now and speak with a licensed auto insurance specialist. It only takes 2 minutes to check your coverage options. Available Mon–Fri, 9:00AM–6:00PM EST.', 'agent');
                    setTimeout(() => {
                      addMessage('phone', 'agent', 'phone');
                      setShowCountdown(true);
                    }, 500);
                  }, 2250);
                }, 500);
              }, 1250);
            }, 500);
          }, 1750);
        }, 500);
      }, 1250);
    }, 250);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="aic-container-embedded">
      {/* Header */}
      <div className="aic-header">
        <div className="aic-header-info">
          <div className="aic-status-wrapper">
            <span className="aic-status-dot-ping"></span>
            <span className="aic-status-dot"></span>
          </div>
          <span className="aic-header-text">Emily is Online.</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="aic-messages" ref={chatContainerRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`aic-message ${msg.sender}`}>
            <div className="aic-avatar">
              {msg.sender === 'agent' ? (
                <img
                  src="https://medcareinsuranceagency.com/wp-content/uploads/2025/11/agent.gif"
                  alt="Agent Emily"
                  className="aic-avatar-img"
                />
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#1CA7B8" />
                  <path d="M16 18C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10C13.7909 10 12 11.7909 12 14C12 16.2091 13.7909 18 16 18Z" fill="white" />
                  <path d="M10 24C10 21.7909 12.6863 20 16 20C19.3137 20 22 21.7909 22 24" fill="white" />
                </svg>
              )}
            </div>

            <div className="aic-message-content">
              {msg.type === 'text' && (
                <div className="aic-bubble">
                  <p>{msg.text}</p>
                </div>
              )}

              {msg.type === 'button' && (
                <div className="aic-bubble">
                  <button className="aic-primary-btn" onClick={msg.action}>
                    {msg.text}
                  </button>
                </div>
              )}

              {msg.type === 'choice' && (
                <div className="aic-bubble">
                  <div className="aic-choice-buttons">
                    {msg.action.options.map((option, idx) => (
                      <button
                        key={idx}
                        className="aic-choice-btn"
                        onClick={() => msg.action.onSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {msg.type === 'error' && (
                <div className="aic-bubble error">
                  <p>{msg.text}</p>
                </div>
              )}

              {msg.type === 'phone' && (
                <div className="aic-bubble">
                  <div className="aic-phone-wrapper">
                    <a href="tel:+18335494113" className="aic-phone-btn">
                      +1 (833) 549-4113
                    </a>
                    <div className="aic-availability">
                      <p className="aic-availability-text">
                        We currently have 3 agents available. We are available from 9:00AM to 6:00PM EST
                      </p>
                      <div className="aic-countdown">
                        {formatTime(timeRemaining)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="aic-message agent">
            <div className="aic-avatar">
              <img
                src="https://medcareinsuranceagency.com/wp-content/uploads/2025/11/agent.gif"
                alt="Agent Emily"
                className="aic-avatar-img"
              />
            </div>
            <div className="aic-message-content">
              <div className="aic-bubble">
                <div className="aic-typing">
                  <span className="aic-typing-dot"></span>
                  <span className="aic-typing-dot"></span>
                  <span className="aic-typing-dot"></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoInsuranceChatbot;
