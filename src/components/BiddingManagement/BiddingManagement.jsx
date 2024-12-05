import React, { useState } from "react";

const BiddingManagement = () => {
  const [bids] = useState([
    {
      id: 1,
      userName: "John Doe",
      contactInfo: "johndoe@example.com",
      eventType: "Birthday Party",
      noOfGuests: 50,
      budget: 5000,
      allBidRestaurants: [
        { name: "Tasty Bites", offerAmount: 5000 },
        { name: "Delicious Delights", offerAmount: 10000 },
      ],
      participatedRestaurants: [
        { name: "Food Haven", offerAmount: 8000 },
        { name: "Spicy Cravings", offerAmount: 7000 },
      ],
      acceptedByUser: [{ name: "Baked Goodness", offerAmount: 12000 }],
    },
    {
      id: 2,
      userName: "Jane Smith",
      contactInfo: "janesmith@example.com",
      eventType: "Wedding Reception",
      noOfGuests: 100,
      budget: 15000,
      allBidRestaurants: [
        { name: "Spicy Cravings", offerAmount: 7000 },
        { name: "Tasty Bites", offerAmount: 5000 },
      ],
      participatedRestaurants: [
        { name: "Delicious Delights", offerAmount: 10000 },
        { name: "Baked Goodness", offerAmount: 12000 },
      ],
      acceptedByUser: [{ name: "Food Haven", offerAmount: 8000 }],
    },
    {
      id: 3,
      userName: "Mark Lee",
      contactInfo: "marklee@example.com",
      eventType: "Corporate Event",
      noOfGuests: 80,
      budget: 8000,
      allBidRestaurants: [
        { name: "Food Haven", offerAmount: 8000 },
        { name: "Delicious Delights", offerAmount: 10000 },
      ],
      participatedRestaurants: [
        { name: "Tasty Bites", offerAmount: 5000 },
        { name: "Baked Goodness", offerAmount: 12000 },
      ],
      acceptedByUser: [{ name: "Spicy Cravings", offerAmount: 7000 }],
    },
  ]);

  const [popupData, setPopupData] = useState(null); // To store popup data
  const [popupTitle, setPopupTitle] = useState(""); // To store popup title
  const [popupVisible, setPopupVisible] = useState(false); // To control popup visibility

  // Function to open the popup
  const openPopup = (data, title) => {
    setPopupData(data);
    setPopupTitle(title);
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupData(null);
    setPopupTitle("");
    setPopupVisible(false);
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
              <th className="p-4 border">Username</th>
              <th className="p-4 border">Contact Info</th>
              <th className="p-4 border">Event Type</th>
              <th className="p-4 border">No of Guests</th>
              <th className="p-4 border">Budget</th>
              <th className="p-4 border">All Bid Restaurants</th>
              <th className="p-4 border">Participated Restaurants</th>
              <th className="p-4 border">Restaurant Accepted By User</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="text-sm hover:bg-[#ece0f2]">
                <td className="p-4 border">{bid.userName}</td>
                <td className="p-4 border">{bid.contactInfo}</td>
                <td className="p-4 border">{bid.eventType}</td>
                <td className="p-4 border">{bid.noOfGuests}</td>
                <td className="p-4 border">₹{bid.budget}</td>

                {/* All Bid Restaurants */}
                <td className="p-4 border">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      openPopup(bid.allBidRestaurants, "All Bid Restaurants")
                    }
                  >
                    More
                  </button>
                </td>

                {/* Participated Restaurants */}
                <td className="p-4 border">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      openPopup(
                        bid.participatedRestaurants,
                        "Participated Restaurants"
                      )
                    }
                  >
                    More
                  </button>
                </td>

                {/* Restaurant Accepted By User */}
                <td className="p-4 border">
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      openPopup(
                        bid.acceptedByUser,
                        "Restaurant Accepted By User"
                      )
                    }
                  >
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for Data */}
      {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">{popupTitle}</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="p-2 border">Restaurant Name</th>
                  <th className="p-2 border">Offer Amount</th>
                </tr>
              </thead>
              <tbody>
                {popupData &&
                  popupData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-2 border">{item.name}</td>
                      <td className="p-2 border">₹{item.offerAmount}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiddingManagement;
