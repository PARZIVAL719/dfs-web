import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { doctorAllDetailsContext } from "./Doctor_Display_Detail";

const intitial = {
  ADVANCE_PAYMENT: "Y",
  INCLUDE_40_2_REVENUE_TO_CODE: "DR001",
  INCLUDE_40_6_REVENUE_TO_CODE: "DR001",
  PAYMENT_MODE: "CQ",
  PAYMENT_REVENUE_CODE: "DR001",
  PAY_TAX_BY: "0",
  TAX_40_2_CALCULATION: "STP",
  TAX_40_6_CALCULATION: "SUM",
  TAX_ID: "",
  TIME_TO_PAYMENT: "2",
};

function Doctor_Payment() {
  const { payment, setPayment } = useContext(doctorAllDetailsContext);
  console.log(payment);

  const handleChange = (e, field) => {
    setPayment({ ...payment, [field]: e.target.value });
  };

  // useEffect(()=>{
  //   setPayment()
  // })

  return (
    <div>
      <header className="card-header navbar bg-secondary py-2">
        <div className="text-light">Payment/Tax Information</div>
      </header>
      <div className="card-body">
        {/* Payment Mode*  */}
        <div className="row align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Payment Mode*
            </label>
          </div>
          <div className="col-sm-3 ">
            <select
              className="form-select "
              value={payment?.PAYMENT_MODE || ""}
              onChange={(e) => handleChange(e, "PAYMENT_MODE")}
            >
              <option value="">--- Select ---</option>
              <option value="B">Bank</option>
              <option value="C">Cash</option>
              <option value="CQ">Cheque</option>
              <option value="U">Unpaid</option>
            </select>
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Payment Revenue to Code
            </label>
          </div>
          <div className="col-sm-3 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control ui-autocomplete-input input-sm border-end-0"
                id="doctorProfile"
                placeholder="Search"
                value={payment?.PAYMENT_REVENUE_CODE || ""}
                onChange={(e) => handleChange(e, "PAYMENT_REVENUE_CODE")}
              />
              <span className="input-group-text border-start-0">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>
        {/* Advance Payment* */}
        <div className="row my-3 align-items-center">
          <div className="col-sm-3 text-sm-end ">Advance Payment*</div>
          <div className="col-sm-9 col-md-3 align-items-center d-flex fw-light">
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioAdPayment0"
              name="radioAdPayment"
              value="Y"
              checked={payment?.ADVANCE_PAYMENT == "Y"}
              onChange={(e) => handleChange(e, "ADVANCE_PAYMENT")}
            />
            <label
              htmlFor="radioAdPayment0"
              className="form-check-label me-3 text-nowrap"
            >
              Yes
            </label>
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioAdPayment1"
              name="radioAdPayment"
              value="N"
              checked={payment?.ADVANCE_PAYMENT == "N"}
              onChange={(e) => handleChange(e, "ADVANCE_PAYMENT")}
            />
            <label
              htmlFor="radioAdPayment1"
              className="form-check-label me-3 text-nowrap"
            >
              No
            </label>
          </div>
          <div className="col-sm-3 text-sm-end ">Time to Payment*</div>
          <div className="col-sm-9 col-md-3 align-items-center d-flex fw-light">
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioTimeToPay0"
              name="radioTimeToPay"
              value="Y"
              checked={payment?.TIME_TO_PAYMENT == "Y"}
              onChange={(e) => handleChange(e, "TIME_TO_PAYMENT")}
            />
            <label htmlFor="radioTimeToPay0" className="form-check-label me-3">
              2 Time
            </label>
            <input
              type="radio"
              className="form-check-input me-2"
              id="radioTimeToPay1"
              name="radioTimeToPay"
              value="N"
              checked={payment?.TIME_TO_PAYMENT == "N"}
              onChange={(e) => handleChange(e, "TIME_TO_PAYMENT")}
            />
            <label htmlFor="radioTimeToPay1" className="form-check-label me-3">
              1 Time
            </label>
          </div>
        </div>
        {/* Tax ID / Nation ID */}
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Tax ID / Nation ID
            </label>
          </div>
          <div className="col-sm-3 ">
            <input
              type="text"
              name="taxId"
              id="texttaxId"
              className="form-control"
              value={payment?.TAX_ID || ""}
              onChange={(e) => handleChange(e, "TAX_ID")}
            />
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="taxId" className="col-form-label">
              Pay Tax by*
            </label>
          </div>
          <div className="col-sm-3 ">
            <select className="form-select" value={payment?.PAY_TAX_BY || ""} onChange={e=>handleChange(e,"PAY_TAX_BY")}>
              <option value="0">Doctor</option>
              <option value="1">Hospital</option>
            </select>
          </div>
        </div>
        {/* Include 40(2) Revenue to Code & Include 40(2) Revenue to Code */}
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Include 40(2) Revenue to Code
            </label>
          </div>
          <div className="col-sm-3 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control ui-autocomplete-input input-sm border-end-0"
                id="doctorProfile"
                placeholder="Search"
              />
              <span className="input-group-text border-start-0">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="taxId" className="col-form-label">
              Tax 40(2) Calculation
            </label>
          </div>
          <div className="col-sm-3 ">
            <select className="form-select ">
              <option defaultValue>--- Not specified ---</option>
              <option value="SUM">Summary Revenue</option>
              <option value="STP">Step Allocate</option>
              <option value="3">WithHolding Tax 3%</option>
              <option value="5">WithHolding Tax 5%</option>
              <option value="14">WithHolding Tax 14%</option>
              <option value="15">WithHolding Tax 15</option>
            </select>
          </div>
        </div>
        {/* Include 40(6) Revenue to Code & Include 40(6) Revenue to Code */}
        <div className="row mt-3 align-items-center">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="doctorProfile_Code" className="col-form-label">
              Include 40(6) Revenue to Code
            </label>
          </div>
          <div className="col-sm-3 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control ui-autocomplete-input input-sm border-end-0"
                id="doctorProfile"
                placeholder="Search"
              />
              <span className="input-group-text border-start-0">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="taxId" className="col-form-label">
              Tax 40(6) Calculation
            </label>
          </div>
          <div className="col-sm-3 ">
            <select className="form-select ">
              <option defaultValue>--- Not specified ---</option>
              <option value="SUM">Summary Revenue</option>
              <option value="STP">Step Allocate</option>
              <option value="3">WithHolding Tax 3%</option>
              <option value="5">WithHolding Tax 5%</option>
              <option value="14">WithHolding Tax 14%</option>
              <option value="15">WithHolding Tax 15</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Payment;
