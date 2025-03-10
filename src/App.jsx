import { useState } from 'react'

import './App.css'
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import OTPVerification from "./components/OtpVerification.jsx";
import PhoneNumberVerification from "./components/VerifyPhoneNumber.jsx";
import ChangePassword from "./components/ChangePassword.jsx";

function App() {


  return (
   <div  className="w-screen h-screen bg-white-200">
 <Header/>
 <Login/>
 {/* <ForgetPassword/> */}
 {/* <OTPVerification/> */}
 {/* <ResetPassword/> */}
 {/* <Profile/> */}
 {/* <PhoneNumberVerification/> */}
 {/* <ChangePassword/> */}
 
 </div>

  )
}

export default App
