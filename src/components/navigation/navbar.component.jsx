import React from "react";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        className=" offcanvas offcanvas-start w-25"
        tabIndex="-1"
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className="offcanvas-header bg-success w-100">
          <h5 id="offcanvasLeftLabel" className="text-light">
            Categories
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <button className="navSubBtn border border-bottom-secondary bg-light text-dark p-2">
          Sell
        </button>
        <button className="navSubBtn border border-bottom-secondary bg-light text-dark p-2">
          Buy
        </button>
        <button className="navSubBtn border border-top-secondary bg-light text-dark p-2">
          Rent
        </button>
        <div className="offcanvas-body">...</div>
      </div>

      {/* <!--Search Bar off-Canvas--> */}
      <div className="container-fluid">
        <div
          className="offcanvas offcanvas-top h-25"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <form className="d-flex w-100">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-success w-25"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* <!--NavBar--> */}
      <div className="container-fluid  p-0">
        <nav className="navbar navbar-dark bg-primary">
          <div className="mx-auto">
            <Link to="/">
              <img
                src={require("../../assets/logo/logo.png")}
                style={{ width: "150px" }}
                alt=""
              />
            </Link>
          </div>
          <div className="container-fluid w-75 d-flex justify-content-center justify-content-xl-end">
            <button className="btn btn-outline-light text-light">
              <Link to="/SignUp">Account</Link>
            </button>
            <button
              className="btn btn-outline-light text-light ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              Search
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
