import React, { useState } from "react";

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
    bids: [
      { id: 1, restaurant: "Restaurant A", status: "pending" },
      { id: 2, restaurant: "Restaurant B", status: "approved" },
    ],
  },
  {
    id: 2,
    type: "Birthday",
    date: "2024-11-30",
    time: "14:00",
    guestDetails: { adults: 50, kids: 20 },
    budget: 20000,
    status: "pending",
    specialNotes: "Outdoor event, needs tent.",
    bids: [{ id: 3, restaurant: "Restaurant C", status: "pending" }],
  },
];

function EventManagement() {
  const [events, setEvents] = useState(sampleEvents);

  const handleEventAction = (eventId, action) => {
    const updatedEvents = events.map((event) =>
      event.id === eventId
        ? { ...event, status: action === "approve" ? "active" : "rejected" }
        : event
    );
    setEvents(updatedEvents);
  };

  const handleEditEvent = (eventId, updatedData) => {
    const updatedEvents = events.map((event) =>
      event.id === eventId ? { ...event, ...updatedData } : event
    );
    setEvents(updatedEvents);
  };

  const handleAssignRestaurant = (eventId, restaurant) => {
    const updatedEvents = events.map((event) =>
      event.id === eventId
        ? {
            ...event,
            bids: [
              ...event.bids,
              { id: event.bids.length + 1, restaurant, status: "pending" },
            ],
          }
        : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="container mx-auto p-6">
      {/* <h2 className="text-3xl font-bold mb-6">Event Management</h2> */}
      <h1 className="text-4xl mb-4 font-bold text-center ">
      Event Management
        </h1>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className=" text-left bg-[#e99dad]">
              <th className="px-6 py-2 border-b">Event Type</th>
              <th className="px-4 py-2 border-b">Date & Time</th>
              <th className="px-4 py-2 border-b">Guests</th>
              <th className="px-4 py-2 border-b">Budget</th>
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
                  {event.date} at {event.time}
                </td>
                <td className="px-4 py-2 border-b">
                  {event.guestDetails.adults} Adults, {event.guestDetails.kids} Kids
                </td>
                <td className="px-4 py-2 border-b">${event.budget}</td>
                <td className="px-4 py-2 border-b">{event.status}</td>
                <td className="px-4 py-2 border-b">{event.specialNotes}</td>
                <td className="px-4 py-2 border-b">
                  <div className="flex flex-wrap gap-x-2">
                    <button
                      onClick={() => handleEventAction(event.id, "approve")}
                      className="bg-green-500 text-white text-sm px-2 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleEventAction(event.id, "reject")}
                      className="bg-red-500 text-white text-sm px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleEditEvent(event.id, { status: "postponed" })}
                      className="bg-yellow-500 text-white text-sm px-2 py-1 rounded"
                    >
                      Postpone
                    </button>
                    <button
                      onClick={() => handleAssignRestaurant(event.id, "Restaurant D")}
                      className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                    >
                      Assign
                    </button>
                  </div>
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
