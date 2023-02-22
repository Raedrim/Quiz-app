import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setError('');
      <Link href="/quiz">
        <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
          Start Quiz
        </div>
      </Link>
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
  <div>
    <label htmlFor="username" className="text-gray-700">
      Username
    </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
  <div>
    <label htmlFor="password" className="text-gray-700">
      Password
    </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
  <div>
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
    >
      Login
    </button>
  </div>
  {error && (
    <div className="text-red-500">
      {error}
    </div>
  )}
</form>

  );
}
