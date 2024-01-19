import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { doctorAllDetailsContext } from "./Doctor_Display_Detail";

function Doctor_Info() {
  const { info, setInfo } = useContext(doctorAllDetailsContext);

  const handleChange = (e, field) => {
    setInfo({ ...info,[field]: e.target.value });
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div>
      <header className="card-header navbar bg-secondary py-2 ">
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
              value={info.LICENSE_ID || ""}
              onChange={(e) => handleChange(e, "LICENSE_ID")}
            />
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Salary
            </label>
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              name="salary"
              id=""
              className="form-control"
              placeholder="0.00"
              value={info.SALARY || ""}
              onChange={(e) => handleChange(e, "SALARY")}
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
              value={info.LICENSE_ISSUE_DATE || ""}
              onChange={(e) => handleChange(e, "LICENSE_ISSUE_DATE")}
            />
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Start Working Date
            </label>
          </div>
          <div className="col-sm-3">
            <input
              type="date"
              name="StartWorkingDate"
              id=""
              className="form-control"
              value={info.START_WORING_DATE || ""}
              onChange={(e) => handleChange(e, "START_WORING_DATE")}
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
            <select
              className="form-select disabled   "
              name="doctorTypeCode"
              id="dwlDoctorType"
              value={info.DOCTOR_TYPE || ""}
              onChange={(e) => handleChange(e, "DOCTOR_TYPE")}
            >
              <option value="">--Select--</option>
              <option value="CS">แพทย์ Consult</option>
              <option value="DR">Doctor</option>
            </select>
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Doctor Group*
            </label>
          </div>
          <div className="col-sm-3 mt-2 ">
            <select
              className="form-select disabled   "
              name="doctorTypeCode"
              id="dwlDoctorType"
              value={info.DOCTOR_GROUP || ""}
              onChange={(e) => handleChange(e, "DOCTOR_GROUP")}
            >
              <option value="">--Select--</option>
              <option value="PT">Part time</option>
              <option value="FT">Full time</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Doctor Category*
            </label>
          </div>
          <div className="col-sm-3 mt-2 ">
            <select
              className="form-select"
              name="doctorTypeCode"
              id="dwlDoctorType"
              value={info.DOCTOR_CATEGORY || ""}
              onChange={(e) => handleChange(e, "DOCTOR_CATEGORY")}
            >
              <option value="">-Select-</option>
              <option value="DR_20">
                DR_20 - กล่มแพทย์ที่มีส่วนแบ่ง I/O 20%
              </option>
              <option value="DR_90">DR_90 - กลุ่มค่าแพทย์ส่วนแบ่ง 90%</option>
              <option value="DR_DENT">DR_DENT - กล่มแพทย์ทันตกรรม</option>
              <option value="DR_XR">DR_XR - กล่มแพทย์ xray</option>
              <option value="DR100">
                DR100 - กลุ่มส่วนแบ่งแพทย์ทั่วไป100%
              </option>
              <option value="DR90">DR90 - กลุ่มส่วนแบ่งแพทย์ทั่วไป90%</option>
              <option value="DR90_40">
                DR90_40 - กลุ่มส่วนแบ่งแพทย์ทั่วไป90%ปกส40%
              </option>
              <option value="DR90_70">
                DR90_70 - กลุ่มส่วนแบ่งแพทย์ทั่วไป90%ปกส70%
              </option>
              <option value="FT100">FT100 - ส่วนแบ่งแพทย์100%</option>
            </select>
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Hospital Unit
            </label>
          </div>
          <div className="col-sm-3 mt-2 ">
            <select
              className="form-select disabled  "
              name="doctorTypeCode"
              id="dwlDoctorType"
              value={info.HOSPITAL_UNIT || ""}
              onChange={(e) => handleChange(e, "HOSPITAL_UNIT")}
            >
              {/* <option value="">--Select--</option>
              <option value="DR">Part time</option>
              <option value="DR">Full time</option> */}
            </select>
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col-sm-3  text-sm-end ">
            <label htmlFor="" className="col-form-label">
              Specialty
            </label>
          </div>
          <div className="col-sm-3 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control ui-autocomplete-input input-sm border-end-0"
                id="doctorProfile"
                placeholder="Search"
                value={info.SPECIALTY || ""}
                onChange={(e) => handleChange(e, "SPECIALTY")}
              />
              <span className="input-group-text border-start-0">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="col-sm-6  text-sm-end ">
            <input
              type="text"
              className="form-control ui-autocomplete-input input-sm border-end-0"
              id="doctorProfile"
              placeholder="Search"
              value={info.SPECIALTY_DESC || ""}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Info;
