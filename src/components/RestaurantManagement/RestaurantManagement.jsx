import React, { useState } from "react";

const RestaurantManagement = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Tasty Bites",
      location: "New Delhi, India",
      cuisines: ["Indian", "Chinese"],
      eventsHandled: 45,
      rating: 4.5,
      profileCompletion: 90,
      status: "Pending",
      isFeatured: false,
    },
    {
      id: 2,
      name: "Food Haven",
      location: "Mumbai, India",
      cuisines: ["Italian", "Mexican"],
      eventsHandled: 30,
      rating: 4.8,
      profileCompletion: 95,
      status: "Active",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Spice Delight",
      location: "Bangalore, India",
      cuisines: ["South Indian", "Thai"],
      eventsHandled: 20,
      rating: 4.0,
      profileCompletion: 80,
      status: "Suspended",
      isFeatured: false,
    },
  ]);

  const handleApprove = (id) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, status: "Active" } : restaurant
      )
    );
  };

  const handleReject = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const handleSuspend = (id) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, status: "Suspended" } : restaurant
      )
    );
  };

  const handleFeature = (id) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, isFeatured: !restaurant.isFeatured } : restaurant
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Restaurant Management</h1>
        <p className="text-sm text-gray-500">Manage and analyze restaurant registrations and profiles.</p>
      </div>

      {/* Restaurants Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Restaurants</h2>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-sm text-gray-600">
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Location</th>
              <th className="p-4 border">Cuisines</th>
              <th className="p-4 border">Events</th>
              <th className="p-4 border">Rating</th>
              <th className="p-4 border">Profile %</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id} className="text-sm text-gray-700">
                <td className="p-4 border">{restaurant.name}</td>
                <td className="p-4 border">{restaurant.location}</td>
                <td className="p-4 border">{restaurant.cuisines.join(", ")}</td>
                <td className="p-4 border">{restaurant.eventsHandled}</td>
                <td className="p-4 border">
                  <span className="text-yellow-500 font-semibold">{restaurant.rating}</span> / 5
                </td>
                <td className="p-4 border">
                  <div className="relative w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
                      style={{ width: `${restaurant.profileCompletion}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {restaurant.profileCompletion}%
                  </p>
                </td>
                <td className="p-4 border">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      restaurant.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : restaurant.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </td>
                <td className="p-4 border flex flex-wrap gap-2">
                  {restaurant.status === "Pending" && (
                    <>
                      <button
                        className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                        onClick={() => handleApprove(restaurant.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                        onClick={() => handleReject(restaurant.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {restaurant.status === "Active" && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      onClick={() => handleSuspend(restaurant.id)}
                    >
                      Suspend
                    </button>
                  )}
                  <button
                    className={`px-3 py-1 text-sm text-white rounded ${
                      restaurant.isFeatured
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-500 hover:bg-gray-600"
                    }`}
                    onClick={() => handleFeature(restaurant.id)}
                  >
                    {restaurant.isFeatured ? "Remove Badge" : "Add Badge"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantManagement;
