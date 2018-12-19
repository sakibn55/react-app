import React, { Component } from "react";
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Cart{" "}
        <sup>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </sup>
      </a>
    </nav>
  );
};

export default Navbar;
