import React from 'react'
import { Link } from "react-router-dom";
function Doctor_Detail() {
  return (
      <div>
        <header className="card-header bg-secondary py-1 d-flex justify-content-between align-items-center">
          <div className="text-light">Doctor Detail</div>
          <div>
            <button type="button" className="btn btn-light btn-sm border border-secondary">Save</button>

            <button type="button" className="btn btn-light btn-sm border border-secondary">Reset</button>
            <Link to="/">
            <button type="button" className="btn btn-light btn-sm border border-secondary">Close</button>
            </Link>
          </div>
        </header>
        <div className='card-body'>
          <div className='row mt-3 align-items-center'>
            <div className='col-sm-3 text-sm-end'>
              <label htmlFor="doctorProfile_Code" className='col-form-label'>
                Doctor Profile Code*
              </label>
            </div>
            <div className='col-sm-3 '>
              <input type="text" name="doctorProfileCode" id="textdoctorProfileCode" className='form-control'/>
            </div>
            <div className='col-sm-6 '>
              <input type="text" name="doctorProfileDesc" id="textdoctorProfileDesc" className='form-control'/>
            </div>
          </div>
          <div className='row mt-3 align-items-center'>
            <div className='col-sm-3 text-sm-end'>
              <label htmlFor="doctorCode" className='col-form-label'>
                Doctor Code*
              </label>
            </div>
            <div className='col-sm-3 '>
              <input type="text" name="doctorCode" id="textdoctorCode" className='form-control'/>
            </div>
            <div className='col-sm-3 text-sm-end '>
                Resign
            </div>
            <div className='col-sm-3 align-items-center d-flex fw-light'>
              <input type="radio" className="form-check-input me-2" id="radioResign1" name="radioActive"/>
              <label htmlFor="radioResign1" className="form-check-label me-3">
                Yes
              </label>
              <input type="radio" className="form-check-input me-2" id="radioResign1" name="radioActive"/>
              <label htmlFor="radioResign1" className="form-check-label me-3">
                No
              </label>
            </div>
          </div>
          <div className='row mt-3 align-items-center'>
            <div className='col-sm-3 text-sm-end'>
              <label htmlFor="doctorProfile_Code" className='col-form-label'>
                Name (ENG)*
              </label>
            </div>
            <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="textdoctorProfileCode" className='form-control'/>
            </div>
          </div>
          <div className='row mt-3 align-items-center'>
            <div className='col-sm-3 text-sm-end'>
              <label htmlFor="doctorProfile_Code" className='col-form-label'>
              Name (TH)*
              </label>
            </div>
            <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="textdoctorProfileCode" className='form-control'/>
            </div>
          </div>
          <div className='row my-3 align-items-center'>
            <div className='col-sm-3 text-sm-end '>
                Person*
            </div>
            <div className='col-sm-3 align-items-center d-flex fw-light'>
              <input type="radio" className="form-check-input me-2" id="radioPerson0" name="radioPerson"/>
              <label htmlFor="radioPerson0" className="form-check-label me-3 text-nowrap">
                Individual 
              </label>
              <input type="radio" className="form-check-input me-2" id="radioPerson1" name="radioPerson"/>
              <label htmlFor="radioPerson1" className="form-check-label me-3 text-nowrap">
                Juristic Person
              </label>
            </div>
            <div className='col-sm-3 text-sm-end '>
                Active
            </div>
            <div className='col-sm-3 align-items-center d-flex fw-light'>
              <input type="radio" className="form-check-input me-2" id="radioActive0" name="radioActive"/>
              <label htmlFor="radioActive0" className="form-check-label me-3">
                Active
              </label>
              <input type="radio" className="form-check-input me-2" id="radioActive1" name="radioActive"/>
              <label htmlFor="radioActive1" className="form-check-label me-3">
                Inactive
              </label>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Doctor_Detail