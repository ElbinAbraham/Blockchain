import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import contractABI from './contractAbi.json';
import { ethers } from 'ethers';
import Login_Users from './components/js/Login_Users';
import Patient_Data_Form from './components/js/Patient_Data_Form';
import DashboardUser from './components/js/dashboard';

 import GoogleCalendar from './components/js/bookings';
function App() {

  const calendarSrc =
  'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=...';

  return (
    <>
    <body>
    <div className="bg-image">
    <Login_Users />
    </div>
    </body>
    
    {/* 
    <GoogleCalendar src={calendarSrc} width="800" height="600" /> */}
    </>
  )
}


export default App;
