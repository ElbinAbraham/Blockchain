import React, { useEffect } from "react";
import "../css/Login_Users.css";
import doctor from "@images/doctor.jpg";

const Login_Users = () => {
  return (
    <>
      <div className="LoginContainer">
        <div className="ImageContainer">
          <img className="Doctor" src={doctor}></img>
        </div>
        <div className="LoginBox">
          <div className="LoginBoxHeader">
            <h1>Login</h1>
          </div>
          <div className="LoginBoxFormContainer">
            <div className="LoginSelector">
              <div className="DoctorHeader">Doctor Login</div>
              <div className="UserHeader">User Login</div>
            </div>
            <div className="LoginForm">
              <form>
                <div className="Username">
                  <div className="UsernameHeader">
                    <label for="username">Username</label>
                  </div>
                  <div className="UsernameInput">
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter Username"
                    ></input>
                  </div>
                </div>
                <div className="Password">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                  ></input>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_Users;
