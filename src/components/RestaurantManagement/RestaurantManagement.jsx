import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantManagement = () => {
  
  const navigate = useNavigate();

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
    },
  ]);

  // Handle "Active" status
  const handleActive = (id) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, status: "Active" } : restaurant
      )
    );
  };

  // Handle "Suspend" status
  const handleSuspend = (id) => {
    setRestaurants(
      restaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, status: "Suspended" } : restaurant
      )
    );
  };

  // Handle "Delete" action
  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  // Handle "Preview" action (replace with navigation or modal)
  const handlePreview = (id) => {
    // alert(`Previewing restaurant with ID: ${id}`);
    navigate("/preview-restaurant-Management");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Restaurant Management</h1>
        <p className="text-sm text-gray-600">
          Manage and analyze restaurant registrations and profiles.
        </p>
      </div>

      {/* Restaurants Table */}
      <div className="bg-white shadow rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-sm bg-gray-200">
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Location</th>
              <th className="p-4 border">Cuisines</th>
              <th className="p-4 border">Total Events</th>
              <th className="p-4 border">Rating</th>
              <th className="p-4 border">Profile %</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id} className="text-sm hover:bg-gray-100">
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
                <td className="p-4 border flex gap-2">
                  {/* Active Button */}
                  {restaurant.status !== "Active" && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                      onClick={() => handleActive(restaurant.id)}
                    >
                      Active
                    </button>
                  )}

                  {/* Suspend Button */}
                  {restaurant.status !== "Suspended" && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      onClick={() => handleSuspend(restaurant.id)}
                    >
                      Suspend
                    </button>
                  )}

                  {/* Delete Button */}
                  <button
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDelete(restaurant.id)}
                  >
                    Delete
                  </button>

                  {/* Preview Button */}
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handlePreview(restaurant.id)}
                  >
                    Details
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
