"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const password = 'password123';
const email = 'admin@gmail.com';

export default function Connexion() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    if (emailInput === email && passwordInput === password) {
      router.push('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Login</button>
      </form>
    </div>
  );
}