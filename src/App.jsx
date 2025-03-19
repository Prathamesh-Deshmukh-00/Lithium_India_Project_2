import { useState } from 'react';

import './App.css'
import { Trash } from "lucide-react"; // Import an icon from Lucide React (or any other library)

import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import OTPVerification from "./components/OtpVerification.jsx";
import PhoneNumberVerification from "./components/VerifyPhoneNumber.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import Sidebar from "./components/DestopVerticalSider.jsx";
import CardGrid from "./components/CardGrid.jsx";
import FilterBar  from "./components/FilterBar.jsx";
import BatteryStatusCard  from "./components/BatteryCard.jsx";
import BatteryStatusCardTwo  from "./components/BatteryStatusCard2.jsx";
import CellStatusCard  from "./components/CellStatusCard.jsx";
import GraphParametersModal  from "./components/GraphParametersModal.jsx";
import Dropdown  from "./components/Dropdown.jsx";
import NewDashboard  from "./components/newDashbord.jsx";
import TripTable  from "./components/TripTable.jsx";
import Toggle  from "./components/Toggle.jsx";
import ReusableIconButton  from "./components/ReusableIconButton.jsx";
import DeviceDetails  from "./components/DeviceDetails.jsx";
import DeviceDetailsForm from "./components/DeviceDetailsForm.jsx";
import DeviceDetailsForm2 from "./components/DeviceDetailsForm2.jsx";

// import Dashboard from "./components/Dashbord.jsx";

function App() {


// device fdetails form 2 
  const [formData, setFormData] = useState({
    imei: "",
    deviceId: "",
    deviceName: "",
    cellType: "",
    cellUsed: "",
    cellBrand: "",
    bmsName: "",
    casingName: "",
    capacity: "",
    warranty: "",
    subscriptionEnd: "",
    sellingDate: "",
    customerType: "",
  });

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    // You can send this data to your API or perform any action you need
  };


  // const [formData, setFormData] = useState({
  //   imei: "",
  //   deviceId: "",
  //   deviceName: "",
  //   cellType: "",
  //   cellUsed: "",
  //   cellBrand: "",
  //   bmsName: "",
  //   casingName: "",
  //   capacity: "",
  //   warranty: "",
  // });

  // const handleFormChange = (updatedData) => {
  //   setFormData(updatedData);
  // };

  // const handleSubmit = () => {
  //   console.log("Submitted:", formData);
  // };

  // const [isToggled, setIsToggled] = useState(false);
   
  // const handleDelete = () => {
  //   alert("Delete button clicked!");
  // };



  return (
   <div  className="w-screen h-screen bg-gray-200">
  <Header/>
 {/* <Login/> */}
 {/* <ForgetPassword/> */}
 {/* <OTPVerification/> */}
 {/* <ResetPassword/> */}
 {/* <Profile/> */}
 {/* <PhoneNumberVerification/> */}
 {/* <ChangePassword/> */}


 {/* <Sidebar/> */}
 {/* <CardGrid/>  */}
 {/* <Dashboard/> */}
 {/* <FilterBar /> */}
 {/* <BatteryStatusCard />
 <BatteryStatusCardTwo /> */}

 {/* Table */}
 {/* <TripTable /> */}

{/* Toggle button */}
 {/* <div className="p-5">
      <Toggle value={isToggled} onClick={() => setIsToggled((prev) => !prev)} />
    </div> */}

    {/* Delete component */}
    {/* <div className="p-5">
      <ReusableIconButton
        icon={<Trash size={24} />}
        onClick={handleDelete}
      />
    </div> */}

{/* device details */}
{/* <DeviceDetails/> */}

{/* Device Details Form  */}
 {/* <DeviceDetailsForm
        formData={formData}
        setFormData={handleFormChange}
        onSubmit={handleSubmit}
      />  */}

{/* Device Details Form 2 */}
<DeviceDetailsForm2
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />


 {/* <GraphParametersModal /> */}
 {/* <Dropdown /> */}
 {/* <NewDashboard /> */}
 {/* <CellStatusCard title="Balance" status="Cell Status" minVoltage="4" maxVoltage="12" /> */}

 
 </div>

  )
}

export default App
