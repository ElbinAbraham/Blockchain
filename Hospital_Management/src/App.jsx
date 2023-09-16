import React, { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import contractABI from "./contractAbi.json";
import { ethers } from "ethers";
import Login_Users from "./components/js/Login_Users";
import Patient_Data_Form from "./components/js/Patient_Data_Form";
import DashboardUser from "./components/js/dashboard";
import Vitals from "./components/js/vitals";
import Sidebar from "./components/js/sidebar";
import Current from "./components/js/current";
import GoogleCalendar from "./components/js/bookings";
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  // const calendarSrc =
  //   "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=...";
  // const medications = [
  //   {
  //     name: "Medication A",
  //     startDate: "2023-09-10", // Start date in yyyy-mm-dd format
  //     duration: 7, // Duration in days
  //   },
  //   {
  //     name: "Medication B",
  //     startDate: "2023-09-15", // Start date in yyyy-mm-dd format
  //     duration: 3, // Duration in days
  //   },
  //   {
  //     name: "Medication C",
  //     startDate: "2023-09-05", // Start date in yyyy-mm-dd format
  //     duration: 2, // Duration in days
  //   },
  //   {
  //     name: "Medication B",
  //     startDate: "2023-09-15", // Start date in yyyy-mm-dd format
  //     duration: 3, // Duration in days
  //   },
  //   {
  //     name: "Medication B",
  //     startDate: "2023-09-15", // Start date in yyyy-mm-dd format
  //     duration: 3, // Duration in days
  //   },
  // ];
  return (
    <>
      {/* <Login_Users /> */}
      <Router>
      <Routes>
        <Route exact path="/" element={ <Login_Users /> } />
        <Route path="/other" element={<Patient_Data_Form />} />
        <Route path="/dashboard" element={<DashboardUser />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
