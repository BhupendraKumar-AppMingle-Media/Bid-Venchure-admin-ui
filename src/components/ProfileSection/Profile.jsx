import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: false,
    smsNotifications: false,
  });
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // useRef for file input

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      alert("New passwords do not match.");
      return;
    }

    // Navigate to the profile details page with form data
    navigate("/profile-details", { state: { profileData: formData } });
  };

  return (
    <>
      <div className="max-w-lg mx-auto  mt-8 p-6 bg-slate-200 shadow-md rounded-lg">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl text-white">👤</span>
              )}
            </div>
            <div
              className="absolute bottom-0 right-2 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <span className="text-xl font-bold">+</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <h1 className="mt-4 text-xl font-semibold">Company Name</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-orange-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 flex items-center">
            <div className="flex items-center px-3 py-2 border border-orange-300 rounded-l-md">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="IN flag"
                className="w-5 h-5 mr-2"
              />
              <span>+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              pattern="\d{10}"
              maxLength="10"
              className="w-full px-3 py-2 border border-orange-300 rounded-r-md focus:outline-none focus:border-orange-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Change Section */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Current Password"
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-orange-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-orange-500"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-orange-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Notification Preferences */}
          <h3 className="text-lg font-semibold mb-4">
            Notification Preferences
          </h3>
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
              />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={formData.smsNotifications}
                onChange={handleChange}
              />
              <span>SMS</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Submit
            </button>
            <button
              type="cancel"
              className="px-6 py-2 border border-gray-400 rounded-md text-gray-600 bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
