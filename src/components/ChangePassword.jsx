import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUppercase,
      hasLowercase,
      hasSpecialChar,
      isValid: minLength && hasUppercase && hasLowercase && hasSpecialChar,
    };
  };

  const handleSubmit = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (oldPassword !== "Patu@3237") {
      toast.error("Old password is not valid.");
      return;
    }

    const oldPasswordValidation = validatePassword(oldPassword);
    if (!oldPasswordValidation.isValid) {
      if (!oldPasswordValidation.minLength)
        toast.error("Old password must be at least 6 characters long.");
      if (!oldPasswordValidation.hasUppercase)
        toast.error("Old password must contain at least one uppercase letter.");
      if (!oldPasswordValidation.hasLowercase)
        toast.error("Old password must contain at least one lowercase letter.");
      if (!oldPasswordValidation.hasSpecialChar)
        toast.error("Old password must contain at least one special character.");
      return;
    }

    const newPasswordValidation = validatePassword(newPassword);
    if (!newPasswordValidation.isValid) {
      if (!newPasswordValidation.minLength)
        toast.error("New password must be at least 6 characters long.");
      if (!newPasswordValidation.hasUppercase)
        toast.error("New password must contain at least one uppercase letter.");
      if (!newPasswordValidation.hasLowercase)
        toast.error("New password must contain at least one lowercase letter.");
      if (!newPasswordValidation.hasSpecialChar)
        toast.error("New password must contain at least one special character.");
      return;
    }

    if (newPassword === oldPassword) {
      toast.error("New password cannot be the same as the old password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    console.log("Password change request:", { oldPassword, newPassword });

    // Simulated success response
    toast.success("Password changed successfully!");
  };

  return (
    <div className="flex items-start mt-10 justify-center min-h-screen">
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
        <button
          onClick={handleSubmit}
          className="w-[30%] py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </div>
  );
}
