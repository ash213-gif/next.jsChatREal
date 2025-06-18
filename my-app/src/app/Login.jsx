'use client'

import axios from 'axios';
import React, { useState } from 'react'


export default function Login() {

    const [data, setdata] = useState({
        'email': '',
        'password': ''
    })

    const form = [
        { type: 'email', placeholder: 'Enter your email', name: 'email' },
        { type: 'password', placeholder: 'Enter your password', name: 'password' },
    ]

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async  (e)=>{
        e.preventDefault();

try{
            const response =  await axios.post('http://localhost:4040/login',data)
console.log(response);
}     catch(e){ console.log(e); }   
    }

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-lg mt-10">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit } className="flex flex-col gap-6">
                {form.map((items, i) => (
                    <div key={i} className="flex flex-col">
                        <label className="text-gray-600 mb-2">{items.name.charAt(0).toUpperCase() + items.name.slice(1)}</label>
                        <input
                            type={items.type}
                            placeholder={items.placeholder}
                            name={items.name}
                            value={data[items.name]}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">Login</button>
            </form>
                 
        </div>
    )
}