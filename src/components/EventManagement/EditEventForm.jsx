import React, { useState } from 'react';

const EditEventForm = ({ event, updateEvent, cancelEdit }) => {
  const [type, setType] = useState(event.type);
  const [description, setDescription] = useState(event.description);
  const [image, setImage] = useState(event.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEvent({ ...event, type, description, image });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Edit Event</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Event Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={cancelEdit}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditEventForm;
