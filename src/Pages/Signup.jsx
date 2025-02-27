

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    

    if (!email || !password || !username) {
      setError("All fields are required.");
      return;
    }
    
    try {
      const response = await fetch("https://mockapi.io/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");
      alert("Registration successful");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-center text-3xl font-bold text-gray-900">thoughtly</h1>
        <h2 className="text-center text-xl font-semibold mt-4">Sign Up</h2>
        <p className="text-center text-gray-600 mb-6">Get started by signing up with Thoughtly.</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 hover:border-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 hover:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 hover:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>
          </div>
          <button type="submit" className="w-full bg-green-800 text-white p-2 rounded-md hover:bg-green-900">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          By creating an account, you agree to our <a href="#" className="text-green-700 hover:underline">Terms of Service</a> and <a href="#" className="text-green-700 hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account? <Link to="/login" className="text-green-700 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

