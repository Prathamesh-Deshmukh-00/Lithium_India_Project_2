import { useState } from "react";
import { Pencil, X, Eye, EyeOff } from "lucide-react";
import Back from '../Images/left.png';


export default function Profile() {
  // State for profile inputs
  const [firstName, setFirstName] = useState("Admin First Name");
  const [lastName, setLastName] = useState("Admin Last Name");
  const [phoneNumber, setPhoneNumber] = useState("+91 XXXXXXXXXX");
  const [email, setEmail] = useState("Admin@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  // Edit state controls
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-white px-4">
      {/* Image at the top */}
      <div className="flex w-full mt-2 justify-start mb-4">
        <img
          src={Back}
          alt="Profile Banner"
          className="h-10 w-10 object-cover rounded-lg"
        />
        <h1 className="text-3xl text-gray-700 ml-2 font-bold">Profile</h1>
      </div>
      <div className="w-full max-w-lg bg-white rounded-lg p-8">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-4xl">👤</span>
          </div>
          <button className="text-green-600 mt-2 hover:underline">
            + Add Photo
          </button>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg"
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
            <label className="block text-gray-500 text-lg text-start font-medium">
              Last Name
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg"
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
            <label className="block text-gray-500 text-lg text-start font-medium">
              Phone Number
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg"
              />
              <button className="text-blue-600 text-sm hover:underline">
                Verify
              </button>
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-8">
            <label className="block text-gray-500 text-lg text-start font-medium">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-lg"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="block text-gray-500 text-lg text-start font-medium">
              Password
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-lg"
              />
              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Change Password
              </a>
            </div>
          </div>

          {/* Log Out Button */}
          <button className="w-[30%] bg-[#019D6D] hover:bg-green-700 text-white py-2 rounded-lg font-medium">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
