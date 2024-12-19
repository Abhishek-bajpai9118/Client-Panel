import React, { useState } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/40" // Default profile picture
  );

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300 shadow-sm cursor-pointer"
        />
        <input
          type="file"
          accept="image/*"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleProfileChange}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-16 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          style={{ position: "fixed" }}
        >
          <div className="px-4 py-2 text-sm text-gray-700 font-semibold">
            Abhishek
          </div>
          <hr className="border-gray-200" />
          <ul>
            <li>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => alert("My Profile clicked")}
              >
                My Profile
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => alert("Orders clicked")}
              >
                Orders
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => alert("Notifications clicked")}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => alert("Logout clicked")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
