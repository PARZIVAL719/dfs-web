import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Doctor_Guarantee_Create() {

  const garunteeNote = {
    CODE: "",
    GUARANTEE_TYPE: "",
    DATE_START: "",
    AMOUNT:"",
    ALLOCATE: "",
    INCLUDE_REVENUE: "",
    DEPARTMENT: "",
    RFG: "",
    ABSORB: "",
    EARL_TIME:"",
    ACTIVE:"1",
    LUMP_SUM :"1",
    METHOD :"1",
    DATE_EXPIRE:"",
    EXTRA_HOUR : "",
    OVER: "",
    GURUNTEE_DAY:"",
    GURANTEE_CATEGOTY :"",
    LATE_TIME:""
    
  };
const [fromNote,setFromNote] = useState(garunteeNote)
const [noteArrTest,setNote]= useState([])


useEffect(()=>{
      console.log(fromNote);


})

const save = ()=>{
  noteArrTest.push(fromNote)
  console.log(noteArrTest);
console.log("Click save gurantee");
}


  return (
    <div className=" fw-semibold font">
      <div className="container">
        <div className="card mt-3">
          <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
            <div className="text-light">Doctor Guarantee</div>
          </header>
          <div className="card-body d-flex flex-column justify-content-center" id="content" >
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Doctor Code*
                </label>
              </div>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="txtDoctorCode" disabled readOnly
                />
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Is Lump Sum
                </label>
              </div>
              <div className="col-sm-3 align-items-center d-flex fw-light ">
                <input type="radio" className="form-check-input me-2" id="radioIsLumpSumY" name="isLumpSum" value="1"/>
                <label
                  htmlFor="radioIsLumpSumY"
                  className="form-check-label me-3"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsLumpSumN"
                  name="isLumpSum"
                  value="0"
                />
                <label
                  htmlFor="radioIsLumpSumN"
                  className="form-check-label me-2"
                >
                  No
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Guarantee Type Code*
                </label>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="txtGuaranteeTypeCode " value={fromNote.GUARANTEE_TYPE}  onChange={(e) =>
                      setFromNote({ ...fromNote, GUARANTEE_TYPE: e.target.value })
                    }>
                  <option defaultValue>Daily</option>
                  <option value="1">Daily to Monthly</option>
                  <option value="2">Monthly</option>
                  <option value="3">Monthly to Yearly</option>
                  <option value="4">Yearly</option>
                </select>
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Guarantee Method*
                </label>
              </div>
              <div className="col-sm-3 align-items-center d-flex fw-light ">
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioGuaranteeMethod"
                  name="guaranteeMethod"
                  value="1"
                />
                <label
                  htmlFor="radioGuaranteeMethod"
                  className="form-check-label me-3"
                >
                  Guarantee
                </label>
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioExtraMethod"
                  name="guaranteeMethod"
                  value="0"
                />
                <label
                  htmlFor="radioExtraMethod"
                  className="form-check-label me-2"
                >
                  Extra
                </label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Contract Start Date*
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="date"
                  id="txtGuaranteeStartDate"
                  className="form-control"
                  placeholder="DD/MM/YYYY"
                  value={fromNote.DATE_START}
                  onChange={(e) =>
                    setFromNote({ ...fromNote, DATE_START: e.target.value })}

                />
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Contract Expire Date*
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="date"
                  id="txtGuaranteeExpireDate"
                  className="form-control"
                  placeholder="DD/MM/YYYY"
                  value={fromNote.DATE_EXPIRE}
                  onChange={(e) =>
                    setFromNote({ ...fromNote, DATE_EXPIRE: e.target.value })}
                />
              </div>
            </div>
            {/* Guarantee Amount / Hour */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Guarantee Amount / Hour
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="txtGuaranteePerHour"
                  placeholder="0.00"
                />
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Extra / Hour
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control ui-autocomplete-input"
                  id="txtExtraPerHour"
                  placeholder="0.00"
                  readOnly
                />
              </div>
            </div>
            {/* In Guarantee Allocate */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  In Guarantee Allocate
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="txtInGuaranteePct"
                  placeholder="0.00"
                />
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Over Guarantee Allocate
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="txtOverGuaranteePct"
                  placeholder="0.00"
                />
              </div>
            </div>
            {/* Include Revenue To DR. */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Include Revenue To DR.
                </label>
              </div>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="txtIncludeDR" />
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" disabled readOnly />
              </div>
            </div>
            {/* Department  */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Department
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control ui-autocomplete-input input-sm border-end-0"
                    id="department"
                    placeholder="Search"
                  />
                  <span className="input-group-text border-start-0">
                    <FaSearch />
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" disabled readOnly />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Revenue for Guarantee
                </label>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="txtGuaranteeTypeCode">
                  <option defaultValue>---Not specified---</option>
                  <option value="1">DF Before Allocate</option>
                  <option value="2">DF After Allocate</option>
                </select>
              </div>

              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Guarantee by Day
                </label>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="txtGuaranteeTypeCode">
                  <option defaultValue>---Undefine Date---</option>
                  <option value="1">Execute Date</option>
                  <option value="2">Invoice Date</option>
                </select>
              </div>
            </div>

            {/* Absorb/Extra Tax Type */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Absorb/Extra Tax Type
                </label>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="txtGuaranteeTypeCode">
                  <option defaultValue>---None---</option>
                  <option value="1">No Tax</option>
                  <option value="2">Tax 40(2)</option>
                  <option value="2">Tax 40(3)</option>
                </select>
              </div>

              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Guarantee by Category
                </label>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="txtGuaranteeTypeCode">
                  <option defaultValue>---Not specified</option>
                  <option value="1">คำนวณเทียบและจ่ายตาม in/over guarantee (BHQ)</option>
                  <option value="2">คำนวนเทียบและจ่ายหากไม่ถึงจะคืน sharing (BNH)</option>
                  <option value="3">คำนวณส่วนแบ่ง in/over guarantee ก่อนเทียบ (BSR)</option>
                  <option value="4">คำนวณเทียบและจ่ายตาม basic allocate (NEW)</option>
                </select>
              </div>
            </div>
            {/* Early Time */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Earl Time
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control ui-autocomplete-input input-sm border-end-0"
                    id="department"
                    placeholder="0"
                  />
                  <span className="input-group-text border-start-0">
                    min.
                  </span>
                </div>
              </div>
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Late Time
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control ui-autocomplete-input input-sm border-end-0"
                    id="department"
                    placeholder="0"
                  />
                  <span className="input-group-text border-start-0">
                    min.
                  </span>
                </div>
              </div>
            </div>
            {/* Active */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Active
                </label>
              </div>
              <div className="col-sm-3 align-items-center d-flex fw-light ">
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsLumpSumY"
                  name="isLumpSum"
                  value="1"
                />
                <label
                  htmlFor="radioIsLumpSumY"
                  className="form-check-label me-3"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsLumpSumN"
                  name="isLumpSum"
                  value="0"
                />
                <label
                  htmlFor="radioIsLumpSumN"
                  className="form-check-label me-2"
                >
                  No
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="row">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <button
                    type="button"
                    className="btn btn-light btn-sm border border-secondary"
                  >
                    Reset
                  </button>
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-light btn-sm border border-secondary"onClick={save}
                  >
                    Save
                  </button>
                  <Link to="/newpage">
                    <button
                      type="button"
                      className="btn btn-light btn-sm border border-secondary ms-1"
                    >
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

export default Doctor_Guarantee_Create;
