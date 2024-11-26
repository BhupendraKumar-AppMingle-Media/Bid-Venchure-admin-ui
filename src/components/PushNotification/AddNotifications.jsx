import React, { useState } from "react";

const FormNotification = ({ toggleForm }) => {
  const [notificationData, setNotificationData] = useState({
    recipientType: "Users",
    title: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotificationData({ ...notificationData, [name]: value });
  };

  const handleSendNotification = () => {
    alert(
      `Notification sent to ${notificationData.recipientType}: ${notificationData.title} - ${notificationData.message}`
    );
    setNotificationData({ recipientType: "Users", title: "", message: "" });
    toggleForm(); // Close the form after submission
  };

  return (
    <form className="space-y-4">
      {/* Recipient Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Recipient Type
        </label>
        <select
          name="recipientType"
          value={notificationData.recipientType}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-lg text-sm focus:ring focus:ring-blue-300"
        >
          <option value="Users">Users</option>
          <option value="Restaurants">Restaurants</option>
        </select>
      </div>

      {/* Notification Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notification Title
        </label>
        <input
          type="text"
          name="title"
          value={notificationData.title}
          onChange={handleInputChange}
          placeholder="Enter the title"
          className="w-full p-3 border rounded-lg text-sm focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Notification Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={notificationData.message}
          onChange={handleInputChange}
          rows="4"
          placeholder="Enter your notification message"
          className="w-full p-3 border rounded-lg text-sm focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSendNotification}
        className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
      >
        Send Notification
      </button>
    </form>
  );
};

export default FormNotification;
