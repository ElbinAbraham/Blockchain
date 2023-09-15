import React from 'react';
import '../css/current.css';

const Current = ({ medications }) => {
  const today = new Date();

  // Function to calculate the number of days left for a medication
  const calculateDaysLeft = (medication) => {
    const startDate = new Date(medication.startDate);
    const endDate = new Date(startDate.getTime() + medication.duration * 24 * 60 * 60 * 1000); // Add duration in milliseconds
    const daysLeft = Math.ceil((endDate - today) / (24 * 60 * 60 * 1000)); // Calculate days left
    return daysLeft;
  };

  // Slice the medications array to display only the first 6 items
  const limitedMedications = medications.slice(0, 6);

  return (
    <>
      <div className='current-container'>
        {limitedMedications.map((medication, index) => {
          const daysLeft = calculateDaysLeft(medication);
          // Only render the div if there are remaining days
          if (daysLeft > 0) {
            return (
              <div className='current' key={index}>
                <div className='current-title'>
                  <h1 className='current-title'>Ongoing Prescription of {medication.name}</h1>
                </div>
                <div className='current-prescription'>
                  <div className='current-prescription-time'>
                    <p className=''>Days Left: {daysLeft}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null; // If daysLeft is 0, don't render anything
        })}
      </div>
    </>
  );
};

export default Current;
