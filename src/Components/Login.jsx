import React, { useState } from 'react';
import Background from './Background';
import { doSignInWithEmailAndPassword } from "../Firebase/auth";
import Register from './Register';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

   const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await doSignInWithEmailAndPassword(email, pass);
      alert("Login Successful");
      navigate('/home')
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background - Always show */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Centered content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 w-full">
        {showRegister ? (
          // Debug: Add fallback if Register component fails
          <div className="w-full max-w-sm">
            <Register onBack={() => setShowRegister(false)} />
            {/* Debug button */}
            <button 
              onClick={() => setShowRegister(false)}
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-md"
            >
              Back to Login (Debug)
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleLogin}
            className="bg-orange-900/60 backdrop-blur-md border border-white/30 shadow-[0_0_30px_rgba(255,140,0,0.6)] p-6 rounded-xl w-full max-w-sm text-white mt-40"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 bg-orange-900/30 text-white placeholder-white border border-white/30 px-3 py-2 rounded-md focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full mb-6 bg-orange-900/30 text-white placeholder-white border border-white/30 px-3 py-2 rounded-md focus:outline-none"
              required
            />

            {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 rounded-md border border-teal-500 text-white font-semibold bg-teal-900/80 hover:bg-teal-600 transition duration-300"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setShowRegister(true)}
              className="w-full mt-2 py-2 rounded-md border border-teal-500 text-white font-semibold hover:bg-orange-700 transition duration-300"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;