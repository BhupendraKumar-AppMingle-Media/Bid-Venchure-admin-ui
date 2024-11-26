import React, { useState } from "react";
import FormNotification from "./AddNotifications";
import EditFormNotification from "./EditNotifications";

const PushNotifications = () => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    recipientType: "Users",
    title: "Sample Notification Title",
    message: "This is a sample notification message.",
  });

  const toggleEditForm = () => {
    setIsEditFormOpen(!isEditFormOpen);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications and Alerts</h1>
        <p className="text-sm text-gray-500">
          Send notifications to users and restaurants, or manage automated alerts for events.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
          onClick={toggleForm}
        >
          {isFormOpen ? "Close Form" : "Send Notification"}
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700"
          onClick={toggleEditForm}
        >
          {isEditFormOpen ? "Close Edit Form" : "Edit Notification"}
        </button>
      </div>

      {/* Form */}
      {isFormOpen && (
        <div className="bg-white shadow rounded-lg p-6">
          <FormNotification toggleForm={toggleForm} />
        </div>
      )}

      {/* Edit Form */}
      {isEditFormOpen && (
        <div className="bg-white shadow rounded-lg p-6">
          <EditFormNotification
            initialData={currentNotification}
            toggleEditForm={toggleEditForm}
          />
        </div>
      )}
    </div>
  );
};

export default PushNotifications;
