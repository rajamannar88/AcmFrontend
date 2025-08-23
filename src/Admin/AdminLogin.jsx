import React, { useState } from 'react';
import API, { setToken } from '../api/Api';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { username, password });
      const token = res.data.token;
      localStorage.setItem('admin_token', token);
      setToken(token);
      nav('/admin/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-sky-700">NPRCET ACM Admin Login</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input value={username} onChange={e=>setUsername(e.target.value)} required
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"/>
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"/>
          </div>
          <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
