
import React from "react";
import BackMenu from "../router/BackMenu";

import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// Components
import Doctor_Detail from "./Doctor_Detail";
import Doctor_Address from "./Doctor_Address";
import Doctor_Info from "./Doctor_Info";
import Doctor_Department from "./Doctor_Department";
import Doctor_Guarantee from "./Doctor_Guarantee";
import Doctor_Payment from "./Doctor_Payment";
import Doctor_Note from "./Doctor_Note";
import Doctor_File from "./Doctor_File";
import NewpageButton from "../router/Newpage";

const DoctorDetail = () => {
  return (
    <div className=" fw-semibold">
  <div className="container">
    <div className="row">
      <div className="card border-0 ">
        <div className="card-body">
          <div className="card">
            <Doctor_Detail />
            <Doctor_Address />
            <Doctor_Info />
            <Doctor_Department />
            <Doctor_Guarantee />
            <Doctor_Payment />
            <Doctor_Note />
            <Doctor_File />
            <div>
              <header className="card-header navbar bg-secondary py-2 d-flex justify-content-between align-items-center">
                <div>
                  <button type="button" className="btn btn-light btn-sm border border-secondary" >Reset</button>
                </div>
                <div>
                  <button type="button" className="btn btn-light btn-sm border border-secondary">Ok</button>
                  <Link to="/">
                  <button type="button" className="btn btn-light btn-sm border border-secondary">Close</button>
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    

  );
};

export default DoctorDetail;

