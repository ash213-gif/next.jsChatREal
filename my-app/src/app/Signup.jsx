'use client'
import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {

    const [formdata, setformdata] = useState({})
    const [profileimg, setforfileimg] = useState(null)

    const data = [
        { type: 'text', placeholder: 'Enter a name', name: 'name' },
        { type: 'email', placeholder: 'Enter a email', name: 'email' },
        { type: 'password', placeholder: 'Enter a password', name: 'password' }
    ]

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setforfileimg(e.target.files[0]);
    };

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
          const form = new FormData();
           Object.keys(formdata).forEach((key)=>{
            form.append(key, formdata[key] )
           })

              if (profileimg) {
                form.append('profileimg', profileimg);
            } 

            const response = await axios.post('http://localhost:4040/signup', form )
                   
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-lg mt-10">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Sign Up</h2>
            <form onSubmit={handlesubmit} className="flex flex-col gap-6">
                {data.map((item, i) => (
                    <div key={i} className="flex flex-col">
                        <label className="text-gray-600 mb-2">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</label>
                        <input
                            value={formdata[item.name]}
                            name={item.name}
                            placeholder={item.placeholder}
                            type={item.type}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <div className="flex flex-col">
                    <label className="text-gray-600 mb-2">Profile Image</label>
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Sign Up</button>
            </form>
        </div>
    )
}