import React from "react";
import { FaSearch } from "react-icons/fa";
function Doctor_Payment() {
  return (
    <div>
      <header className="card-header navbar bg-secondary py-2">
        <div className="text-light">Payment/Tax Information</div>
      </header>
      <div className="card-body">
        {/* Payment Mode*  */}
        <div className='row align-items-center'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="doctorProfile_Code" className='col-form-label'>
            Payment Mode*
            </label>
          </div>
          <div className='col-sm-3 '>
            <select className="form-select ">
              <option defaultValue>--- Select ---</option>
              <option value="1">Bank</option>
              <option value="2">Cash</option>
              <option value="3">Cheque</option>
              <option value="4">Unpaid</option>
            </select>
          </div>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="doctorProfile_Code" className='col-form-label'>
            Payment Revenue to Code
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
        {/* Advance Payment* */}
        <div className='row my-3 align-items-center'>
          <div className='col-sm-3 text-sm-end '>
          Advance Payment*
          </div>
          <div className='col-sm-9 col-md-3 align-items-center d-flex fw-light'>
            <input type="radio" className="form-check-input me-2" id="radioAdPayment0" name="radioAdPayment"/>
            <label htmlFor="radioAdPayment0" className="form-check-label me-3 text-nowrap">
              AdPayment
            </label>
            <input type="radio" className="form-check-input me-2" id="radioAdPayment1" name="radioAdPayment"/>
            <label htmlFor="radioAdPayment1" className="form-check-label me-3 text-nowrap">
              No
            </label>
          </div>
          <div className='col-sm-3 text-sm-end '>
          Time to Payment*
          </div>
          <div className='col-sm-9 col-md-3 align-items-center d-flex fw-light'>
            <input type="radio" className="form-check-input me-2" id="radioTimeToPay0" name="radioTimeToPay"/>
            <label htmlFor="radioTimeToPay0" className="form-check-label me-3">
              2 Time
            </label>
            <input type="radio" className="form-check-input me-2" id="radioTimeToPay1" name="radioTimeToPay"/>
            <label htmlFor="radioTimeToPay1" className="form-check-label me-3">
              1 Time
            </label>
          </div>
        </div>
        {/* Tax ID / Nation ID */}
        <div className='row mt-3 align-items-center'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="doctorProfile_Code" className='col-form-label'>
            Tax ID / Nation ID
            </label>
          </div>
          <div className='col-sm-3 '>
            <input type="text" name="taxId" id="texttaxId" className='form-control'/>
          </div>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="taxId" className='col-form-label'>
            Pay Tax by*
            </label>
          </div>
          <div className='col-sm-3 '>
            <select className="form-select ">
              <option defaultValue>--- Select ---</option>
              <option value="1">Bank</option>
              <option value="2">Cash</option>
              <option value="3">Cheque</option>
              <option value="4">Unpaid</option>
            </select>
          </div>
        </div>
                {/* Include 40(2) Revenue to Code & Include 40(2) Revenue to Code */}
        <div className='row mt-3 align-items-center'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="doctorProfile_Code" className='col-form-label'>
            Include 40(2) Revenue to Code
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
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="taxId" className='col-form-label'>
            Tax 40(2) Calculation
            </label>
          </div>
          <div className='col-sm-3 '>
            <select className="form-select ">
              <option defaultValue>--- Select ---</option>
              <option value="1">Bank</option>
              <option value="2">Cash</option>
              <option value="3">Cheque</option>
              <option value="4">Unpaid</option>
            </select>
          </div>
        </div>
        {/* Include 40(6) Revenue to Code & Include 40(6) Revenue to Code */}
        <div className='row mt-3 align-items-center'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="doctorProfile_Code" className='col-form-label'>
            Include 40(6) Revenue to Code
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
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="taxId" className='col-form-label'>
            Tax 40(6) Calculation
            </label>
          </div>
          <div className='col-sm-3 '>
            <select className ="form-select ">
              <option defaultValue>--- Select ---</option>
              <option value="1">Bank</option>
              <option value="2">Cash</option>
              <option value="3">Cheque</option>
              <option value="4">Unpaid</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Payment;
