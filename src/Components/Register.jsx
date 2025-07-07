import React, { useState } from 'react';
import Background from './Background';
import { doCreateUserWithEmailAndPassword } from "../Firebase/auth";

function Register({ onBack }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Check if passwords match
    if (pass !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    
    try {
      await doCreateUserWithEmailAndPassword(email, pass);
      alert("Registration Successful");
      onBack(); // Go back to login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
     

      {/* Centered content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 w-full">
        <form
          onSubmit={handleRegister}
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
            className="w-full mb-4 bg-orange-900/30 text-white placeholder-white border border-white/30 px-3 py-2 rounded-md focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full mb-6 bg-orange-900/30 text-white placeholder-white border border-white/30 px-3 py-2 rounded-md focus:outline-none"
            required
          />

          {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 rounded-md border border-teal-500 text-white font-semibold bg-teal-900/80 hover:bg-teal-600 transition duration-300"
          >
            Register
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full mt-2 py-2 rounded-md border border-teal-500 text-white font-semibold hover:bg-orange-700 transition duration-300"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;