import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div id="postingForm" className="container border w-50 mt-5">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/SignUp">
          <button className="btn btn-outline-primary me-5 mt-3 px-5 py-2 display-3">
            Sign Up
          </button>
        </Link>
      </div>
      <h1 className="text-center display-4 mb-4 mt-1">
        Enter your credientals
      </h1>
      {/* Movie Title */}
      <div className="mx-5 mb-3" style={{ margin: "0 auto" }}>
        <label htmlFor="" className="d-block fs-4">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="username"
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="" className="d-block fs-4">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter password"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="password"
        />
      </div>

      {/* Submit */}
      <div className="mx-5 mb-5 ">
        <input
          type="button"
          className="btn btn-primary w-100 fs-5"
          value="Sign Up"
        />
      </div>
    </div>
  );
};

export default SignIn;
