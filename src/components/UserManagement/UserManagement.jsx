import React, { useState } from "react";
import { FaTrashAlt, FaPowerOff, FaCheckCircle } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";
import { MdPreview } from "react-icons/md";

const UserManagement = () => {
  const navigate = useNavigate();

  // Initial state for users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      contact: "237468372",
      date: "2024-01-01",
      location: "New York",
      gender: "Male",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: "2837472423",
      date: "2024-02-01",
      location: "Los Angeles",
      gender: "Female",
      status: "inactive",
    },
    // Add more users as needed
  ]);

  // Toggle the user's status (active/inactive)
  const handleStatusToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "active" ? "inactive" : "active" }
          : user
      )
    );
  };

  // Navigate to preview page
  const handlePreview = () => {
    navigate("/preview-user-management");
  };

  // Go back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center">User Management</h1>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleBack} className="text-blue-600 hover:text-blue-800">
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-[#e99dad]">
            <th className="p-3 border-b text-left">Name</th>
            <th className="p-3 border-b text-left">Contact</th>
            {/* <th className="p-3 border-b text-left">Registration Date</th> */}
            <th className="p-3 border-b text-left">Location</th>
            <th className="p-3 border-b text-left">Gender</th>
            <th className="p-3 border-b text-left">Status</th>
            <th className="p-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-[#ece0f2]">
              <td className="p-3 border-b">{user.name}</td>
              <td className="p-3 border-b">{user.contact}</td>
              {/* <td className="p-3 border-b">{user.date}</td> */}
              <td className="p-3 border-b">{user.location}</td>
              <td className="p-3 border-b">{user.gender}</td>
              <td className="p-3 border-b">
                <span
                  className={`px-2 py-1 rounded ${
                    user.status === "active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  }`}
                >
                  {user.status === "active" ? "Active" : "Suspended"}
                </span>
              </td>
              <td className="p-3 border-b">
                <div className="flex items-center gap-2">
                  {/* Preview Button */}
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                    onClick={handlePreview}
                  >
                    <MdPreview className="inline-block" />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => alert("Delete user functionality")}
                  >
                    <FaTrashAlt className="inline-block" />
                  </button>

                  {/* Status Toggle Button */}
                  <button
                    className={`px-3 py-1 rounded-md ${
                      user.status === "active" ? "bg-gray-500" : "bg-green-500"
                    } text-white`}
                    onClick={() => handleStatusToggle(user.id)}
                  >
                    {user.status === "active" ? (
                      <>
                        <FaPowerOff className="inline-block" /> Suspend
                      </>
                    ) : (
                      <>
                        <FaCheckCircle className="inline-block mr-2" /> Activate
                      </>
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
