import React from "react";
import { FaUserTie, FaDollarSign, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ReferralManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold ">
          Referral Management
        </h1>
        <p className="text-gray-600 mt-2">Manage referral partners, track progress, and approve/reject restaurants.</p>
      </header>

      {/* Referral Partners Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Referral Partners Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Partner 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-500">Onboarded Restaurants: <span className="font-bold text-green-500">15</span></p>
              <p className="text-gray-500">Earnings: <span className="font-bold text-blue-500">$2,500</span></p>
              <p className="text-gray-500">Incentives: <span className="font-bold text-purple-500">$500</span></p>
            </div>
            <FaUserTie className="text-4xl text-gray-400 self-end mt-4" />
          </div>

          {/* Partner 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-500">Onboarded Restaurants: <span className="font-bold text-green-500">22</span></p>
              <p className="text-gray-500">Earnings: <span className="font-bold text-blue-500">$3,200</span></p>
              <p className="text-gray-500">Incentives: <span className="font-bold text-purple-500">$800</span></p>
            </div>
            <FaUserTie className="text-4xl text-gray-400 self-end mt-4" />
          </div>

          {/* Partner 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emily Carter</h3>
              <p className="text-gray-500">Onboarded Restaurants: <span className="font-bold text-green-500">10</span></p>
              <p className="text-gray-500">Earnings: <span className="font-bold text-blue-500">$1,500</span></p>
              <p className="text-gray-500">Incentives: <span className="font-bold text-purple-500">$300</span></p>
            </div>
            <FaUserTie className="text-4xl text-gray-400 self-end mt-4" />
          </div>
        </div>
      </section>

      {/* Approval Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Approve or Reject Restaurants</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto">
            <thead>
              <tr className=" bg-[#e99dad]">
                <th className="p-3 text-left">Restaurant Name</th>
                <th className="p-3 text-left">Partner Name</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="border-b hover:bg-[#ece0f2]">
                <td className="p-3">Pizza Paradise</td>
                <td className="p-3">John Doe</td>
                <td className="p-3 text-green-500 font-bold">Pending</td>
                <td className="p-3 flex justify-center space-x-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
                    <FaCheckCircle className="mr-2" />
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600">
                    <FaTimesCircle className="mr-2" />
                    Reject
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b hover:bg-[#ece0f2]">
                <td className="p-3">Burger Heaven</td>
                <td className="p-3">Jane Smith</td>
                <td className="p-3 text-green-500 font-bold">Pending</td>
                <td className="p-3 flex justify-center space-x-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
                    <FaCheckCircle className="mr-2" />
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600">
                    <FaTimesCircle className="mr-2" />
                    Reject
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-[#ece0f2]">
                <td className="p-3">Taco Fiesta</td>
                <td className="p-3">Emily Carter</td>
                <td className="p-3 text-green-500 font-bold">Pending</td>
                <td className="p-3 flex justify-center space-x-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600">
                    <FaCheckCircle className="mr-2" />
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600">
                    <FaTimesCircle className="mr-2" />
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ReferralManagement;
