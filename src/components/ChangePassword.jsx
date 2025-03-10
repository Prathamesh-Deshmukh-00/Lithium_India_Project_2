import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-start mt-10 justify-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
          Change Password
        </h2>

        {/* Old Password Input */}
        <div className="relative mb-6">
          <label className="block text-sm font-medium text-start mb-1 text-gray-500">
            Enter old password
          </label>
          <div className="relative flex items-center">
            <input
              type={showOldPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old password"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* New Password Input */}
        <div className="relative mb-6">
          <label className="block text-sm font-medium text-start mb-1 text-gray-500">
            Enter new password
          </label>
          <div className="relative flex items-center">
            <input
              type={showNewPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="relative mb-8">
          <label className="block text-sm font-medium text-start mb-1 text-gray-500">
            Confirm password
          </label>
          <div className="relative flex items-center">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-[30%] py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700">
          Save
        </button>
      </div>
    </div>
  );
}
