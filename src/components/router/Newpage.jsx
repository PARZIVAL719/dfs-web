import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NewpageButton = () => {
  return (
    <div className="flex ">
      <Link to="/newpage">
        <button type="button" className=" btn btn-light btn-sm border border-secondary">New</button>
      </Link>
    </div>
  );
};

export default NewpageButton;