import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { doctorAllDetailsContext } from "./Doctor_Display_Detail";

function Doctor_Detail() {
  const { detail, setDetail } = useContext(doctorAllDetailsContext);


  const handleChange = (e, field) => {
    setDetail({ ...detail,[field]: e.target.value });
  };

  useEffect(() => {
    // console.log(detail);
  }, [detail]);

  return (
    <>
      {/* {console.log(detail)} */}
      <div className="card-body">
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Doctor Profile Code*
            </label>
          </div>
          <div className="col-sm-3 ">
            <input
              type="text"
              name="doctorProfileCode"
              id="textdoctorProfileCode"
              className="form-control"
              value={detail?.DOCTOR_CODE || ""}
              readOnly
              disabled
            />
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="doctorProfileDesc"
              id="textdoctorProfileDesc"
              className="form-control"
              value={detail?.DOCTOR_PROFILE_DESCRIPTION || ""}
              readOnly
              disabled
            />
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorCode" className="col-form-label">
              Doctor Code*
            </label>
          </div>
          <div className="col-sm-9  col-md-3">
            <input
              type="text"
              name="doctorCode"
              id="textdoctorCode"
              className="form-control"
              value={detail?.DOCTOR_CODE || ""}
              readOnly
              disabled
            />
          </div>
          <div className="col-sm-3 text-sm-end ">
            <label htmlFor="Resignhtml" className="col-form-label">
              Resign
            </label>
          </div>
          <div className="col-sm-3 align-items-end   d-flex fw-light">
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioResign1"
              name="resignActive"
              value="Y"
              checked={detail?.RESIGN === "Y"}
              onChange={(e) => handleChange(e,"RESIGN")}
            />
            <label htmlFor="radioResign1" className="form-check-label me-3">
              Yes
            </label>
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioResign2"
              name="resignNotActive"
              // defaultValue="N"
              value="N"
              checked={detail?.RESIGN === "N"}
              onChange={(e) => handleChange(e,"RESIGN")}
            />
            <label htmlFor="radioResign2" className="form-check-label me-3">
              No
            </label>
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Name (ENG)*
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="doctorProfileCode"
              id="textdoctorProfileCode"
              className="form-control"
              value={detail?.NAME_ENG || ""}
              onChange={(e) => handleChange(e,"NAME_ENG")}
            />
          </div>
        </div>
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Name (TH)*
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="doctorProfileCode"
              id="textdoctorProfileCode"
              className="form-control"
              value={detail?.NAME_THAI || ""}
              onChange={(e) => handleChange(e,"NAME_THAI")}
            />
          </div>
        </div>
        <div className="row my-3 align-items-center">
          <div className="col-sm-3 text-sm-end ">
            <label htmlFor="doctorCodeS" className="col-form-label">
              Person*
            </label>
          </div>
          <div className="col-sm-9 col-md-3 align-items-center d-flex fw-light">
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioPerson0"
              name="radioPerson"
              value="Y"
              checked={detail?.PERSON === "Y"}
              onChange={(e) => handleChange(e,"PERSON")}
            />
            <label
              htmlFor="radioPerson0"
              className="form-check-label me-3 text-nowrap"
            >
              Individual
            </label>
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioPerson1"
              name="radioPerson"
              value="N"
              checked={detail?.PERSON === "N"}
              onChange={(e) => handleChange(e,"PERSON")}
            />
            <label
              htmlFor="radioPerson1"
              className="form-check-label me-3 text-nowrap"
              value="N"
            >
              Juristic Person
            </label>
          </div>
          <div className="col-sm-3 text-sm-end  ">
            <label htmlFor="doctorCode" className="col-form-label">
              Active
            </label>
          </div>
          <div className="col-sm-9 col-md-3 align-items-center d-flex fw-light">
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioActive0"
              name="radioActive"
              value="1"
              checked={detail?.ACTIVE === "1"}
              onChange={(e) => handleChange(e,"ACTIVE")}
            />
            <label htmlFor="radioActive0" className="form-check-label me-3">
              Active
            </label>
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioActive1"
              name="radioActive"
              value="0"
              checked={detail?.ACTIVE === "0"}
              onChange={(e) => handleChange(e,"ACTIVE")}
            />
            <label htmlFor="radioActive1" className="form-check-label me-3">
              Inactive
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor_Detail;
