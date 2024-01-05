import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackMenu = () => {
  return (
    <div className="flex ">
      <Link to="/">
        <button type="button" className=" btn btn-light btn-sm border border-secondary">back menu</button>
      </Link>
    </div>
  );
};

export default BackMenu;