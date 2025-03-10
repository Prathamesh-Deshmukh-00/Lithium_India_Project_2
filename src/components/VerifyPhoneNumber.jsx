import { useState, useRef } from "react";

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

  return (
    <div className="flex items-start justify-center min-h-screen ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl mb-2 font-semibold text-center">Verify Phone Number</h2>
        <p className="text-center text-gray-500 text-sm">
        Please Enter OTP that has been sent to your phone
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
        <p className="text-end mr-14 text-sm text-blue-500 cursor-pointer ">
          Resend OTP
        </p>
        <div className="flex justify-center">
          <button className="w-[30%] mt-6 py-2 bg-[#019D6D] text-white font-semibold rounded-lg hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
