import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props) => {
  return (
    <form
      className="input-group d-flex justify-content-center"
      onSubmit={props.submit}
    >
      <input
        className="rounded form-control py-2"
        type="text"
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.change}
      />
      <button className="rounded ms-3 mt-3 mt-sm-0 px-4 py-2 py-sm-1 px-sm-3 btn btn--search shadow-sm">
        Znajdź miasto
      </button>
    </form>
  );
};

export default Form;
