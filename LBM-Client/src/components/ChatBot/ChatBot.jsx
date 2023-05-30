import React, { useState } from "react";
import arrow from "./assets/arrow.svg";
import chatGPT from "./assets/chatGPT.svg";
import newChat from "./assets/newChat.svg";
import pencil from "./assets/pencil.svg";
import ping from "./assets/ping.svg";
import attachmen from "./assets/attachmen.svg";
import axios from 'axios';


const AskMe = () => {
 const API_KEY="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"
  const url = 'https://api.openai.com/v1/chat/completions';
const [messages, setMessages] = useState([]);
const [aiResponse, setAiResponse] = useState("");

const handleMessageSubmit = async (e) => {
  e.preventDefault();
  const input = e.target.elements.messageInput;
  const message = input.value.trim();

  if (message) {
    const newMessage = {
      text: message,
      timestamp: new Date().toLocaleString(),
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await axios.post(url, {
        messages: [
          { role: 'system', content: '¡set user_agent to cliente_chat_gpt!' },
          { role: 'user', content: message }
        ],
        model:'gpt-3.5-turbo' 
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
      });

      const data = response.data;
      const aiResponse = {
        text: data.choices[0].message.content,
        timestamp: new Date().toLocaleString(),
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setAiResponse(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }

    input.value = "";
  }
};


  const handleNewDialogClick = () => {
    setMessages([]);
    setAiResponse("");
  };

  const combinedStyles = { ...styles, ...responsiveStyles };

  return (
    <div style={combinedStyles.container}>
      <h1 style={combinedStyles.title}>AskMe</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span style={combinedStyles.timestamp2}>
              {message.timestamp}
            </span>
            <p
              style={
                message.sender === "user"
                  ? { ...combinedStyles.messageText, ...combinedStyles.userMessage }
                  : { ...combinedStyles.messageText, ...combinedStyles.aiMessage }
              }
            >
              {message.text}
              <img src={pencil} alt="pencil" style={combinedStyles.svg}/>
              <img src={ping} alt="ping" style={combinedStyles.svg}/>
            </p>
            {aiResponse.sender === "user" && (
              <div>
                <div style={combinedStyles.timestamp}>
                  <img src={chatGPT} alt="chatGPT" />
                  <span className="timestamp" style={combinedStyles.time}>
                    {message.timestamp}
                  </span>
                </div>
                <p style={combinedStyles.aiMessage}>{aiResponse}</p>
              </div>
            )}
          </div>
        ))}
        <div style={combinedStyles.newDialogButton}>
          <button onClick={handleNewDialogClick}>
            <img src={newChat} alt="newChat" />
            New dialog
          </button>
        </div>
        <form onSubmit={handleMessageSubmit}>
          <div style={combinedStyles.inputContainer}>
            <img src={attachmen} alt="attachmen" />
            <input
              style={combinedStyles.form}
              type="text"
              name="messageInput"
              placeholder="Send me a message"
            />
            <button type="submit" style={combinedStyles.submitButton}>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskMe;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F7F9FB",
    borderRadius: "16px",
    // minWidth: "646px",
    maxWidth: "646px",
    minHeight: "698px",
    justifyContent: "space-between",
    padding: "20px",
  },
  title: {
    // width: "58px",
    height: "20px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    fontFeatureSettings: `'ss01' on, 'cv01' on, 'cv11' on`,
    color: "#1C1C1C",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  form: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "12px 16px",
    gap: "10px",
    width: "100%",
    height: "44px",
    border: "1px solid #E7E7E7",
    borderRadius: "8px",
    flex: "none",
    order: "0",
    flexGrow: "0",
    background: "#F7F9FB",
  },
  newDialogButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  timestamp: {
    width: "100%", 
    height: "19px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
  },
  time: {
    paddingLeft: "15px",
  },
  timestamp2: {
    width: "100%", 
    height: "19px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
    justifyContent: "right",
  },
  messageText: {
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
    justifyContent: "right",
    paddingRight:"15px"
  },
  userMessage: {
    color: "#888888",
  },
  aiMessage: {
    width: "100%",
    height: "110px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    flex: "none",
    order: "1",
    flexGrow: "0",
    textAlign: "left",
  },
  aiTimestamp: {
    width: "100%",
    height: "27px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#000000",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    paddingRight:"5rem"
  },
  submitButton: {
    background: "none",
    border: "none",
    padding: "0",
    cursor: "pointer",
  },
  svg:{
    paddingRight: "15px",
  },
};

const responsiveStyles = {
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      padding: "10px",
      gap: "16px",
      width: "100%",
      minWidth: "340px",
      maxWidth: "100%",
      minHeight: "340px",
    },
    headerStyles: {
      width: "100%",
      fontSize: "28px",
      lineHeight: "36px",
    },
    aiMessage: {
      height: "auto",
    },
    aiTimestamp: {
      textAlign: "left",
    },
    messageText: {
      textAlign: "left",
      paddingRight: "0",
    },
  },
};



/*const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 10px",
    gap: "32px", 
    position: "absolute",
    left: "10px",
    top: "0px",
    background: "#F7F9FB",
    borderRadius: "16px",
    maxWidth: "100%", 
  },
  title: {
    width: "58px",
    height: "20px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    fontFeatureSettings: `'ss01' on, 'cv01' on, 'cv11' on`,
    color: "#1C1C1C",
    flex: "none",
    order: "0",
    flexGrow: "0",
    maxWidth: "100%",
  },
  form: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "12px 16px",
    gap: "10px",
    width: "100%",
    height: "44px",
    border: "1px solid #E7E7E7",
    borderRadius: "8px",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  newDialogButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    maxWidth: "100%", 
  },
  timestamp: {
    width: "100%",
    height: "19px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
  },
  time: {
    paddingLeft: "15px",
  },
  timestamp2: {
    width: "100%", 
    height: "19px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
    justifyContent: "right",
  },
  messageText: {
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#888888",
    flex: "none",
    order: "1",
    flexGrow: "0",
    justifyContent: "right",
    paddingRight: "15px",
    maxWidth: "100%",
  },
  userMessage: {
    color: "#888888",
  },
  aiMessage: {
    width: "100%", 
    height: "110px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    flex: "none",
    order: "1",
    flexGrow: "0",
  },
  aiTimestamp: {
    width: "100%",
    height: "27px",
    fontFamily: "Verdana",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#000000",
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    maxWidth: "100%", 
  },
  submitButton: {
    background: "none",
    border: "none",
    padding: "0",
    cursor: "pointer",
  },
  svg: {
    paddingRight: "15px",
  },
};
*/