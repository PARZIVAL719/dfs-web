import React,{ useState } from 'react'
import { Link } from "react-router-dom";

function Doctor_Note_Create() {

    const [subject, setSubject] = useState('')
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) =>{
        setSelectedValue(e.target.value)
    }

    return (
            <div className=" fw-semibold font">
                <div className="container">
                    <div className="card mt-3">
                        <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
                            <div className="text-light">
                            Doctor Note
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
                                        <input type="text" className="form-control" id="fileName"/>            
                                    </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-sm-3 text-sm-end">
                                    <label className="col-form-label control-label ">
                                        Subject*
                                    </label>
                                </div>
                                <div className="col-sm-3">
                                    <select className="form-select " onChange={handleChange} >
                                        <option defaultValue>--- Select ---</option>
                                        <option value="1">สัญญา-ต่อสัญญา</option>
                                        <option value="2">สัญญา-ปรับ/เปลี่ยนสัญญา</option>
                                        <option value="3">สัญญา-ยกเลิกสัญญา</option>
                                        <option value="4">เอกสาร</option>
                                        <option value="5">อื่นๆ</option>                          
                                    </select>
                                </div>
                                <div className="col-sm-3">
                                    {selectedValue ==='5' && (
                                    <input type="text" className="form-control" id="fileName"/>
                                    )
                                }
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-sm-3 text-sm-end">
                                    <label className="col-form-label control-label ">
                                        Content*
                                    </label>
                                </div>

                                <div className="col-sm-6">
                                    <textarea className="form-control input-sm" id="w3review" name="w3review" rows="5">
                                    </textarea>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-sm-3 text-sm-end">
                                    <label className="col-form-label control-label ">
                                        Active
                                    </label>
                                </div>
                                <div className="col-sm-3 align-items-center d-flex fw-light ">   
                                    <input type="radio" className="form-check-input me-2" id="radioActive1" name="radioActive" value="1"/>
                                    <label htmlFor="radioActive1" className="form-check-label me-3">
                                        Active
                                    </label>
                                    <input type="radio" className="form-check-input me-2"  id="radioActive0" name="radioActive" value="0"/> 
                                    <label htmlFor="radioActive0"className="form-check-label me-2" >
                                        Inactive
                                    </label>                       
                                </div>
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
  
  export default Doctor_Note_Create