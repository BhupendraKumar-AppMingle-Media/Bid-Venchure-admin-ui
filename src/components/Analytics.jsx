import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


const Analytics = () => {
  // Dummy Data for Charts
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 13000, 17000, 20000, 18000],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const topRestaurantsData = {
    labels: ["Restaurant A", "Restaurant B", "Restaurant C", "Restaurant D"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000, 4000, 6000],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(251, 146, 60, 0.7)",
          "rgba(244, 63, 94, 0.7)",
        ],
      },
    ],
  };

  const eventTypeData = {
    labels: ["Weddings", "Birthdays", "Conferences", "Other"],
    datasets: [
      {
        label: "Event Types",
        data: [40, 30, 20, 10],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(251, 146, 60, 0.7)",
          "rgba(244, 63, 94, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Earning Report</h1>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600">Monthly Revenue</h2>
          <p className="text-2xl font-bold text-blue-600">₹20,000</p>
          <p className="text-sm text-green-500">↑ 15% from last month</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600">Yearly Revenue</h2>
          <p className="text-2xl font-bold text-blue-600">₹2,40,000</p>
          <p className="text-sm text-green-500">↑ 25% from last year</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600">Avg. Bid Value</h2>
          <p className="text-2xl font-bold text-blue-600">₹5,000</p>
          <p className="text-sm text-green-500">↑ 10% from last month</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600">Active Users</h2>
          <p className="text-2xl font-bold text-blue-600">1,200</p>
          <p className="text-sm text-green-500">↑ 8% from last month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trends Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600 mb-2">
            Monthly Revenue Trends
          </h2>
          <Line data={revenueData} />
        </div>

        {/* Top Restaurants Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600 mb-2">
            Top Performing Restaurants
          </h2>
          <Bar data={topRestaurantsData} />
        </div>

        {/* Event Type Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-600 mb-2">
            Top Event Types
          </h2>
          <Doughnut data={eventTypeData} />
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-lg font-medium text-gray-600 mb-4">Detailed Report</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-gray-600">Restaurant</th>
                <th className="p-2 text-gray-600">Event Type</th>
                <th className="p-2 text-gray-600">Bid Value</th>
                <th className="p-2 text-gray-600">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Restaurant A</td>
                <td className="p-2">Wedding</td>
                <td className="p-2">₹10,000</td>
                <td className="p-2">₹50,000</td>
              </tr>
              <tr>
                <td className="p-2">Restaurant B</td>
                <td className="p-2">Birthday</td>
                <td className="p-2">₹7,000</td>
                <td className="p-2">₹35,000</td>
              </tr>
              <tr>
                <td className="p-2">Restaurant C</td>
                <td className="p-2">Conference</td>
                <td className="p-2">₹5,000</td>
                <td className="p-2">₹25,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
