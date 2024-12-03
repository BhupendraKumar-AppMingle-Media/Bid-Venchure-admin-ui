
const PreviewBidding = ({ bid, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-2/3 rounded-lg shadow-lg p-6">
        {/* Close Button */}
        <button
          className="text-red-500 text-sm font-semibold mb-4"
          onClick={onClose}
        >
          Close
        </button>

        {/* Top Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Bid Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <strong>User Name:</strong> {bid.userName}
            </p>
            <p>
              <strong>Date/Time:</strong> {bid.dateTime}
            </p>
            <p>
              <strong>Type of Event:</strong> {bid.typeOfEvent}
            </p>
            <p>
              <strong>Bid Amount:</strong> ₹{bid.bidAmount}
            </p>
            <p>
              <strong>Status:</strong> {bid.status}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Restaurant Details</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-sm bg-gray-200">
                <th className="p-4 border">Restaurant Name</th>
                <th className="p-4 border">Description</th>
                <th className="p-4 border">Bid Amount</th>
                <th className="p-4 border">Offer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="p-4 border">{bid.restaurant}</td>
                <td className="p-4 border">High-quality catering services</td>
                <td className="p-4 border">₹{bid.bidAmount}</td>
                <td className="p-4 border">10% discount on large orders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PreviewBidding;
