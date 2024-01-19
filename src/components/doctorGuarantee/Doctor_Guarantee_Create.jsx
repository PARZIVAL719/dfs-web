import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { doctorContext } from "../globalState/DoctorDetailState";
import moment from "moment";
import { NumericFormat } from "react-number-format";

const garunteeNote = {
  ABSORB_EXTRA_TAX_TYPE: "",
  ACTIVE: "1",
  CONTRACT_EXPIRE_DATE: "",
  CONTRACT_START_DATE: "",
  DEPARTMENT: "",
  DOCTOR_CODE: "",
  EARLY_TIME: "",
  EXTRA_HOUR: "0",
  GUARANTEE_AMOUNT_HOUR: "",
  GUARANTEE_BY_DAY: "",
  GUARANTEE_METHOD: "",
  GUARANTEE_TYPE_CODE: "",
  GUARATEE_CATEGORY: "",
  INCLUDE_REVENUE_TO_DR: "",
  IN_GUARANTEE_ALLOCATE: "",
  IS_LUMP_SUM: "",
  LATE_TIME: "",
  OVER_GUARANTEE_ALLOCATE: "",
  REVENUE_FOR_GUARANTEE: "",
};

function Doctor_Guarantee_Create() {
  const [fromGuarantee, setFromGuarantee] = useState(garunteeNote);

  const { guarantee, setGuarantee } = useContext(doctorContext);

  const location = useLocation();

  const handleChange = (e, field) => {
    setFromGuarantee({ ...fromGuarantee, [field]: e.target.value });
  };

  const save = () => {
    setGuarantee([...guarantee, fromGuarantee]);
    console.log(guarantee);
    console.log("Click save gurantee");
  };

  useEffect(() => {
    console.log(fromGuarantee);
    if (location?.state?.row) setFromGuarantee(location?.state?.row);

    // console.log(location?.state?.row);
  }, [location]);
  // useEffect(() => {
  //   // console.log(fromGuarantee);
  // }, [fromGuarantee]);

  return (
    <div className=" fw-semibold font">
      <div className="container">
        <div className="card mt-3">
          <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
            <div className="text-light">Doctor Guarantee</div>
          </header>
          <div
            className="card-body d-flex flex-column justify-content-center"
            id="content"
          >
            <div className="row mb-3">
              {/* Doctor Code* */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtDoctorCode"
                  className="col-form-label control-label "
                >
                  Doctor Code*
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="txtDoctorCode"
                  disabled
                  readOnly
                  value={fromGuarantee?.DOCTOR_CODE || ""}
                />
              </div>
              {/* Is Lump Sum */}
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">
                  Is Lump Sum
                </label>
              </div>
              <div className="col-sm-3 align-items-center d-flex fw-light ">
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsLumpSum"
                  name="isLumpSum"
                  value="1"
                  checked={fromGuarantee?.IS_LUMP_SUM === "1"}
                  onChange={(e) => handleChange(e, "IS_LUMP_SUM")}
                />
                <label
                  htmlFor="radioIsLumpSum"
                  className="form-check-label me-3"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsNotLumpSum"
                  name="isLumpSum"
                  value="0"
                  checked={fromGuarantee?.IS_LUMP_SUM === "0"}
                  onChange={(e) => handleChange(e, "IS_LUMP_SUM")}
                />
                <label
                  htmlFor="radioIsNotLumpSum"
                  className="form-check-label me-2"
                >
                  No
                </label>
              </div>
            </div>
            <div className="row mb-3">
              {/* Guarantee Type Code* */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="selGuaranteeTypeCode"
                  className="col-form-label control-label "
                >
                  Guarantee Type Code*
                </label>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  id="selGuaranteeTypeCode"
                  value={fromGuarantee?.GUARANTEE_TYPE_CODE || ""}
                  // defaultValue="0"
                  onChange={(e) => handleChange(e, "GUARANTEE_TYPE_CODE")}
                >
                  <option value="0">Daily</option>
                  <option value="1">Daily to Monthly</option>
                  <option value="2">Monthly</option>
                  <option value="3">Monthly to Yearly</option>
                  <option value="4">Yearly</option>
                </select>
              </div>
              {/* Guarantee Method* */}
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
                  value="GA"
                  checked={fromGuarantee?.GUARANTEE_METHOD == "GA"}
                  onChange={(e) => handleChange(e, "GUARANTEE_METHOD")}
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
                  value="GEA"
                  checked={fromGuarantee?.GUARANTEE_METHOD == "GEA"}
                  onChange={(e) => handleChange(e, "GUARANTEE_METHOD")}
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
              {/* Contract Start Date* */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtGuaranteeStartDate"
                  className="col-form-label control-label "
                >
                  Contract Start Date*
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="date"
                  id="txtGuaranteeStartDate"
                  className="form-control"
                  placeholder="DD/MM/YYYY"
                  value={moment(
                    fromGuarantee?.CONTRACT_START_DATE || ""
                  ).format("yyyy-MM-DD")}
                  onChange={(e) => handleChange(e, "CONTRACT_START_DATE")}
                />
              </div>
              <div className="col-sm-3 text-sm-end">
                {/* Contract Expire Date* */}
                <label
                  htmlFor="txtGuaranteeExpireDate"
                  className="col-form-label control-label "
                >
                  Contract Expire Date*
                </label>
              </div>
              <div className="col-sm-3">
                <input
                  type="date"
                  id="txtGuaranteeExpireDate"
                  className="form-control"
                  placeholder="DD/MM/YYYY"
                  value={moment(
                    fromGuarantee?.CONTRACT_EXPIRE_DATE || ""
                  ).format("yyyy-MM-DD")}
                  onChange={(e) => handleChange(e, "CONTRACT_EXPIRE_DATE")}
                />
              </div>
            </div>
            <div className="row mb-3">
              {/* Guarantee Amount / Hour */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtGuaranteePerHour"
                  className="col-form-label control-label "
                >
                  Guarantee Amount / Hour
                </label>
              </div>
              <div className="col-sm-3">
                <NumericFormat
                  className="form-control input-number"
                  type="text"
                  id="txtGuaranteePerHour"
                  placeholder="0.00"
                  value={fromGuarantee?.GUARANTEE_AMOUNT_HOUR || ""}
                  disabled={!(fromGuarantee?.GUARANTEE_METHOD == "GA")}
                  thousandSeparator={true}
                  decimalScale={2}
                  fixedDecimalScale={2}
                  onChange={(e) => handleChange(e, "GUARANTEE_AMOUNT_HOUR")}
                />
              </div>
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtExtraPerHour"
                  className="col-form-label control-label "
                >
                  Extra / Hour
                </label>
              </div>
              <div className="col-sm-3">
                <NumericFormat
                  className="form-control input-number"
                  type="text"
                  id="txtGuaranteePerHour"
                  placeholder="0.00"
                  value={fromGuarantee?.EXTRA_HOUR || ""}
                  disabled={!(fromGuarantee?.GUARANTEE_METHOD == "GEA")}
                  thousandSeparator={true}
                  decimalScale={2}
                  fixedDecimalScale={2}
                  onChange={(e) => handleChange(e, "EXTRA_HOUR")}
                />
              </div>
            </div>
            <div className="row mb-3">
              {/* In Guarantee Allocate */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtInGuaranteeAlc"
                  className="col-form-label control-label "
                >
                  In Guarantee Allocate
                </label>
              </div>
              <div className="col-sm-3">
                <div className="input-group ">
                  <NumericFormat
                    className="form-control border-end-0"
                    type="text"
                    id="txtGuaranteePerHour"
                    placeholder="0.00"
                    value={fromGuarantee?.IN_GUARANTEE_ALLOCATE || ""}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={2}
                    onChange={(e) => handleChange(e, "IN_GUARANTEE_ALLOCATE")}
                  />
                  <span className="input-group-text border-start-0">%</span>
                </div>
              </div>
              {/* Over Guarantee Allocate */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtOverGuaranteeAlc"
                  className="col-form-label control-label "
                >
                  Over Guarantee Allocate
                </label>
              </div>
              <div className="col-sm-3">
                <div className="input-group ">
                  <NumericFormat
                    className="form-control border-end-0"
                    type="text"
                    id="txtGuaranteePerHour"
                    placeholder="0.00"
                    value={fromGuarantee?.OVER_GUARANTEE_ALLOCATE || ""}
                    // disabled={!(fromGuarantee?.GUARANTEE_METHOD == "GEA")}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={2}
                    onChange={(e) => handleChange(e, "OVER_GUARANTEE_ALLOCATE")}
                  />
                  <span className="input-group-text border-start-0">%</span>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              {/* Include Revenue To DR. AutoComplete*/}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="revenueAutoComplete"
                  className="col-form-label control-label "
                >
                  Include Revenue To DR.
                </label>
              </div>
              <div className="col-sm-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    id="revenueAutoComplete"
                    placeholder="Search"
                    value={fromGuarantee?.INCLUDE_REVENUE_TO_DR}
                    onChange={(e) => handleChange(e, "INCLUDE_REVENUE_TO_DR")}
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
              {/* Department  AutoComplete*/}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="departmentAutoComplete"
                  className="col-form-label control-label "
                >
                  Department
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    id="departmentAutoComplete"
                    placeholder="Search"
                    value={fromGuarantee?.DEPARTMENT || ""}
                    readOnly
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
              {/* Revenue for Guarantee */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="selRevenueGuarantee"
                  className="col-form-label control-label "
                >
                  Revenue for Guarantee
                </label>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  id="selRevenueGuarantee"
                  // defaultValue="BF"
                  value={fromGuarantee?.REVENUE_FOR_GUARANTEE || ""}
                  onChange={(e) => handleChange(e, "REVENUE_FOR_GUARANTEE")}
                >
                  <option value="NONE">---Not specified---</option>
                  <option value="BF">DF Before Allocate</option>
                  <option value="AF">DF After Allocate</option>
                </select>
              </div>
              {/* Guarantee by Day */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="selGuaranteeDay"
                  className="col-form-label control-label "
                >
                  Guarantee by Day
                </label>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  id="selGuaranteeDay"
                  // defaultValue="EX"
                  value={fromGuarantee?.GUARANTEE_BY_DAY || ""}
                  onChange={(e) => handleChange(e, "GUARANTEE_BY_DAY")}
                >
                  <option value="">---Undefine Date---</option>
                  <option value="VER">Execute Date</option>
                  <option value="INV">Invoice Date</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              {/* Absorb/Extra Tax Type */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="selAbsorbType"
                  className="col-form-label control-label "
                >
                  Absorb/Extra Tax Type
                </label>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  id="selAbsorbType"
                  value={fromGuarantee?.ABSORB_EXTRA_TAX_TYPE || ""}
                  // defaultValue="0"
                  onChange={(e) => handleChange(e, "ABSORB_EXTRA_TAX_TYPE")}
                >
                  <option value="">---None---</option>
                  <option value="400">No Tax</option>
                  <option value="402">Tax 40(2)</option>
                  <option value="406">Tax 40(3)</option>
                </select>
              </div>
              {/* Guarantee by Category */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="selGuaranteeCategory"
                  className="col-form-label control-label "
                >
                  Guarantee by Category
                </label>
              </div>
              <div className="col-sm-3">
                <select
                  className="form-select"
                  id="selGuaranteeCategory"
                  value={fromGuarantee?.GUARATEE_CATEGORY || ""}
                  // defaultValue="0"
                  onChange={(e) => handleChange(e, "GUARATEE_CATEGORY")}
                >
                  <option value="">---Not specified</option>
                  <option value="Y">
                    คำนวณเทียบและจ่ายตาม in/over guarantee (BHQ)
                  </option>
                  <option value="N">
                    คำนวนเทียบและจ่ายหากไม่ถึงจะคืน sharing (BNH)
                  </option>
                  <option value="A">
                    คำนวณส่วนแบ่ง in/over guarantee ก่อนเทียบ (BSR)
                  </option>
                  <option value="P">
                    คำนวณเทียบและจ่ายตาม basic allocate (NEW)
                  </option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              {/* Early Time */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtEarlyTime"
                  className="col-form-label control-label "
                >
                  Earl Time
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    id="txtEarlyTime"
                    placeholder="0"
                    value={fromGuarantee?.EARLY_TIME || ""}
                    onChange={(e) => handleChange(e, "EARLY_TIME")}
                  />
                  <span className="input-group-text border-start-0">min.</span>
                </div>
              </div>
              {/* Late Time */}
              <div className="col-sm-3 text-sm-end">
                <label
                  htmlFor="txtLateTime"
                  className="col-form-label control-label "
                >
                  Late Time
                </label>
              </div>
              <div className="col-sm-3 ">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    id="txtLateTime"
                    placeholder="0"
                    value={fromGuarantee?.LATE_TIME || ""}
                    onChange={(e) => handleChange(e, "LATE_TIME")}
                  />
                  <span className="input-group-text border-start-0">min.</span>
                </div>
              </div>
            </div>
            {/* Active */}
            <div className="row mb-3">
              <div className="col-sm-3 text-sm-end">
                <label className="col-form-label control-label ">Active</label>
              </div>
              <div className="col-sm-3 align-items-center d-flex fw-light ">
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsActive"
                  name="IsActive"
                  value="1"
                  checked={fromGuarantee?.ACTIVE === "1"}
                  onChange={(e) => handleChange(e, "ACTIVE")}
                />
                <label
                  htmlFor="radioIsActive"
                  className="form-check-label me-3"
                >
                  Active
                </label>
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id="radioIsNotActive"
                  name="IsNotActive"
                  value="0"
                  checked={fromGuarantee?.ACTIVE === "0"}
                  onChange={(e) => handleChange(e, "ACTIVE")}
                />
                <label
                  htmlFor="radioIsNotActive"
                  className="form-check-label me-2"
                >
                  Inactive
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
                    className="btn btn-light btn-sm border border-secondary"
                    onClick={save}
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
