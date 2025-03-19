import { useState, useRef } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace for OTP input
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Validate OTP
  const handleSubmit = () => {
    const otpValue = otp.join("");

    if (otpValue.length < 5) {
      toast.error("Please enter a complete 5-digit OTP!");
      return;
    }

    toast.success("OTP verified successfully!");
  };

  return (
    <div className="flex mt-10 items-start justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl mb-2 font-semibold text-center">Enter OTP</h2>
        <p className="text-center text-gray-500 text-sm">
          OTP has been sent to your phone
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3 mt-6 mb-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <p className="text-end mr-14 text-sm text-blue-500 cursor-pointer">
          Resend OTP
        </p>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-[30%] mt-6 py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
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
        toastStyle={{ fontSize: "16px", textAlign: "center" }}
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
