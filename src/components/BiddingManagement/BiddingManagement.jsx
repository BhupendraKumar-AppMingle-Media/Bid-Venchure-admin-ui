import React, { useState } from "react";

const BiddingManagement = () => {
  const [bids, setBids] = useState([
    {
      id: 1,
      restaurant: "Tasty Bites",
      event: "Birthday Party",
      bidAmount: 5000,
      status: "Pending",
      flagged: false,
    },
    {
      id: 2,
      restaurant: "Delicious Delights",
      event: "Wedding Reception",
      bidAmount: 15000,
      status: "Accepted",
      flagged: true,
    },
    {
      id: 3,
      restaurant: "Food Haven",
      event: "Corporate Event",
      bidAmount: 8000,
      status: "Rejected",
      flagged: false,
    },
    {
      id: 3,
      restaurant: "Food Haven",
      event: "Corporate Event",
      bidAmount: 8000,
      status: "Accepted",
      flagged: true,  //then remove wale aayege flag true hoga then
    },
  ]);

  const [analytics, setAnalytics] = useState({
    averageBidAmount: 9333,
    topRestaurant: "Delicious Delights",
    mostBids: "Wedding Reception",
  });

  const handleRemoveBid = (id) => {
    setBids(bids.filter((bid) => bid.id !== id));
  };

  const handleNotifyRestaurant = (restaurant) => {
    alert(`Notification sent to ${restaurant} for corrections.`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        {/* <h1 className="text-2xl font-bold text-gray-800">Bidding Management</h1> */}
        <h1 className="text-4xl font-bold text-center ">
        Bidding Management
        </h1>
        <p className="text-sm  text-center text-gray-500">Manage and analyze bids placed by restaurants.</p>
      </div>

      {/* Analytics Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Average Bid Amount</h2>
          <p className="text-2xl font-bold text-orange-500">₹{analytics.averageBidAmount}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Top Restaurant</h2>
          <p className="text-xl font-bold text-green-500">{analytics.topRestaurant}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Most Bids</h2>
          <p className="text-xl font-bold text-blue-500">{analytics.mostBids}</p>
        </div>
      </div> */}

      {/* Bids Table */}
      <div className="bg-white shadow rounded-lg">
        {/* <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">All Bids</h2>
        </div> */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className=" text-left text-sm bg-[#e99dad]">
              <th className="p-4 border">Restaurant</th>
              <th className="p-4 border">Event</th>
              <th className="p-4 border">Bid Amount</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="text-sm hover:bg-[#ece0f2]">
                <td className="p-4 border">{bid.restaurant}</td>
                <td className="p-4 border">{bid.event}</td>
                <td className="p-4 border">₹{bid.bidAmount}</td>
                <td className="p-4 border">
                  <span
                    className={`px-2 py-1 rounded ${
                      bid.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : bid.status === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {bid.status}
                  </span>
                </td>
                <td className="p-4 border flex gap-2">
                  {bid.flagged && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => handleRemoveBid(bid.id)}
                    >
                      Remove
                    </button>
                  )}
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handleNotifyRestaurant(bid.restaurant)}
                  >
                    Notify
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

export default BiddingManagement;
