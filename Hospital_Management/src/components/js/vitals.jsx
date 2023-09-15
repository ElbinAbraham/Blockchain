import React from "react";
import "../css/vitals.css";

const Vitals = () => {
  const blood = "120/80";
  const Heart = "70 BPM";
  const RR = "16 breath/min";
  const Temp = "98.6°F";

  return (
    <>
      <div className="container">
        <div className="container-body">
          <div className="container-title">Vitals</div>
          <div className="grid-container">
            <div className="blood">
              <div className="grid-item details">{blood}</div>
              <div className="grid-item title">B.P</div>
            </div>

            <div className="Heart">
              <div className="grid-item details">{Heart}</div>
              <div className="grid-item title">Heart Rate</div>
            </div>

            <div className="RR">
              <div className="grid-item details">{RR}</div>
              <div className="grid-item title">Breathing Rate</div>
            </div>

            <div className="Temp">
              <div className="grid-item details">{Temp}</div>
              <div className="grid-item title">Temperature</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vitals;
