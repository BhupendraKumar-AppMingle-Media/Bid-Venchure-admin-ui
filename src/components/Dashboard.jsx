import React from "react";
import { FaUserAlt, FaUtensils, FaCalendarAlt, FaMoneyBillWave, FaChartBar, FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-text">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">An overview of platform activity and insights.</p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
            <p className="text-gray-500">Active: <span className="font-bold text-green-500">1,234</span></p>
            <p className="text-gray-500">Inactive: <span className="font-bold text-red-500">456</span></p>
          </div>
          <FaUserAlt className="text-3xl text-blue-500" />
        </div>

        {/* Total Restaurants */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Restaurants</h2>
            <p className="text-gray-500">Registered: <span className="font-bold text-blue-500">789</span></p>
            <p className="text-gray-500">Verified: <span className="font-bold text-green-500">600</span></p>
          </div>
          <FaUtensils className="text-3xl text-purple-500" />
        </div>

        {/* Total Events */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Events</h2>
            <p className="text-gray-500">Ongoing: <span className="font-bold text-yellow-500">32</span></p>
            <p className="text-gray-500">Completed: <span className="font-bold text-green-500">120</span></p>
            <p className="text-gray-500">Canceled: <span className="font-bold text-red-500">5</span></p>
          </div>
          <FaCalendarAlt className="text-3xl text-red-500" />
        </div>

        {/* Active Bids */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Active Bids</h2>
            <p className="text-gray-500">Total: <span className="font-bold text-blue-500">75</span></p>
          </div>
          <FaChartBar className="text-3xl text-green-500" />
        </div>

        {/* Revenue Insights */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Revenue Insights</h2>
            <p className="text-gray-500">This Month: <span className="font-bold text-green-500">$25,000</span></p>
            <p className="text-gray-500">Last Month: <span className="font-bold text-blue-500">$20,000</span></p>
          </div>
          <FaMoneyBillWave className="text-3xl text-yellow-500" />
        </div>

        {/* Profile Completion */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Profile Completion</h2>
            <p className="text-gray-500">Completed: <span className="font-bold text-green-500">80%</span></p>
            <p className="text-gray-500">Pending: <span className="font-bold text-red-500">20%</span></p>
          </div>
          <FaChartBar className="text-3xl text-indigo-500" />
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div className="flex items-start">
            <FaBell className="text-red-500 text-2xl mt-1" />
            <p className="ml-4 text-gray-600">
              <span className="font-bold text-red-500">Critical:</span> Please verify pending restaurant profiles.
            </p>
          </div>
          <div className="flex items-start">
            <FaBell className="text-blue-500 text-2xl mt-1" />
            <p className="ml-4 text-gray-600">
              <span className="font-bold text-blue-500">Info:</span> Revenue report for October is now available.
            </p>
          </div>
          <div className="flex items-start">
            <FaBell className="text-green-500 text-2xl mt-1" />
            <p className="ml-4 text-gray-600">
              <span className="font-bold text-green-500">Success:</span> All events for today are running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
