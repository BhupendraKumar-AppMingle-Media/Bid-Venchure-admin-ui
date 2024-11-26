import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      restaurant: "Tasty Bites",
      event: "Birthday Party",
      review: "The food was excellent, and the staff was very friendly!",
      rating: 5,
      status: "Pending",
      isHighlighted: false,
    },
    {
      id: 2,
      user: "Jane Smith",
      restaurant: "Food Haven",
      event: "Wedding Reception",
      review: "Great ambiance but the service was a bit slow.",
      rating: 4,
      status: "Approved",
      isHighlighted: true,
    },
    {
      id: 3,
      user: "Mark Lee",
      restaurant: "Spice Delight",
      event: "Corporate Dinner",
      review: "Terrible experience. The food was cold, and the staff was rude.",
      rating: 2,
      status: "Flagged",
      isHighlighted: false,
    },
  ]);

  const handleApprove = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, status: "Approved" } : review
      )
    );
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleHighlight = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, isHighlighted: !review.isHighlighted } : review
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reviews Moderation</h1>
        <p className="text-sm text-gray-500">
          Manage and moderate user reviews for restaurants and events.
        </p>
      </div>

      {/* Reviews Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">All Reviews</h2>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-sm text-gray-600">
              <th className="p-4 border">User</th>
              <th className="p-4 border">Restaurant</th>
              <th className="p-4 border">Event</th>
              <th className="p-4 border">Review</th>
              <th className="p-4 border">Rating</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="text-sm text-gray-700">
                <td className="p-4 border">{review.user}</td>
                <td className="p-4 border">{review.restaurant}</td>
                <td className="p-4 border">{review.event}</td>
                <td className="p-4 border">{review.review}</td>
                <td className="p-4 border">
                  <span className="text-yellow-500 font-semibold">{review.rating}</span> / 5
                </td>
                <td className="p-4 border">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      review.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : review.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {review.status}
                  </span>
                </td>
                <td className="p-4 border flex flex-wrap gap-2">
                  {review.status === "Pending" && (
                    <button
                      className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                      onClick={() => handleApprove(review.id)}
                    >
                      Approve
                    </button>
                  )}
                  <button
                    className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`px-3 py-1 text-sm text-white rounded ${
                      review.isHighlighted
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-500 hover:bg-gray-600"
                    }`}
                    onClick={() => handleHighlight(review.id)}
                  >
                    {review.isHighlighted ? "Unhighlight" : "Highlight"}
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

export default Reviews;
