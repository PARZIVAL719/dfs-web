import React from 'react'
import { Link } from "react-router-dom";

function Doctor_Guarantee_Create() {
    return (
        <div className=" fw-semibold font">
            <div className="container">
                <div className="card mt-3">
                    <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
                        <div className="text-light">
                        Doctor Guarantee
                        </div>
                    </header>
                    <div className='card-body d-flex flex-column justify-content-center' id="content">
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Doctor Code*
                                </label>
                            </div>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" id="txtDoctorCode"/>            
                                </div>
                                <div className="col-sm-3 text-sm-end">
                                    <label className="col-form-label control-label ">
                                        Is Lump Sum
                                    </label>
                                </div>
                                <div className="col-sm-3 align-items-center d-flex fw-light ">   
                                    <input type="radio" className="form-check-input me-2" id="radioIsLumpSumY" name="isLumpSum" value="1"/>
                                    <label htmlFor="radioIsLumpSumY" className="form-check-label me-3">
                                        Yes
                                    </label>
                                    <input type="radio" className="form-check-input me-2"  id="radioIsLumpSumN" name="isLumpSum" value="0"/> 
                                    <label htmlFor="radioIsLumpSumN"className="form-check-label me-2" >
                                        No
                                    </label>                       
                                </div>  
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Guarantee Type Code*
                                </label>
                            </div>
                            <div className="col-sm-3">
                                <select className="form-select" id="txtGuaranteeTypeCode">
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
                                <input type="radio" className="form-check-input me-2" id="radioGuaranteeMethod" name="guaranteeMethod" value="1"/>
                                <label htmlFor="radioGuaranteeMethod" className="form-check-label me-3">
                                    Guarantee
                                </label>
                                <input type="radio" className="form-check-input me-2"  id="radioExtraMethod" name="guaranteeMethod" value="0"/> 
                                <label htmlFor="radioExtraMethod"className="form-check-label me-2" >
                                    Extra
                                </label>                       
                            </div> 
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Contract Start Date*
                                </label>
                            </div>
                            <div className="col-sm-3">
                                <input type="date" id="txtGuaranteeStartDate" className="form-control"  placeholder="DD/MM/YYYY"/>
                            </div>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Contract Expire Date*
                                </label>
                            </div>
                            <div className="col-sm-3">
                                <input type="date" id="txtGuaranteeExpireDate" className="form-control"  placeholder="DD/MM/YYYY"/>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Guarantee Amount / Hour
                                </label>
                            </div>
                            <div className="col-sm-3">
                            <input type="text" className="form-control" id="txtGuaranteePerHour" placeholder="0.00"/> 
                            </div>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Extra / Hour
                                </label>
                            </div>
                            <div className="col-sm-3">
                            <input type="text" className="form-control" id="txtExtraPerHour" placeholder="0.00" /> 
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    In Guarantee Allocate
                                </label>
                            </div>
                            <div className="col-sm-3">
                            <input type="text" className="form-control" id="txtInGuaranteePct" placeholder="0.00"/> 
                            </div>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Over Guarantee Allocate
                                </label>
                            </div>
                            <div className="col-sm-3">
                            <input type="text" className="form-control" id="txtOverGuaranteePct" placeholder="0.00"/> 
                            </div>
                        </div>
                        
                        



                        <div className='row mb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <button type="button" className="btn btn-light btn-sm border border-secondary">Reset</button>
                                </div>
                                <div className="d-flex">
                                    <button type="button" className="btn btn-light btn-sm border border-secondary">Save</button>
                                    <Link to="/newpage">
                                        <button type="button" className="btn btn-light btn-sm border border-secondary ms-1">Close</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Doctor_Guarantee_Create