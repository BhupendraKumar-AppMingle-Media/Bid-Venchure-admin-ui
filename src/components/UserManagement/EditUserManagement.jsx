import React, { useState } from 'react';

const EditUserManagement = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [contact, setContact] = useState(user.contact);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, name, contact });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit User Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter user's name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Information</label>
          <input
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter user's email"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserManagement;
