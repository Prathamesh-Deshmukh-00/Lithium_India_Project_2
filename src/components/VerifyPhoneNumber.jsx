import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PhoneNumberVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

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

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    if (otp.includes("")) {
      toast.error("Please enter all digits of the OTP.");
      return;
    }

    const otpValue = otp.join("");
    console.log("OTP to send:", otpValue);

    // Simulated validation: Assume OTP is "12345" for success
    if (otpValue === "12345") {
      toast.success("OTP Verified Successfully!");
      setOtp(["", "", "", "", ""])
    } else {
      toast.error("Invalid OTP. Try again.");
      setOtp(["", "", "", "", ""])
    }
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
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl mb-2 font-semibold text-center">
          Verify Phone Number
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Please enter the OTP sent to your phone
        </p>
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
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-[30%] mt-6 py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
