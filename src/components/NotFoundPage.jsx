import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Adjust the path to your dashboard or home route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {/* <img
        src="https://via.placeholder.com/300x200?text=Grocery+Not+Found" // Replace with a grocery-themed image URL
        alt="404 Not Found"
        className="w-64 mb-6"
      /> */}
      <h1 className="text-4xl font-bold text-orange-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
