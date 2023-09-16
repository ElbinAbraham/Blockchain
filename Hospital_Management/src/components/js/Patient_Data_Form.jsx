import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Patient_Data_Form.css";
import { ethers } from "ethers";
import contract from "../../contracts/Patients.json";
import { useNavigate  } from 'react-router-dom';


const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const demoContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);



const Patient_Data_Form = () => {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const overrides = {
        gasLimit: 3e7, // Set your desired gas limit here
      };

      // Assuming you use age instead of dob in your contract function
    //   const transaction = await demoContract.addPatient(ADDRESS, patientName, age, gender, phone,overrides);
      const transaction = await demoContract.patients(ADDRESS,overrides);
      console.log("Login successful!");
      console.log(transaction.name);
    } catch (error) {
      console.log("Error logging in", error);
    }
  };

  const handleNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:");
    console.log("Patient Name:", patientName);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Phone Number:", phone);
  };

  return (
    <>
      <div className="mainContainer">
        <h1>General Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
              Patient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              value={patientName}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Select Gender:
            </label>
            <select
              id="gender"
              className="form-control"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Patient_Data_Form;



