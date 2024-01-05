import React from "react";
import { FaSearch } from "react-icons/fa";

function Doctor_Info() {
  return (

      <div>
        <header className="card-header navbar rounded-top-0 bg-secondary py-1 ">
          <div className="text-light">Doctor Information</div>
        </header>
        <div className="card-body">
          <div className="row ">
            <div className="col-sm-3 text-sm-end">
              <label htmlFor="" className="col-form-label">
              License ID
              </label>
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                name="doctorProfileCode"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-2  ">
            <div className="col-sm-3 text-sm-end">
              <label htmlFor="" className="col-form-label">
              License Issue Date
              </label>
            </div>
            <div className="col-sm-3 ">
              <input
                type="date"
                name="doctorProfileCode"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-3 text-sm-end">
              <label htmlFor="" className="col-form-label">
              Doctor Type*
              </label>
            </div>
            <div className="col-sm-3 mt-2 ">
            <select className="form-select disabled   " name="doctorTypeCode" id="dwlDoctorType">
									<option value="CS">แพทย์ Consult
									</option><option value="DR">Doctor</option></select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-3 text-sm-end">
              <label htmlFor="" className="col-form-label">
              Doctor Category*
              </label>
            </div>
            <div className="col-sm-3 mt-2 ">
            <select className="form-select disabled   " name="doctorTypeCode" id="dwlDoctorType">
									<option value="CS">-Select-
									</option><option value="DR">Doctor</option></select>
            </div>
          </div>

          <div className="row mt-2 ">
            <div className="col-sm-3  text-sm-end ">
              <label htmlFor="" className="col-form-label">
              Specialty
              </label>
              
            </div>
            <div className='col-sm-3 '>
            <div className="input-group">
              <input type="text" className="form-control ui-autocomplete-input input-sm border-end-0" id="doctorProfile"  placeholder="Search" />
              <span className="input-group-text border-start-0">
                <FaSearch />
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>

  );
}

export default Doctor_Info;
