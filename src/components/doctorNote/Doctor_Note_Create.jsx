import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import dataNoteJson from "../samlpe_data/get_doctor_note.json";
import { doctorContext } from "../globalState/DoctorDetailState.jsx";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Modal } from "bootstrap";
import $ from "jquery";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";

const dataNote1 = {
  DATE: "",
  TIME: "",
  NOTE_SUBJECT: "",
  HBN_CODE: "",
  CODE: "",
  CONTENT: "",
  ACTIVE: "1",
  USERID: "admin",
};

function Doctor_Note_Create() {
  const [formNote, setformNote] = useState(dataNote1);
  const { note, setNote } = useContext(doctorContext);
  
  const locations = useLocation();

  const validSelectRef = useRef();
  const validTextRef = useRef();

  const reset = () => {
    setformNote(dataNote1);
  };

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    console.log(selectedOption);
    setformNote({ ...formNote, NOTE_SUBJECT: selectedOption });
  };

  const validation = () => {
    // if (formNote.CONTENT.trim().length == 0) {
    //   $(validTextRef.current).addClass("text-danger")
    //   // validTextRef.current.classList.add("");
    // } else {
    //   $(validTextRef.current).removeClass("text-danger")
    //   // validTextRef.current.classList.remove();
    // }
    // if (formNote.NOTE_SUBJECT === "") {
    //   validSelectRef.current.classList.add("text-danger");
    // } else {
    //   validSelectRef.current.classList.remove("text-danger");
    // }
  };

  const confirmFun = () => {
    let currentDate = moment();
    console.log(currentDate);
    formNote.DATE = currentDate.format("DD/MM/YYYY");
    formNote.TIME = currentDate.format("HH:mm:ss");
    console.log(formNote.DATE);
    console.log(formNote.TIME);
    setNote([...note, formNote]);
    showSuccessModal()
    console.log(formNote);
  };

  const showSuccessModal = ()=>{
    let modal = new Modal($('#successModal'));
    modal.show()
  }

  useEffect(() => {
    if (locations?.state) setformNote(locations.state?.row);
    console.log(locations?.state?.row);
  }, [locations]);

  return (
    <div className=" fw-semibold font">
      <div className="container">
        <form onReset={reset}>
          <div className="card mt-3">
            <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
              <div className="text-light">Doctor Note</div>
            </header>
            <div
              className="card-body d-flex flex-column justify-content-center"
              id="content"
            >
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label className="col-form-label control-label ">
                    Doctor Code*
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fileName"
                    value={formNote.CODE}
                    onChange={(e) =>
                      setformNote({ ...formNote, CODE: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label
                    className="col-form-label control-label "
                    ref={validSelectRef}
                  >
                    Subject*
                  </label>
                </div>
                <div className="col-sm-3">
                  <select
                    className="form-select "
                    value={formNote.NOTE_SUBJECT}
                    onChange={handleChange}
                  >
                    <option value="" defaultValue>
                      --- Select ---
                    </option>
                    <option value="CONTRACT_EXTEND">สัญญา-ต่อสัญญา</option>
                    <option value="CONTRACT_CHANGE">
                      สัญญา-ปรับ/เปลี่ยนสัญญา
                    </option>
                    <option value="UPDATE_CANCEL">สัญญา-ยกเลิกสัญญา</option>
                    <option value="DOCUMENT">เอกสาร</option>
                    <option value="Other">อื่นๆ</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  {formNote.NOTE_SUBJECT === "Other" && (
                    <input type="text" className="form-control" id="fileName" />
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label
                    className="col-form-label control-label"
                    ref={validTextRef}
                  >
                    Content*
                  </label>
                </div>

                <div className="col-sm-6">
                  <textarea
                    className="form-control input-sm"
                    id="w3review"
                    name="w3review"
                    rows="5"
                    value={formNote.CONTENT}
                    onChange={(e) =>
                      setformNote({ ...formNote, CONTENT: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
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
                    id="radioActive1"
                    name="radioActive"
                    value="1"
                    checked={formNote.ACTIVE == "1"}
                    onChange={(e) =>
                      setformNote({ ...formNote, ACTIVE: e.target.value })
                    }
                  />
                  <label
                    htmlFor="radioActive1"
                    className="form-check-label me-3"
                  >
                    Active
                  </label>
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    id="radioActive0"
                    name="radioActive"
                    value="0"
                    checked={formNote.ACTIVE == "0"}
                    onChange={(e) =>
                      setformNote({ ...formNote, ACTIVE: e.target.value })
                    }
                  />
                  <label
                    htmlFor="radioActive0"
                    className="form-check-label me-2"
                  >
                    Inactive
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <input
                      type="reset"
                      className="btn btn-light mb-3 "
                      value="Reset"
                    />
                  </div>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-light btn-sm border border-secondary"
                      data-bs-toggle={
                        formNote.CONTENT.trim().length == 0 ||
                        formNote.NOTE_SUBJECT === ""
                          ? ""
                          : "modal"
                      }
                      data-bs-target="#exampleModal1"
                      onClick={validation}
                      //   disabled
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
        </form>
      </div>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1">
                Confirmation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Do you want to save data?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={confirmFun}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* seccess modal */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="successModalLabel">
                Information
              </h1>
            </div>
            <div className="modal-body"><FaCheckCircle /> Save completed</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Doctor_Note_Create;
