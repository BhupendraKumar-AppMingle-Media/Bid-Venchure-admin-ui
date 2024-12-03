import React, { useState } from "react";

// Sample events for demonstration
const sampleEvents = [
  {
    id: 1,
    type: "Wedding",
    date: "2024-12-20",
    time: "18:00",
    guestDetails: { adults: 100, kids: 10 },
    budget: 50000,
    status: "active",
    specialNotes: "Requires vegetarian options.",
  },
  {
    id: 2,
    type: "Birthday Party",
    date: "2024-11-30",
    time: "14:00",
    guestDetails: { adults: 50, kids: 20 },
    budget: 20000,
    status: "pending",
    specialNotes: "Outdoor event, needs tent.",
  },
];

function EventManagement() {
  const [events, setEvents] = useState(sampleEvents);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    type: "Birthday Party",
    customType: "",
    date: "",
    time: "",
    guestDetails: { adults: "", kids: "" },
    budget: "",
    preference: "veg",
    specialNotes: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "adults" || name === "kids") {
      setNewEvent((prev) => ({
        ...prev,
        guestDetails: { ...prev.guestDetails, [name]: value },
      }));
    } else {
      setNewEvent((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle adding a new event
  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventToAdd = {
      ...newEvent,
      type: newEvent.type === "Other" ? newEvent.customType : newEvent.type,
      id: events.length + 1,
      status: "pending",
    };
    setEvents([...events, eventToAdd]);
    setShowForm(false);
    resetForm();
  };

  // Handle delete event
  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  // Handle edit event
  const handleEditEvent = (event) => {
    setIsEditing(true);
    setEditingEvent(event);
    setNewEvent(event);
    setShowForm(true);
  };

  // Handle update event
  const handleUpdateEvent = (e) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === editingEvent.id
          ? { ...editingEvent, ...newEvent }
          : event
      )
    );
    setIsEditing(false);
    setShowForm(false);
    resetForm();
  };

  // Handle status update
  const handleStatusChange = (id, status) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, status } : event
      )
    );
  };

  // Reset form state
  const resetForm = () => {
    setNewEvent({
      type: "Birthday Party",
      customType: "",
      date: "",
      time: "",
      guestDetails: { adults: "", kids: "" },
      budget: "",
      preference: "veg",
      specialNotes: "",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl mb-4 font-bold text-center">Event Management</h1>

      {/* Add/Edit Event Button */}
      <div className="mb-6">
        <button
          onClick={() => {
            setShowForm((prev) => !prev);
            setIsEditing(false);
            resetForm();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          {showForm ? "Close Form" : isEditing ? "Edit Event" : "Add Event"}
        </button>
      </div>

      {/* Add/Edit Event Form */}
      {showForm && (
        <form
          onSubmit={isEditing ? handleUpdateEvent : handleAddEvent}
          className="mb-6 bg-gray-100 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-4">
            {isEditing ? "Edit Event" : "Add Event"}
          </h2>

          <div className="mb-4">
            <label className="block font-medium mb-2">Event Type</label>
            <select
              name="type"
              value={newEvent.type}
              onChange={handleInputChange}
              className="border px-3 py-2 rounded w-full"
            >
              <option>Birthday Party</option>
              <option>Wedding</option>
              <option>Anniversary</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </div>

          {/* Conditionally render the custom input for "Other" */}
          {newEvent.type === "Other" && (
            <div className="mb-4">
              <label className="block font-medium mb-2">Custom Event Name</label>
              <input
                type="text"
                name="customType"
                value={newEvent.customType}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
                placeholder="Enter custom event name"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block font-medium mb-2">Additional Details</label>
            <textarea
              name="specialNotes"
              value={newEvent.specialNotes}
              onChange={handleInputChange}
              className="border px-3 py-2 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded shadow"
          >
            {isEditing ? "Update Event" : "Submit"}
          </button>
        </form>
      )}

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="text-left bg-[#e99dad]">
              <th className="px-6 py-2 border-b">Event Type</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Special Notes</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-[#ece0f2]">
                <td className="px-4 py-2 border-b">{event.type}</td>
                <td className="px-4 py-2 border-b">
                  <select
                    value={event.status}
                    onChange={(e) =>
                      handleStatusChange(event.id, e.target.value)
                    }
                    className="border px-2 py-1 rounded"
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td className="px-4 py-2 border-b">{event.specialNotes}</td>

                <td className="px-4 py-2 border-b flex gap-2">
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="bg-red-500 text-white text-sm px-2 py-1 rounded"
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
  );
}

export default EventManagement;
