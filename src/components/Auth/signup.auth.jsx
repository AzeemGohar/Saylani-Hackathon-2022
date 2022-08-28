import { collection, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../utils/firebase.utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    mobileNo: "",
    id: "",
  });
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { fullName, username, mobileNo } = user;

  const adduser = async (e) => {
    const newRef = doc(collection(db, "usersData"));
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      const userCollectionRef = await setDoc(newRef, {
        fullName,
        username,
        email: userEmail,
        mobileNo,
        id: user.uid,
      });
    } catch (e) {}
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  return (
    <>
      <div id="postingForm" className="container border  p-0 mt-2">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/Dashboard">
            <button className="btn btn-outline-success text-success me-2 mt-3 px-5 py-2 display-3">
              Dashboard
            </button>
          </Link>
          <Link to="/SignIn">
            <button className="btn btn-outline-primary me-5 mt-3 px-5 py-2 display-3">
              Sign In
            </button>
          </Link>
        </div>
        <h1 className="text-center display-4 mb-4 mt-1">
          Enter the required details
        </h1>
        {/* Full Name */}
        <div className="mx-5 mb-3">
          <label htmlFor="" className="d-block fs-4">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Username */}
        <div className="mx-5 mb-3">
          <label htmlFor="" className="d-block fs-4">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Type username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mx-5 mb-3">
          <label htmlFor="formFileMultiple" className="form-label fs-4">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="formFileMultiple"
            placeholder="Enter your email"
            name="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>

        {/* Password */}
        <div className="mx-5 mb-3">
          <label htmlFor="formFileMultiple" className="form-label fs-4">
            Password
          </label>
          <input
            className="form-control"
            type="text"
            id="formFileMultiple"
            placeholder="Enter password"
            name="password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>

        {/* Mobile Number */}
        <div className="mx-5 mb-3">
          <label htmlFor="formFileMultiple" className="form-label fs-4">
            Mobile No
          </label>
          <input
            className="form-control"
            type="number"
            id="formFileMultiple"
            placeholder="Enter you phone number"
            name="mobileNo"
            value={user.mobileNo}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="mx-5 mb-3 ">
          <input
            type="button"
            className="btn btn-primary w-100 fs-5"
            value="Sign Up"
            onClick={adduser}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
