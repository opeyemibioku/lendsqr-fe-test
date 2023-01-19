import { Link } from "react-router-dom";
import React, { useState } from "react";

import profileimage from "../assets/images/profileimage.jpg";

export const DashboardNavbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* <nav className="navbar bg-body-tertiary"> */}
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex justify-content-evenly">
            <a className="navbar-brand text-decoration-underline mx-3">Docs</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>

            <div>
              <img
                src={profileimage}
                alt=""
                width="60px"
                height="60px"
                className="rounded-circle border border-light border-5 mx-3"
              />
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Adedeji
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="">
        <div className="d-flex justify-content-between mt-3 justify-content-center ">
          <img
            src={mindafrikfulllogo}
            className="d-inline-block align-top d-none d-sm-none d-lg-block d-md-block"
            alt="MindAfrik logo"
          />
          <div className="d-flex align-items-center">
            {" "}
            <AccountCircleOutlinedIcon className="mx-3" />
            <NotificationsActiveIcon className="mx-3" />
            <LogoutOutlinedIcon className="mx-3" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export const SidebarLarge = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show text-bg-light d-none d-lg-block d-md-none d-sm-none d-xs-none"
        tabindex="-1"
        id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel"
        style={{
          // background: "#fff",
          width: "16rem",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvasDark"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Place offcanvas content here.</p>
        </div>
      </div>
    </>
  );
};

export const SidebarSmall = (name, ...props) => {
  const options = [
    {
      scroll: true,
      backdrop: false,
    },
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>
      <button
        className="btn btn-primary"
        onClick={toggleShow}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            show={show}
            onHide={handleClose}
            {...props}
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
