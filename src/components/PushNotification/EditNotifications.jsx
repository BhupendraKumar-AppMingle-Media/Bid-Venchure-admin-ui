import React, { useState } from "react";

const EditFormNotification = ({ initialData, toggleEditForm }) => {
  const [editData, setEditData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdateNotification = () => {
    alert(
      `Notification updated for ${editData.recipientType}: ${editData.title} - ${editData.message}`
    );
    toggleEditForm(); // Close the form after updating
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
          value={editData.recipientType}
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
          value={editData.title}
          onChange={handleInputChange}
          placeholder="Enter the updated title"
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
          value={editData.message}
          onChange={handleInputChange}
          rows="4"
          placeholder="Update the notification message"
          className="w-full p-3 border rounded-lg text-sm focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleUpdateNotification}
        className="w-full px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700"
      >
        Update Notification
      </button>
    </form>
  );
};

export default EditFormNotification;
