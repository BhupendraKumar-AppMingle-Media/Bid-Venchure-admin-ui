import React, { useState } from 'react';
import AddEventForm from './AddEventForm';
import EditEventForm from './EditEventForm';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false); // State to control form visibility

  // Add Event
  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setIsAddFormOpen(false); // Close the form after adding
  };

  // Delete Event
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Edit Event
  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setEditEvent(eventToEdit);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
    setEditEvent(null);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
       <h1 className="text-4xl font-bold text-center mb-4">Bidding Management</h1>
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Back Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back
        </button>

        {/* Add Event Button */}
        <button
          onClick={() => setIsAddFormOpen(!isAddFormOpen)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Add Event
        </button>
      </div>

      {/* Add or Edit Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editEvent ? (
          <EditEventForm
            event={editEvent}
            updateEvent={updateEvent}
            cancelEdit={() => setEditEvent(null)}
          />
        ) : (
          isAddFormOpen && <AddEventForm addEvent={addEvent} />
        )}
      </div>

      {/* Events Table */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Event List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Event Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{event.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{event.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={event.image}
                      alt="Event"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                      onClick={() => handleEdit(event.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
