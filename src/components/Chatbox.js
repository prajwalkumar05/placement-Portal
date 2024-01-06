import React, { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const Chatbox = ({name,msg,companyId,user}) => {
  console.log(name)
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  console.log(user)

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      setMessages({ text: newMessage, sender: "user" });
      setNewMessage("");
    }

    const commentData ={
      Comment:newMessage,
      userid:"123456789",
      uid:user.uid,
      sender:"user"
    }

    const noteRef = doc(db, "companys", companyId);
    await updateDoc(noteRef, {
      msg: [...msg, commentData],
    });

  };

  return (
    <div className="w-[90%] mx-auto bg-white shadow-md rounded-md overflow-hidden mt-5">
      <div className="bg-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Chat 
        </h2>
      </div>
      <div className="p-4 h-60 overflow-y-auto">
        {msg && msg.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block bg-gray-300 p-2 rounded-md ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {message.Comment}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
