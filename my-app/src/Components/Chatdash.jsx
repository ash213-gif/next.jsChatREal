"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Chatdash() {
  const [value, setvalue] = useState("");

  const handleChnage = (e) => {
    setvalue(e.target.value);
    
  };

// 

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:w-64   w-full md:block  bg-white shadow-lg p-4 flex flex-col">
        <Sidebar />
        <div className="mt-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 overflow-y-auto">
          <div className="p-2 hover:bg-gray-100 rounded">Ashish</div>
          {/* Add more chat items here */}
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {/* Chat conversation area */}

        <div className="chat chat-end">
          <div className="chat-bubble">{value}</div>
        </div>

        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin,
            <br />I have the high ground.
          </div>
        </div>

        <div className="h-full flex flex-col justify-end">
          <div className="mb-4">{/* Chat messages */}</div>
          <div className="flex gap-2">
            <input
              type="text"
              onChange={handleChnage}
              placeholder="Type a message"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
        onClick={valuesubmit}
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
