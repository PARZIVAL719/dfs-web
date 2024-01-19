import React,{useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DataTables  from "datatables.net-bs5";

// Component
import Doctor_Guarantee_Timetable_Montly from "./Doctor_Guarantee_Timetable_Montly";
import Doctor_Guarantee_Timetable_Daily from "./Doctor_Guarantee_Timetable_Daily";

function Doctor_Guarantee_Timetable() {



  return (
    <div className="fw-semibold font">
      <div className="container">
        <div className="card mt-3">
          <header className="card-header bg-secondary py-1">
            <div className="text-light">Master Timetable</div>
          </header>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label htmlFor="doctorCode" className="col-form-label">Doctor Code</label>
              </div>
              <div className="col-sm-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control  input-sm border-end-0"
                    id="department"
                    placeholder="Search"
                  />
                  <span className="input-group-text border-start-0">
                    <FaSearch/>
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" name="" id="" disabled readOnly />
              </div>
            </div>
            {/* Montly Card */}
            <Doctor_Guarantee_Timetable_Montly /> 
            <br />
            {/* Daily Card */}
            <Doctor_Guarantee_Timetable_Daily />
            {/* button */}
            <br />
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <button type="button"className="btn btn-light btn-sm border border-secondary">
                    Reset
                  </button>
                </div>
                <div className="d-flex">
                  <button type="button" className="btn btn-light btn-sm border border-secondary">
                    Save
                  </button>
                  <Link to="/newpage">
                    <button type="button" className="btn btn-light btn-sm border border-secondary ms-1">
                      Close
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Guarantee_Timetable;

{

}
