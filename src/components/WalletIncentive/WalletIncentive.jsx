import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaSearch } from "react-icons/fa";

const WalletIncentive = () => {
  const [wallets, setWallets] = useState([
    { id: 1, name: "John Doe", type: "User", balance: 1200, incentive: 300 },
    { id: 2, name: "Jane Smith", type: "Restaurant", balance: 5000, incentive: 700 },
  ]);

  const [referrals, setReferrals] = useState([
    { id: 1, referrer: "John Doe", referred: "User A", status: "Pending" },
    { id: 2, referrer: "Jane Smith", referred: "Restaurant B", status: "Approved" },
  ]);

  const [transactions, setTransactions] = useState([
    { id: 1, user: "John Doe", amount: 300, date: "2024-11-01", status: "Completed" },
    { id: 2, user: "Jane Smith", amount: 500, date: "2024-11-02", status: "Pending" },
  ]);

  const handleApproveReferral = (id) => {
    setReferrals(
      referrals.map((ref) =>
        ref.id === id ? { ...ref, status: "Approved" } : ref
      )
    );
  };

  const handleRejectReferral = (id) => {
    setReferrals(
      referrals.map((ref) =>
        ref.id === id ? { ...ref, status: "Rejected" } : ref
      )
    );
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center">
        Wallet and Incentive Management
      </h1>

      {/* Wallet Tracking Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Wallet Tracking</h2>
          <div className="relative w-1/3">
            <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search wallets..."
              className="w-full p-2 pl-8 border rounded-md"
            />
          </div>
        </div>

        <table className="min-w-full border rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[#e99dad]">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Balance</th>
              <th className="p-4 text-left">Incentive Balance</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr key={wallet.id} className="border-b hover:bg-[#ece0f2]">
                <td className="p-4">{wallet.name}</td>
                <td className="p-4">{wallet.type}</td>
                <td className="p-4">${wallet.balance}</td>
                <td className="p-4">${wallet.incentive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Referral Incentives Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Incentives for Referrals</h2>

        <table className="min-w-full border rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[#e99dad]">
              <th className="p-4 text-left">Referrer</th>
              <th className="p-4 text-left">Referred User</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((referral) => (
              <tr key={referral.id} className="border-b hover:bg-[#ece0f2]">
                <td className="p-4">{referral.referrer}</td>
                <td className="p-4">{referral.referred}</td>
                <td
                  className={`p-4 ${
                    referral.status === "Approved"
                      ? "text-green-500"
                      : referral.status === "Rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {referral.status}
                </td>
                <td className="p-4 flex gap-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    onClick={() => handleApproveReferral(referral.id)}
                    disabled={referral.status !== "Pending"}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    onClick={() => handleRejectReferral(referral.id)}
                    disabled={referral.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Tracking Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Tracking</h2>

        <table className="min-w-full border rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[#e99dad]">
              <th className="p-4 text-left">User</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-[#ece0f2]">
                <td className="p-4">{transaction.user}</td>
                <td className="p-4">${transaction.amount}</td>
                <td className="p-4">{transaction.date}</td>
                <td
                  className={`p-4 ${
                    transaction.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletIncentive;
