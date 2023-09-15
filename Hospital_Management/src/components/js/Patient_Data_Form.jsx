import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Patient_Data_Form = () => {
  return (
    <>
        <h1>General Information</h1>
        <form>
            <div class="mb-3">
                <label for="patientName" class="form-label">Patient Name</label>
                <input type="text" class="form-control" id="patientName" ></input>
            </div>
            <div class="mb-3">
                <label for="dob" class="form-label">Date Of Birth</label>
                <input type="date" class="form-control" id="dob"></input>
            </div>
            <div class = "form-check">
                <label for="male" class="form-check-label">Male</label>
                <input type="radio" class="form-check-input" id="male"/>
            </div>
            <div class = "form-check">
                <label for="Female" class="form-check-label">Female</label>
                <input type="radio" class="form-check-input" id="Female"/>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" ></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Patient_Data_Form;