'use client';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    const res = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Signup</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 my-2 block" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="border p-2 my-2 block" />
      <button onClick={handleSignup} className="bg-blue-600 text-white p-2">Register</button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
