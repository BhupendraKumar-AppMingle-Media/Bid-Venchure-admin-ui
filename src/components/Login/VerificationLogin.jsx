
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import otplogin from '../../assets/otpimage.png'

const VerificationLogin = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle OTP verification
  const handleVerify = () => {
    // Logic to verify OTP can be added here
    if (otp.length === 4) {
      console.log('OTP entered:', otp);
      // Redirect after verification (add your desired path)
      // navigate('/dashboard');
    } else {
      alert('Please enter the 4-digit OTP code.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Image/Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src={otplogin}
            alt="OTP Verification Illustration"
            className="w-52 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Phone Verification</h2>
        <p className="text-center text-gray-600 mb-6">Enter your OTP code</p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-2 mb-4">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
            onChange={(e) => setOtp(otp.slice(0, 3) + e.target.value)}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
            onChange={(e) => setOtp(otp.slice(0, 1) + e.target.value + otp.slice(2))}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
            onChange={(e) => setOtp(otp.slice(0, 2) + e.target.value + otp.slice(3))}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
            onChange={(e) => setOtp(otp.slice(0, 3) + e.target.value)}
          />
        </div>

        {/* Resend Code */}
        <div className="text-center text-gray-500 mb-6">
          <p>Didn’t receive Code? <a href="#" className="text-blue-600">Resend again</a></p>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerificationLogin;

