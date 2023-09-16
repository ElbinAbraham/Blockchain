import React from "react";
import Vitals from './components/js/vitals';
import Sidebar from './components/js/sidebar';
import Current from './components/js/current';

const DashboardUser = () => {
    const medications = [
        {
          name: 'Medication A',
          startDate: '2023-09-10', // Start date in yyyy-mm-dd format
          duration: 7, // Duration in days
        },
        {
          name: 'Medication B',
          startDate: '2023-09-15', // Start date in yyyy-mm-dd format
          duration: 3, // Duration in days
        },
        {
          name: 'Medication C',
          startDate: '2023-09-05', // Start date in yyyy-mm-dd format
          duration: 2, // Duration in days
        },
        {
          name: 'Medication B',
          startDate: '2023-09-15', // Start date in yyyy-mm-dd format
          duration: 3, // Duration in days
        },
        {
          name: 'Medication B',
          startDate: '2023-09-15', // Start date in yyyy-mm-dd format
          duration: 3, // Duration in days
        },
      ];
  return (
    <>
      <Sidebar />
      <Vitals />
      <Current medications={medications} />
    </>
  );
};

export default DashboardUser;
