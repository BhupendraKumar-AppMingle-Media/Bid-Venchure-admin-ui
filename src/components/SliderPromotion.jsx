import React, { useState } from 'react';

const Settings = () => {
  const [image, setImage] = useState(null);
  const [imagesList, setImagesList] = useState([]);
  const [editedImage, setEditedImage] = useState(null);
  const [newImage, setNewImage] = useState(null); // New state for editing the image
  const [link, setLink] = useState(''); // For slider linking
  const [contactNumber, setContactNumber] = useState(''); // For "Call Now" button

  const [eventHighlights, setEventHighlights] = useState([]);
  const [editedHighlight, setEditedHighlight] = useState(null);
  const [newHighlightImage, setNewHighlightImage] = useState(null);

  // Handle main slider image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  // Add image to slider list
  const handleSliderSubmit = () => {
    if (image) {
      setImagesList([
        ...imagesList,
        {
          id: imagesList.length + 1,
          src: image,
          link,
          contactNumber,
        },
      ]);
      setImage(null); // Reset image input
      setLink('');
      setContactNumber('');
    }
  };

  // Edit slider image
  const handleSliderEdit = (id) => {
    const imageToEdit = imagesList.find((img) => img.id === id);
    setEditedImage(imageToEdit);
    setNewImage(imageToEdit.src); // Set the current image to edit
    setLink(imageToEdit.link || ''); // Set existing link
    setContactNumber(imageToEdit.contactNumber || ''); // Set existing contact number
  };

  // Save slider edit
  const handleSaveSliderEdit = () => {
    if (newImage) {
      setImagesList(
        imagesList.map((img) =>
          img.id === editedImage.id
            ? { ...img, src: newImage, link, contactNumber }
            : img
        )
      );
      setEditedImage(null);
      setNewImage(null);
      setLink('');
      setContactNumber('');
    }
  };

  // Delete slider image
  const handleSliderDelete = (id) => {
    setImagesList(imagesList.filter((img) => img.id !== id));
  };

  // Event Highlights: Add new highlight image
  const handleHighlightUpload = (event) => {
    const file = event.target.files[0];
    setNewHighlightImage(URL.createObjectURL(file));
  };

  const handleHighlightSubmit = () => {
    if (newHighlightImage) {
      setEventHighlights([
        ...eventHighlights,
        { id: eventHighlights.length + 1, src: newHighlightImage },
      ]);
      setNewHighlightImage(null); // Reset input
    }
  };

  // Edit highlight image
  const handleHighlightEdit = (id) => {
    const highlightToEdit = eventHighlights.find((highlight) => highlight.id === id);
    setEditedHighlight(highlightToEdit);
    setNewHighlightImage(highlightToEdit.src);
  };

  // Save highlight edit
  const handleSaveHighlightEdit = () => {
    if (newHighlightImage) {
      setEventHighlights(
        eventHighlights.map((highlight) =>
          highlight.id === editedHighlight.id
            ? { ...highlight, src: newHighlightImage }
            : highlight
        )
      );
      setEditedHighlight(null);
      setNewHighlightImage(null);
    }
  };

  // Delete highlight image
  const handleHighlightDelete = (id) => {
    setEventHighlights(eventHighlights.filter((highlight) => highlight.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Slider Management */}
      <h1 className="text-4xl font-bold text-center ">
        Slider Management
      </h1>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {image && (
          <div className="mt-4">
            <img src={image} alt="Preview" className="w-32 h-32 object-cover mb-2" />
            <input
              type="text"
              placeholder="Link (Optional)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Contact Number (Optional)"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
            />
            <button
              onClick={handleSliderSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table className="min-w-full table-auto">
          <thead className="bg-[#e99dad]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Link</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Contact</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {imagesList.map((img) => (
              <tr key={img.id} className="border-t">
                <td className="px-6 py-4">
                  <img src={img.src} alt="Slider Image" className="w-32 h-32 object-cover" />
                </td>
                <td className="px-6 py-4">{img.link || 'N/A'}</td>
                <td className="px-6 py-4">{img.contactNumber || 'N/A'}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleSliderEdit(img.id)}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleSliderDelete(img.id)}
                    className="mr-2 text-red-500"
                  >
                    Delete
                  </button>
                  <button className="text-green-500" onClick={() => alert('Submitted')}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Event Highlights Management */}
      <h1 className="text-4xl font-bold text-center ">
        Event Highlights
      </h1>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Upload Event Highlight Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleHighlightUpload}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {newHighlightImage && (
          <div className="mt-4">
            <img
              src={newHighlightImage}
              alt="Event Highlight Preview"
              className="w-32 h-32 object-cover"
            />
            <button
              onClick={handleHighlightSubmit}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#e99dad]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {eventHighlights.map((highlight) => (
              <tr key={highlight.id} className="border-t">
                <td className="px-6 py-4">
                  <img
                    src={highlight.src}
                    alt="Event Highlight Image"
                    className="w-32 h-32 object-cover"
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleHighlightEdit(highlight.id)}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleHighlightDelete(highlight.id)}
                    className="mr-2 text-red-500"
                  >
                    Delete
                  </button>
                  <button className="text-green-500" onClick={() => alert('Submitted')}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Slider Image</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Upload a new image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(URL.createObjectURL(e.target.files[0]))}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            {newImage && (
              <img src={newImage} alt="Preview" className="w-full h-48 object-cover mb-4" />
            )}
            <input
              type="text"
              placeholder="Link (Optional)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Contact Number (Optional)"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="block w-full mb-4 p-2 border rounded"
            />
            <button
              onClick={handleSaveSliderEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Edit
            </button>
            <button
              onClick={() => setEditedImage(null)}
              className="ml-4 bg-gray-300 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {editedHighlight && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Highlight Image</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Upload a new image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewHighlightImage(URL.createObjectURL(e.target.files[0]))}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            {newHighlightImage && (
              <img
                src={newHighlightImage}
                alt="Preview"
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <button
              onClick={handleSaveHighlightEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Edit
            </button>
            <button
              onClick={() => setEditedHighlight(null)}
              className="ml-4 bg-gray-300 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
