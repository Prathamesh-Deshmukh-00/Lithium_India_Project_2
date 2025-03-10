export default function ForgetPassword() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-white-100 px-4 md:px-0">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg">
        <h2 className="text-2xl mb-4 font-semibold text-center text-gray-800 mt-4">
          Forget password
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Please enter your registered email, we will send you a verification code.
        </p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm text-left font-medium mb-2">
              Email
            </label>
            <div className="flex items-center px-3 py-2  border border-gray-300 rounded-lg">
              <span className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5a2.25 2.25 0 01-2.25-2.25V6.75"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75l8.25 6 8.25-6"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent focus:outline-none ml-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[30%] bg-[#019D6D] hover:bg-green-700 text-white py-1.5 rounded-lg text-sm font-medium"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
