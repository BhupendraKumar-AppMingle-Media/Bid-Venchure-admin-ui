import React, { useState } from "react";

const PreviewRestaurantManagement = () => {
  const [uploadedImages, setUploadedImages] = useState([
    "/images/dining.jpg",
    "/images/event.jpg",
    "/images/cover.jpg",
  ]);
  const [uploadedImagesMenu, setUploadedImagesMenu] = useState([
    "/images/dining.jpg",
    "/images/event.jpg",
    "/images/cover.jpg",
  ]);
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  );

  // Example restaurant data
  const restaurantDetails = {
    name: "Tasty Bites",
    owner: "John Doe",
    contact: "+91 9876543210",
    location: "New Delhi, India",
    cuisines: ["Indian", "Chinese"],
    eventsHandled: 45,
    seatingCapacity: "200+",
    amenities: ["Parking", "Wi-Fi", "Air Conditioning"],
    rating: 4.5,
    profileCompletion: 90,
    status: "Active",
    budgetPerPerson: "$20",
    packages: [
      {
        name: "Birthday Special",
        inclusions: ["Decor", "Catering", "Music"],
        price: "$500",
      },
      {
        name: "Wedding Bliss",
        inclusions: ["Venue Decor", "Catering", "DJ"],
        price: "$2000",
      },
    ],
    kyc: {
      gstNumber: "29ABCDE1234F1Z5",
      bankDetails: {
        accountNumber: "1234567890",
        ifsc: "SBIN0001234",
        bankName: "State Bank of India",
      },
    },
  };

  // Example event history data
  const eventHistory = [
    {
      id: 1,
      userName: "John Doe",
      eventType: "Birthday Party",
      dateTime: "2024-12-10 7:00 PM",
      noOfGuests: 50,
      budget: "$500",
      rating: 4.8,
      status: "Completed",
      specialNotes: "Extra decoration required",
    },
    {
      id: 2,
      userName: "Jane Smith",
      eventType: "Corporate Dinner",
      dateTime: "2024-11-20 8:00 PM",
      noOfGuests: 30,
      budget: "$750",
      rating: 3.5,
      status: "Cancelled",
      specialNotes: "Client canceled last minute",
    },
    {
      id: 3,
      userName: "Michael Johnson",
      eventType: "Wedding Reception",
      dateTime: "2024-10-15 6:30 PM",
      noOfGuests: 100,
      budget: "$2000",
      rating: 4.9,
      status: "Ongoing",
      specialNotes: "Ensure premium service",
    },
  ];

  // Example bidding history data
  const biddingHistory = [
    {
      id: 1,
      userName: "Alice Brown",
      eventType: "Anniversary Party",
      noOfGuests: 40,
      bidByUser: "$600",
      bidByRestaurant: "$550",
      bidStatus: "Accepted",
    },
    {
      id: 2,
      userName: "David Wilson",
      eventType: "Corporate Meeting",
      noOfGuests: 20,
      bidByUser: "$1000",
      bidByRestaurant: "$950",
      bidStatus: "Declined",
    },
    {
      id: 3,
      userName: "Emma Davis",
      eventType: "Baby Shower",
      noOfGuests: 30,
      bidByUser: "$700",
      bidByRestaurant: "$700",
      bidStatus: "Completed",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => window.history.back()}
      >
        Back
      </button>

      {/* Restaurant Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Resturent Basic Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-medium">Name:</p>
            <p className="text-gray-800">{restaurantDetails.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Owner:</p>
            <p className="text-gray-800">{restaurantDetails.owner}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Contact:</p>
            <p className="text-gray-800">{restaurantDetails.contact}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Location:</p>
            <p className="text-gray-800">{restaurantDetails.location}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Cuisines:</p>
            <p className="text-gray-800">
              {restaurantDetails.cuisines.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Seating Capacity:</p>
            <p className="text-gray-800">{restaurantDetails.seatingCapacity}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Amenities:</p>
            <p className="text-gray-800">
              {restaurantDetails.amenities.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Event Types Supported </p>
            <p className="text-gray-800"> Birthday, Wedding, Corporate</p>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Media</h2>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">Images:</p>
          <div className="flex overflow-x-auto space-x-4">
            {uploadedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Uploaded ${index + 1}`}
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-600 font-medium">Promotional Video:</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.open(videoLink, "_blank")}
          >
            Watch Video
          </button>
        </div>
      </div>

      {/* Pricing and Packages */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Pricing and Packages
        </h2>
        <div>
          <p className="text-gray-600 font-medium">
            Starting Budget (Per Person):
          </p>
          <p className="text-gray-800">{restaurantDetails.budgetPerPerson}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Packages:</p>
          <ul className="mt-2 space-y-2">
            {restaurantDetails.packages.map((pkg, index) => (
              <li
                key={index}
                className="p-4 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md"
              >
                <p className="text-gray-800 font-semibold">{pkg.name}</p>
                <p className="text-gray-600 text-sm">
                  Inclusions: {pkg.inclusions.join(", ")}
                </p>
                <p className="text-gray-800 mt-1">Price: {pkg.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* KYC Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">KYC</h2>
        <div>
          <p className="text-gray-600 font-medium">GST Number:</p>
          <p className="text-gray-800">{restaurantDetails.kyc.gstNumber}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Bank Details:</p>
          <p className="text-gray-800">
            Account Number: {restaurantDetails.kyc.bankDetails.accountNumber}
          </p>
          <p className="text-gray-800">
            IFSC Code: {restaurantDetails.kyc.bankDetails.ifsc}
          </p>
          <p className="text-gray-800">
            Bank Name: {restaurantDetails.kyc.bankDetails.bankName}
          </p>
        </div>
      </div>
      {/* menu items */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Menu Items Details
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-medium">Dish Name</p>
            <p className="text-gray-800">Butter Chicken,Pizza</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Category</p>
            <p className="text-gray-800">Starters,Main Course,Desserts</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Price (per Dish) </p>
            <p className="text-gray-800">200 Rs</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Description</p>
            <p className="text-gray-800">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              obcaecati repellendus assumenda, illum aliquid eni
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">
              Vegetarian/Non-vegetarian Tag
            </p>
            <p className="text-gray-800">Both</p>
          </div>

          <div className="mb-4">
            <p className="text-gray-600 font-medium">Images:</p>
            <div className="flex overflow-x-auto space-x-4">
              {uploadedImagesMenu.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Uploaded ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* Event History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Event History
        </h2>
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300 text-left">
                User Name
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Event Type
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Date/Time
              </th>
              <th className="p-3 border border-gray-300 text-left">
                No. of Guests
              </th>
              <th className="p-3 border border-gray-300 text-left">Budget</th>
              <th className="p-3 border border-gray-300 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {eventHistory.map((event) => (
              <tr key={event.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{event.userName}</td>
                <td className="p-3 border border-gray-300">
                  {event.eventType}
                </td>
                <td className="p-3 border border-gray-300">{event.dateTime}</td>
                <td className="p-3 border border-gray-300">
                  {event.noOfGuests}
                </td>
                <td className="p-3 border border-gray-300">{event.budget}</td>
                <td className="p-3 border border-gray-300">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      event.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : event.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bidding History Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Bidding History by Restaurants
        </h2>
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-3 border border-gray-300 text-left">
                User Name
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Event Type
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Number of Guests
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Bid By User
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Bid By Restaurant
              </th>
              <th className="p-3 border border-gray-300 text-left">
                Bid Status
              </th>
            </tr>
          </thead>
          <tbody>
            {biddingHistory.map((bid) => (
              <tr key={bid.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{bid.userName}</td>
                <td className="p-3 border border-gray-300">{bid.eventType}</td>
                <td className="p-3 border border-gray-300">{bid.noOfGuests}</td>
                <td className="p-3 border border-gray-300">{bid.bidByUser}</td>
                <td className="p-3 border border-gray-300">
                  {bid.bidByRestaurant}
                </td>
                <td className="p-3 border border-gray-300">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      bid.bidStatus === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : bid.bidStatus === "Completed"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {bid.bidStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewRestaurantManagement;
