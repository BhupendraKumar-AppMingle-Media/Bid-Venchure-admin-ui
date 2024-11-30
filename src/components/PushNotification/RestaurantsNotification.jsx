import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantsNotification = () => {
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: "Restaurant Opening", message: "Our new restaurant is now open!" },
    { id: 2, title: "Special Discount", message: "Enjoy a 20% discount on your next visit!" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6"> Restaurant Notifications</h1>
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-md mb-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        {/* Add Notification Button */}
        <button
          onClick={() => navigate("/add-restaurant-notification")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          + Add Restaurant Notification
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className=" text-left  bg-[#e99dad]">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id} className="hover:bg-[#ece0f2]">
                <td className="px-4 py-2 border">{notification.title}</td>
                <td className="px-4 py-2 border">{notification.message}</td>
                <td className="px-4 py-2 border">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigate(`/edit-restaurant-notification/${notification.id}`)}
                      className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantsNotification;
