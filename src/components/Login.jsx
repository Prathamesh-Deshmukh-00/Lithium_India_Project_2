import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <div className="flex items-start justify-center min-h-screen bg-white-100 px-4 pt-28 md:px-0">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg">
        <h1 className="text-4xl font-bold text-center text-[#003827]">Lithium India</h1>
        <p className="text-center pt-10 text-2xl font-bold text-gray-500 mb-6">Log In to your Account</p>

        <form className="w-full flex flex-col items-center">
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
                required
              />
            </div>
          </div>

          <div className="mb-4 w-[90%]">
            <label className="block text-gray-600 text-sm font-medium mb-2 text-left">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 text-lg"
                required
              />
              <span 
                className="text-green-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button type="submit" className="w-[30%] bg-[#019D6D] hover:bg-green-700 text-white py-2 rounded-lg font-medium mx-auto">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
