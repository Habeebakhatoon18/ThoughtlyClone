

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    
    try {
      const response = await fetch("https://mockapi.io/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");
      alert("Login successful");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-center text-3xl font-bold text-gray-900">thoughtly</h1>
        <h2 className="text-center text-xl font-semibold mt-4">Log In</h2>
        <p className="text-center text-gray-600 mb-6">Log in to Thoughtly.</p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 hover:border-green-700"
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
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 hover:border-green-700"
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
          <div className="text-right">
            <a href="#" className="text-sm text-green-700 hover:underline">
              Forgot Your Password?
            </a>
          </div>
          <button type="submit" className="w-full bg-green-800 text-white p-2 rounded-md hover:bg-green-900">
            Log In
          </button>
          <button className="w-full mt-3 bg-gray-200 text-black p-2 rounded-md hover:bg-gray-300">
            Login with Your Tenant
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          By creating an account, you agree to our <a href="#" className="text-green-700 hover:underline">Terms of Service</a> and <a href="#" className="text-green-700 hover:underline">Privacy Policy</a>.
        </p>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/signup" className="text-green-700 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
