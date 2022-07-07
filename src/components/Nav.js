import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props) => {
  return (
    <nav className="navbar nav--color shadow">
      <div className="container-fluid">
        <a className="navbar-brand text--color ps-3 ps-sm-5 py-2" href="#">
          Weather app
        </a>
      </div>
    </nav>
  );
};

export default Form;
