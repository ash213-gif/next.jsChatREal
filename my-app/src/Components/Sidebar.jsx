'use client'
import React, { useState } from 'react'
import { FiSidebar, FiX } from "react-icons/fi";

export default function Sidebar() {

    const [sidebar, setsidebar] = useState(false)

    const handlesidebar = () => {
        setsidebar(!sidebar)
    }

    return (
        <div>
            <FiSidebar className="text-2xl  ml-3 mt-2  cursor-pointer" onClick={handlesidebar} />
            {sidebar && (
                <div className="fixed top-0 left-0 h-fit w-52 bg-white shadow-lg p-6 rounded-2xl  flex flex-col">
                    <div className="flex justify-end mb-4">
                        <FiX className="text-2xl cursor-pointer" onClick={handlesidebar} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="p-2 w-2/3 bg-gray-400 rounded-xl">Profile</div>
                        <div className="p-2 w-2/3 bg-gray-400 rounded-xl">Chats</div>
                        <div className="p-2 w-2/3 bg-gray-400 rounded-xl">Settings</div>
                    </div>
                </div>
            )}
            
        </div>
    )
}