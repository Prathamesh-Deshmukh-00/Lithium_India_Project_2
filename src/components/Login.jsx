import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password too short!");
      return;
    }

    toast.success("Login successful!");
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-white-100 px-4 pt-28 md:px-0 relative">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-[#003827]">Lithium India</h1>
        <p className="text-center pt-10 text-2xl font-bold text-gray-500 mb-6">Log In to your Account</p>

        <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4 w-[90%]">
            <label className="block text-gray-600 text-sm font-medium text-left mb-2">Email Id</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white w-full">
              <span className="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75l8.25 6 8.25-6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter registered email"
                className="w-full bg-transparent focus:outline-none ml-2 placeholder-gray-400 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4 w-[90%]">
            <label className="block text-gray-600 text-sm font-medium mb-2 text-left">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="text-green-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-[30%] bg-[#019D6D] hover:bg-green-700 text-white py-2 rounded-lg font-medium mx-auto">
            Log In
          </button>
        </form>
      </div>

      {/* Toast Notifications - Centered Horizontally */}
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
        transition={Slide}
        toastStyle={{ fontSize: "18px", textAlign: "center" }}
        className="custom-toast-container"
      />

      {/* Custom CSS for Horizontal Alignment */}
      <style jsx>{`
        .custom-toast-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
