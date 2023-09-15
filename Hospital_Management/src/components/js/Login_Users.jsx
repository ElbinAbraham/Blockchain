import React, { useState } from "react";
import "../css/Login_Users.css";
import doctor from "@images/doctor.jpg";
import contract from "../../contracts/Login.json";
import { ethers } from "ethers";


const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
const demoContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

const Login_Users = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log(username);
      console.log(password);
      const transaction = await demoContract.login(username, password);
      console.log("Login successful!");
    } catch (error) {
      console.error("Error logging in:");
    }
  };

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
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="Password">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <button type="submit" onClick={handleLogin}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_Users;
