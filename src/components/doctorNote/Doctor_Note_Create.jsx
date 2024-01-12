import React,{ useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import dataNoteJson from "../samlpe_data/get_doctor_note.json"

import { useNavigate} from 'react-router-dom';





const dataNote1 = {

    
    "NOTE_SUBJECT": "",
    "HBN_CODE": "",
    "CODE":"",
    "CONTENT":"",
    "ACTIVE":"1"
}




function Doctor_Note_Create() {

    const [dataNote, setdataNote] = useState(dataNote1)
    const [selectedValue, setSelectedValue] = useState('');
    const [dataArr,setdataArr] = useState([])

    const reset = () => {

        setdataNote(dataNote1)

      }

    const handleChange = (e) =>{
        const selectedOption = e.target.value;
        console.log(selectedOption);
        setdataNote({...dataNote,NOTE_SUBJECT:selectedOption})
        setSelectedValue(selectedOption); 
    }
    const save = () => {
     dataArr.push(dataNote)
     console.log(dataArr);

    }
    
   
    useEffect(()=>{
        console.log(dataNote);
        
      },[])

    return (
    <div className=" fw-semibold font">
        <div className="container">
            <form onReset={reset}>
                <div className="card mt-3">
                    <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
                        <div className="text-light">
                        Doctor Note
                        </div>
                    </header>
                    <div className='card-body d-flex flex-column justify-content-center' id="content" >
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Doctor Code*
                                </label>
                            </div>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" id="fileName"  onChange={(e) => setdataNote({...dataNote,CODE:e.target.value})}/>            
                                </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-3 text-sm-end">
                                <label className="col-form-label control-label ">
                                    Subject*
                                </label>
                            </div>
                            <div className="col-sm-3">
                                <select className="form-select " onChange={handleChange}>
                                    <option defaultValue>--- Select ---</option>
                                    <option value="CONTRACT_EXTEND">สัญญา-ต่อสัญญา</option>
                                    <option value="CONTRACT_CHANGE">สัญญา-ปรับ/เปลี่ยนสัญญา</option>
                                    <option value="	UPDATE_CANCEL">สัญญา-ยกเลิกสัญญา</option>
                                    <option value="DOCUMENT" >เอกสาร</option>
                                    <option value="Other">อื่นๆ</option>                          
                                </select>
                            </div>
                            <div className="col-sm-6">
                                {selectedValue ==='Other'  && (
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
                                <textarea className="form-control input-sm" id="w3review" name="w3review" rows="5"
                                onChange={(e) => setdataNote({...dataNote,CONTENT:e.target.value})}>
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
                                <input type="radio" className="form-check-input me-2" id="radioActive1" name="radioActive" value="1"
                                checked={dataNote.ACTIVE == "1"}
                                onChange={(e) => setdataNote({...dataNote,ACTIVE:e.target.value})}/>
                                <label htmlFor="radioActive1" className="form-check-label me-3">
                                    Active
                                </label>
                                <input type="radio" className="form-check-input me-2"  id="radioActive0" name="radioActive" value="0"
                                checked={dataNote.ACTIVE == "0"}
                                onChange={(e) => setdataNote({...dataNote,ACTIVE:e.target.value})}/> 
                                <label htmlFor="radioActive0"className="form-check-label me-2" >
                                    Inactive
                                </label>                       
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <input type="reset" className="btn btn-light mb-3 " value="Reset" />
                                </div>
                                <div className="d-flex">
                                 
                                     
                                <button type="button" className="btn btn-light btn-sm border border-secondary" onClick={save}  >Save</button>


                                    <Link to= "/newpage">
                                        <button type="button" className="btn btn-light btn-sm border border-secondary ms-1" >Close</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
  }
  
  export default Doctor_Note_Create