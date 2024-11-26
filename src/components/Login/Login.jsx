import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import loginimage from "../../assets/loginimage.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

// login api:-> https://rushbasket-e-commerce-backend.onrender.com/api/v1/login
// {
//   "email":"admin@gmail.com",
//   "password":"admin123"
//  }
  const validUsername = "admin";
  const validPassword = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      // Set user as logged in (could be via context, Redux, or local storage)
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard"); // Navigate to the dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Image/Illustration */}
        <div className="flex justify-center mb-5">
          <img
            src={loginimage}
            alt="Login Illustration"
            className="w-32 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
