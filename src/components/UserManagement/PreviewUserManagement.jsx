import React from "react";
import { useNavigate } from "react-router-dom";

const PreviewUserManagement = () => {
  const navigate = useNavigate();

  // Example user data
  const userDetails = {
    name: "John Doe",
    contact: "237468372",
    registrationDate: "2024-01-01",
    location: "New York",
    gender: "Male",
    status: "Active",
  };

  // Example restaurant booking data
  const restaurantBookings = [
    {
      id: 1,
      name: "The Grand Feast",
      dateTime: "2024-12-01 7:00 PM",
      eventType: "Birthday Party",
      amount: "$500",
      location: "Downtown, NY",
      noOfGuests: 25,
    },
    {
      id: 2,
      name: "Golden Dragon",
      dateTime: "2024-11-15 8:30 PM",
      eventType: "Anniversary",
      amount: "$350",
      location: "Manhattan, NY",
      noOfGuests: 15,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
        >
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6">User Details</h1>

      {/* User Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-medium">Name:</p>
            <p className="text-gray-800">{userDetails.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Contact:</p>
            <p className="text-gray-800">{userDetails.contact}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Registration Date:</p>
            <p className="text-gray-800">{userDetails.registrationDate}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Location:</p>
            <p className="text-gray-800">{userDetails.location}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Gender:</p>
            <p className="text-gray-800">{userDetails.gender}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Status:</p>
            <p
              className={`p-2 w-14 rounded text-white ${
                userDetails.status === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {userDetails.status}
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Bookings Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Restaurants Booked by User
        </h2>
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300 text-left">Restaurant Name</th>
              <th className="p-3 border border-gray-300 text-left">Date/Time</th>
              <th className="p-3 border border-gray-300 text-left">Event Type</th>
              <th className="p-3 border border-gray-300 text-left">Amount</th>
              <th className="p-3 border border-gray-300 text-left">Location</th>
              <th className="p-3 border border-gray-300 text-left">No. of Guests</th>
            </tr>
          </thead>
          <tbody>
            {restaurantBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{booking.name}</td>
                <td className="p-3 border border-gray-300">{booking.dateTime}</td>
                <td className="p-3 border border-gray-300">{booking.eventType}</td>
                <td className="p-3 border border-gray-300">{booking.amount}</td>
                <td className="p-3 border border-gray-300">{booking.location}</td>
                <td className="p-3 border border-gray-300">{booking.noOfGuests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewUserManagement;
