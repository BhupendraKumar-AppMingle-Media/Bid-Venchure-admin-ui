import React, { useState } from "react";

const ViewNotifications = () => {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      recipientType: "Users",
      title: "Event Reminder",
      message: "Don't forget to attend your upcoming event tomorrow.",
      date: "2024-11-25",
    },
    {
      id: 2,
      recipientType: "Restaurants",
      title: "New Event Lead",
      message: "A new event lead is available for bidding.",
      date: "2024-11-24",
    },
    {
      id: 3,
      recipientType: "Users",
      title: "Special Promotion",
      message: "Check out our latest promotional offers!",
      date: "2024-11-23",
    },
  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredNotifications = notifications.filter(
    (notification) =>
      notification.title.toLowerCase().includes(search.toLowerCase()) ||
      notification.message.toLowerCase().includes(search.toLowerCase()) ||
      notification.recipientType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">View Notifications</h1>
        <p className="text-sm text-gray-500">
          Browse all notifications sent to users and restaurants.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search notifications by title, recipient, or message..."
          value={search}
          onChange={handleSearch}
          className="w-full p-3 border rounded-lg text-sm focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Notifications Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Recipient
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Message
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <tr
                  key={notification.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {notification.recipientType}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {notification.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {notification.message}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {notification.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No notifications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewNotifications;
