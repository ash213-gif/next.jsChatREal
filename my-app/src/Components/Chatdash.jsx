'use client'
import React from 'react'
import Sidebar from './Sidebar'

export default function Chatdash() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:w-64   w-full md:block  bg-white shadow-lg p-4 flex flex-col">
        <Sidebar />
        <div className="mt-4">
          <input
            type="search"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 overflow-y-auto">
          <div className="p-2 hover:bg-gray-100 rounded">Ashish</div>
          {/* Add more chat items here */}
        </div>
      </div>
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {/* Chat conversation area */}
        <div className="h-full flex flex-col justify-end">
          <div className="mb-4">
            {/* Chat messages */}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
     
      
    </div>
  )
}