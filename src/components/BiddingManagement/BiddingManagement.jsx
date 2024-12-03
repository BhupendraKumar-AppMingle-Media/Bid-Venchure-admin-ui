import React, { useState } from "react";
import PreviewBidding from "./PreviewBidding";

const BiddingManagement = () => {
  const [bids, setBids] = useState([
    {
      id: 1,
      userName: "John Doe",
      dateTime: "2024-12-03 10:30 AM",
      typeOfEvent: "Birthday Party",
      restaurant: "Tasty Bites",
      bidAmount: 5000,
      status: "Active",
    },
    {
      id: 2,
      userName: "Jane Smith",
      dateTime: "2024-12-02 5:00 PM",
      typeOfEvent: "Wedding Reception",
      restaurant: "Delicious Delights",
      bidAmount: 15000,
      status: "Inactive",
    },
    {
      id: 3,
      userName: "Mark Lee",
      dateTime: "2024-12-01 2:00 PM",
      typeOfEvent: "Corporate Event",
      restaurant: "Food Haven",
      bidAmount: 8000,
      status: "Active",
    },
  ]);

  const [selectedBid, setSelectedBid] = useState(null);

  // Handle bid removal
  const handleDeleteBid = (id) => {
    setBids(bids.filter((bid) => bid.id !== id));
  };

  // Handle preview action
  const handlePreview = (bid) => {
    setSelectedBid(bid);
  };

  // Close the preview modal
  const closePreview = () => {
    setSelectedBid(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4">Bidding Management</h1>
      <p className="text-sm text-center text-gray-500 mb-6">
        Manage and analyze bids placed by restaurants.
      </p>

      {/* Bids Table */}
      <div className="bg-white shadow rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-sm bg-[#e99dad]">
              <th className="p-4 border">User Name</th>
              <th className="p-4 border">Date/Time</th>
              <th className="p-4 border">Type of Event</th>
              <th className="p-4 border">Bid Amount</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="text-sm hover:bg-[#ece0f2]">
                <td className="p-4 border">{bid.userName}</td>
                <td className="p-4 border">{bid.dateTime}</td>
                <td className="p-4 border">{bid.typeOfEvent}</td>
                <td className="p-4 border">₹{bid.bidAmount}</td>
                <td className="p-4 border">
                  <span
                    className={`px-2 py-1 rounded ${
                      bid.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {bid.status}
                  </span>
                </td>
                <td className="p-4 border flex gap-2">
                  <button
                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handlePreview(bid)}
                  >
                    Preview
                  </button>
                  <button
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDeleteBid(bid.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Preview Modal */}
      {selectedBid && (
        <PreviewBidding bid={selectedBid} onClose={closePreview} />
        
      )}
    </div>
  );
};

export default BiddingManagement;
