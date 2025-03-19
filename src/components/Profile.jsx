import { useState } from "react";
import { Pencil, X, Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Back from "../Images/left.png";
// import axios from "axios";

export default function Profile() {
  // State for profile inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Edit state controls
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);

  // Function to validate inputs
  const validateForm = () => {
    if (!firstName.trim() || !lastName.trim()) {
      toast.error("First name and last name are required.");
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Enter a valid 10-digit phone number.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return false;
    }
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password must be at least 6 characters long, contain at least one uppercase letter, one special character, one letter, and one number."
      );
      return false;
    }

    return true;
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle Save action
  const handleSaveProfile = async () => {
    if (!validateForm()) return;

    const profileData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      profilePhoto, // This is a base64 string of the image
    };

    if (profileData) {
      toast.success("Profile updated successfully!");
    } else {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-white px-4">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ fontSize: "16px", textAlign: "center" }}
        className="custom-toast-container"
      />
      {/* Header */}
      <div className="flex w-full mt-2 justify-start mb-4">
        <img
          src={Back}
          alt="Back"
          className="h-10 w-10 object-cover rounded-lg"
        />
        <h1 className="text-3xl text-gray-700 ml-2 font-bold">Profile</h1>
      </div>

      <div className="w-full max-w-lg bg-white rounded-lg p-8">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-4xl">👤</span>
            )}
          </div>
          <label className="text-green-600 mt-2 hover:underline cursor-pointer">
            + Add Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Profile Fields */}
        <div className="mt-6">
          {/* First Name */}
          <div className="mb-8">
            <label className="block text-gray-500 text-lg text-start font-medium">
              First Name
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Enter your first name hear.. "
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg placeholder-gray-500 placeholder-opacity-70 placeholder:text-sm"
                disabled={!isEditingName}
              />
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setIsEditingName(!isEditingName)}
              >
                {isEditingName ? <X size={18} /> : <Pencil size={18} />}
              </span>
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-8">
            <label className="block text-gray-500 text-start text-lg font-medium">
              Last Name
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Enter your last name hear..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg placeholder-gray-500 placeholder-opacity-70 placeholder:text-sm"
                disabled={!isEditingLastName}
              />
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setIsEditingLastName(!isEditingLastName)}
              >
                {isEditingLastName ? <X size={18} /> : <Pencil size={18} />}
              </span>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-8">
            <label className="block text-gray-500 text-start text-lg font-medium">
              Phone Number
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Enter your phone number hear.."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg placeholder-gray-500 placeholder-opacity-70 placeholder:text-sm"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-8">
            <label className="block text-gray-500 text-start text-lg font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email id hear..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-lg placeholder-gray-500 placeholder-opacity-70 placeholder:text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="block text-start text-gray-500 text-lg font-medium">
              Password
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg placeholder-gray-500 placeholder-opacity-70 placeholder:text-sm"
              />

              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveProfile}
            className="w-[30%] bg-[#019D6D] hover:bg-green-700 text-white py-2 rounded-lg font-medium"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
