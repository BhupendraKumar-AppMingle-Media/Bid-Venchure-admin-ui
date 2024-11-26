import React, { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';

const UserManagement = () => {

    let navigate=useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', contact: 'john@example.com', date: '2024-01-01', status: 'active' },
    { id: 2, name: 'Jane Smith', contact: 'jane@example.com', date: '2024-02-01', status: 'inactive' },
    // Add more users as needed
  ]);

  const handleStatusToggle = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user
    ));
  };

  const handleEdit=()=>{
    alert("Click ok for edit user ");
    
      navigate("/edit-user-management");
  }

  const handleBack=()=>{
    navigate("-1");
  }

  return (
    <div className="p-6">
        <h2 className="text-2xl text-centre font-bold mb-4">User Management</h2>
      <div className="flex justify-between items-center mb-4">
        <button  onClick={handleBack}  className="text-blue-600 hover:text-blue-800">
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
      
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Contact Information</th>
            <th className="p-3 border-b">Registration Date</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="p-3 border-b">{user.name}</td>
              <td className="p-3 border-b">{user.contact}</td>
              <td className="p-3 border-b">{user.date}</td>
              <td className="p-3 border-b">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                  onClick={() => alert('Delete user functionality')}
                >
                  Delete
                </button>
                <button
                  className={`px-3 py-1 rounded-md ${user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'} text-white`}
                  onClick={() => handleStatusToggle(user.id)}
                >
                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
