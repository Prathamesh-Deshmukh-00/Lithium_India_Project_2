import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation function
  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters, include an uppercase letter, a number, and a special character.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Password reset successful!");
  };

  return (
    <div className="flex items-start mt-10 justify-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>

        {/* Password Input */}
        <div className="relative mb-6">
          <label className="block text-sm text-start mb-1 font-medium text-gray-500">
            Enter new password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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

        {/* Reset Button */}
        <button
          className="w-[30%] py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700"
          onClick={handleSubmit}
        >
          Reset
        </button>

        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}