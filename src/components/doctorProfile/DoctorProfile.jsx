import DoctorDisplay from "./DoctorDisplay";
import { FaSearch } from "react-icons/fa";
import  { useState, useEffect } from "react";
import axios from "axios";

import doctorProfileJson from "../samlpe_data/getDoctorProfileDetail.json"



const initialState1 = {
    "TELEPHONE": "",
    "EMPLOYEE_ID": "",
    "LICENSE_ID": "",
    "NAME_ENG": "",
    "ACTIVE": "1",
    "UPDATE_DATE": "",
    "USER_ID": "",
    "UPDATE_TIME": "",
    "CODE": "",
    "NATION_ID": "",
    "NAME_THAI": "",
    "BIRTH_DATE": "",
    "HOSPITAL_CODE": ""
}

const initialState = doctorProfileJson

function DoctorProfile() {

  
  const [profileCode, setProfileCode] = useState(initialState)
  const [listDoc ,setListDoc] = useState([])
  
  const reset = () => {
    setProfileCode(initialState)
  }

  const save = ()=>{
    console.log(profileCode);
  }


  
  useEffect(()=>{
    // console.log(doctorProfileJson)
    const fetch = ()=>{
      // let formData = new FormData()
      // formData.append("hospitalCode","DEMO")
      // formData.append("doctorProfileCode",profileCode.code)
      // await axios.post(`http://103.82.248.222:8989/autoComplete/lookup_mst_doctor_profile`,formData)
      // .then(res=>{
      //   setListDoc(res.data)
      // })
      // console.log(res.data);
    }
    fetch()
    
  },[profileCode.CODE])

  return (
    
    
  <div className="fw-semibold font">
    <div className="container">

            <div className="card mt-3">
              <header className="card-header navbar bg-secondary py-2" >
                <div  className="text-light">Doctor Profile"</div>
              </header>
                <div className="px-2">
                 <div className="row mt-3" >
                  <div className="col-sm-3 text-sm-end">
                    <label htmlFor="doctorProfile"className="col-form-label control-label ">
                      Doctor Profile Code*
                    </label>
                  </div>
                  <div className="col-sm-3 ">
                    <div className="input-group">
                      <input type="text" className="form-control input-sm border-end-0" id="doctorProfile"  placeholder="Search" 
                      value={profileCode.CODE} onChange={(e) => setProfileCode({...profileCode,CODE:e.target.value})}/> 
                        <span className="input-group-text border-start-0">
                          <FaSearch />
                        </span>

                    </div>
                    <ul className="list-group">
                      {listDoc?.map(item=>(
                        <li className="list-group-item">{item.value}</li>
                      ))}
                    </ul>
                  </div>
        

                <div className="col-sm-3 text-sm-end ">
          <label className="col-form-label">
            Active
          </label>
        </div>
        <div className="col-sm-3 align-items-center d-flex fw-light ">   
            <input type="radio" className="form-check-input me-2" id="radioActive1" name="radioActive" value="1"
              checked={profileCode.ACTIVE == "1"}
              onChange={(e) => setProfileCode({...profileCode,ACTIVE:e.target.value})} />
            <label htmlFor="radioActive1" className="form-check-label me-3">
              Active
            </label>
            <input type="radio" className="form-check-input me-2"  id="radioActive0" name="radioActive"
              value="0"
              checked={profileCode.ACTIVE === "0"}
              onChange={(e) => setProfileCode({...profileCode,ACTIVE:e.target.value})} /> 
            <label htmlFor="radioActive0"className="form-check-label me-2" >
              Inactive
            </label>
        </div>
      </div>
      <div className="row mt-3 mb-3 ">
        <div className="col-sm-3 text-sm-end">
        <label
          htmlFor="employeeID"
          className=" col-form-label control-label ">
          Employee ID
        </label>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="employeeID"
          value={profileCode.EMPLOYEE_ID} onChange={(e) => setProfileCode({...profileCode,EMPLOYEE_ID:e.target.value})} />
        </div>
        <div className="col-sm-3 text-sm-end">
          <label className="col-form-label">
            Nation ID
          </label>
        </div>
        <div className="col-sm-3 d-flex gx-3  ">
          <input type="text" className="form-control" id="nationId" 
          value={profileCode.NATION_ID} onChange={(e) => setProfileCode({...profileCode,NATION_ID:e.target.value})}/>

          </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="nameEng" className="col-sm-3 col-form-label control-label text-sm-end">
          Name (ENG)*
        </label>
        <div className="col-sm-6">
          <input type="text" className="form-control" id="nameEng" 
          value={profileCode.NAME_ENG} onChange={(e) => setProfileCode({...profileCode,NAME_ENG:e.target.value})}/>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="nameTH" className="col-sm-3 col-form-label control-label text-sm-end">
          Name (TH)*
        </label>
        <div className="col-sm-6">
          <input type="text" className="form-control" id="nameTH"
          value={profileCode.NAME_THAI} onChange={(e) => setProfileCode({...profileCode,NAME_THAI:e.target.value})} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="nameTH" className="col-sm-3 col-form-label control-label text-sm-end">
          Phone No.*
        </label>
        <div className="col-sm-6">
          <input type="text" required className="form-control" id="nameTH"
          value={profileCode.TELEPHONE} onChange={(e) => setProfileCode({...profileCode,TELEPHONE:e.target.value})} />
        </div>
      </div>

      <div className="row mt-3 mb-3 ">
        <label htmlFor="nameTH" className="col-sm-3 col-form-label control-label text-sm-end">
          License ID
        </label>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="nameTH"
          value={profileCode.LICENSE_ID} onChange={(e) => setProfileCode({...profileCode,LICENSE_ID:e.target.value})} />
        </div>
        <div className="col-sm-3 text-sm-end">
          <label className="col-form-label">
            Birth Date
          </label>
        </div>
        <div className="col-sm-3">
            <input type="date" id="date" className="form-control"  placeholder="DD/MM/YYYY"
            value={profileCode.BIRTH_DATE} onChange={(e) => setProfileCode({...profileCode,BIRTH_DATE:e.target.value})} />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div >
          <button type="button" className="btn btn-light mb-3 " onClick={reset}>Reset</button>
        </div>
        <div className="d-flex gap-3  ">
          <button type="button" className="btn btn-light btn-sm mb-3 ">Display</button>
          <button type="button" className="btn btn-light btn-sm mb-3 " onClick={save}>Save</button>
        </div>
      </div>
    </div>
    <DoctorDisplay data={null} />
    </div>
  </div>
  </div>

  

    
  );
}

export default DoctorProfile;
