import React, { useState } from 'react';

const AddEventForm = ({ addEvent }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ type, description, image });
    setType('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Add Event</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Enter event type"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Enter event description"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Image</label>
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          placeholder="Enter image URL"
          required
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Event
      </button>
    </form>
  );
};

export default AddEventForm;
