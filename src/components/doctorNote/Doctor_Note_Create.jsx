import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { doctorContext } from "../globalState/DoctorDetailState.jsx";
import moment from "moment";
import { Modal } from "bootstrap";
import $ from "jquery";
import { FaCheckCircle } from "react-icons/fa";
import axiosInstance from "../../api/axios.js";

const dataNote = {
  NOTE_SUBJECT: "",
  HBN_CODE: "",
  DOCTOR_CODE: "",
  NOTE_CONTENT: "",
  ACTIVE: "1",
  USER_ID: "admin",
};

function ConfirmModal({ onConfirm }) {
  return (
    <div
      className="modal fade"
      id="exampleModal1"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel1"
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
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Doctor_Note_Create() {
  const [formNote, setFormNote] = useState(dataNote);
  const { note, setNote } = useContext(doctorContext);
  const [otherSubject, setOtherSubject] = useState(""); 
  const [errors, setErrors] = useState({ subject: "", NOTE_CONTENT: "" });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [doctorDetails, setDoctorDetails] = useState(null); 
  const [isLoadingDoctor, setIsLoadingDoctor] = useState(false);

  const locations = useLocation();

  const validSelectRef = useRef();
  const validTextRef = useRef();

  const reset = () => {
    setFormNote(dataNote);
    setOtherSubject("");
    setErrors({ subject: "", NOTE_CONTENT: "" });
    setDoctorDetails(null);

    if (validSelectRef.current) {
      validSelectRef.current.classList.remove("text-danger");
    }
    if (validTextRef.current) {
      $(validTextRef.current).removeClass("text-danger");
    }
  };

  const fetchDoctorDetails = async (doctorCode) => {
    if (!doctorCode || doctorCode.trim() === "") {
      setDoctorDetails(null);
      setFormNote(prev => ({ ...prev, HBN_CODE: "" }));
      return;
    }

    setIsLoadingDoctor(true);
    try {
      const response = await axiosInstance.get(`/doctorDetails/${doctorCode}`);
      const details = response.data;
      setDoctorDetails(details);
    
      setFormNote(prev => ({ 
        ...prev, 
        HBN_CODE: details.HOSPITAL_CODE || "" 
      }));
      
    } catch (error) {
      console.error("Error fetching doctor details:", error);
      setDoctorDetails(null);

      setFormNote(prev => ({ ...prev, HBN_CODE: "" }));
    } finally {
      setIsLoadingDoctor(false);
    }
  };

  const handleDoctorCodeChange = (e) => {
    const doctorCode = e.target.value;
    setFormNote({ ...formNote, DOCTOR_CODE: doctorCode });
    
    if (window.doctorSearchTimeout) {
      clearTimeout(window.doctorSearchTimeout);
    }
    
    window.doctorSearchTimeout = setTimeout(() => {
      fetchDoctorDetails(doctorCode);
    }, 500);
  };
  const handleSubjectChange = (e) => {
    const selectedOption = e.target.value;
    setFormNote({ ...formNote, NOTE_SUBJECT: selectedOption });
    
    if (selectedOption !== "Other") {
      setOtherSubject("");
    }
  };

  const validation = () => {
    let isValid = true;
    
    if (formNote.NOTE_CONTENT.trim().length === 0) {
      $(validTextRef.current).addClass("text-danger");
      isValid = false;
    } else {
      $(validTextRef.current).removeClass("text-danger");
    }
    
    if (formNote.NOTE_SUBJECT === "") {
      validSelectRef.current.classList.add("text-danger");
      isValid = false;
    } else {
      validSelectRef.current.classList.remove("text-danger");
    }
    
    if (formNote.NOTE_SUBJECT === "Other" && otherSubject.trim().length === 0) {
      isValid = false;
    }
    
    return isValid;
  };

  const submitNote = async () => {
    if (isSubmitting) return; 
    
    setIsSubmitting(true);
    
    try {
      let currentDate = moment();
      const formattedDate = currentDate.format("YYYY-MM-DD");
      const formattedTime = currentDate.format("HH:mm:ss");

      const subjectToUse = formNote.NOTE_SUBJECT === "Other" ? otherSubject : formNote.NOTE_SUBJECT;

      const payload = {
        USER_ID: formNote.USER_ID,
        NOTE_SUBJECT: subjectToUse,
        HBN_CODE: formNote.HBN_CODE,
        ACTIVE: formNote.ACTIVE === "1",
        UPDATE_DATE: formattedDate,
        UPDATE_TIME: formattedTime,
        DOCTOR_CODE: formNote.DOCTOR_CODE,
        NOTE_CONTENT: formNote.NOTE_CONTENT
      };

      console.log("Submitting payload:", payload);

      const response = await axiosInstance.post("/notes", payload);
      const savedNote = response.data;

      setNote((prev) => [...prev, savedNote]);
      
      reset();
      
      showModal();
    } catch (error) {
      console.error("Error submitting note:", error);
      
      let errorMessage = "An error occurred while saving the note.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showModal = () => {
    let modal = new Modal($('#successModal'));
    modal.show();
  };

  const handleSaveClick = () => {
    const isValid = validation();
    if (isValid) {
      let modal = new Modal($('#exampleModal1'));
      modal.show();
    }
  };

  useEffect(() => {
    if (locations?.state) {
      setFormNote(locations.state?.row);
      if (locations.state?.row?.DOCTOR_CODE) {
        fetchDoctorDetails(locations.state.row.DOCTOR_CODE);
      }
    }
    console.log(locations?.state?.row);
    
    return () => {
      if (window.doctorSearchTimeout) {
        clearTimeout(window.doctorSearchTimeout);
      }
    };
  }, [locations]);

  return (
    <div className="fw-semibold font">
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
                  <label className="col-form-label control-label">
                    Doctor Code*
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="doctorCode"
                    value={formNote.DOCTOR_CODE}
                    onChange={handleDoctorCodeChange}
                    placeholder="Enter doctor code"
                    required
                  />
                  {isLoadingDoctor && (
                    <small className="text-muted">Loading doctor details...</small>
                  )}
                  {doctorDetails && (
                    <small className="text-success">
                      ✓ {doctorDetails.NAME_ENG} - {doctorDetails.HOSPITAL_CODE}
                    </small>
                  )}
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label className="col-form-label control-label">
                    HBN Code
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="hbnCode"
                    value={formNote.HBN_CODE}
                    onChange={(e) =>
                      setFormNote({ ...formNote, HBN_CODE: e.target.value })
                    }
                    readOnly={doctorDetails !== null} 
                  />
                  {doctorDetails && (
                    <small className="text-info">
                      Auto fill from {doctorDetails.NAME_ENG}'s hospital
                    </small>
                  )}
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label
                    className="col-form-label control-label"
                    ref={validSelectRef}
                  >
                    Subject*
                  </label>
                </div>
                <div className="col-sm-3">
                  <select
                    className="form-select"
                    value={formNote.NOTE_SUBJECT}
                    onChange={handleSubjectChange}
                    required
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
                    <input 
                      type="text" 
                      className="form-control" 
                      id="otherSubject"
                      placeholder="Please specify..."
                      value={otherSubject}
                      onChange={(e) => setOtherSubject(e.target.value)}
                      required
                    />
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
                    id="noteContent"
                    name="noteContent"
                    rows="5"
                    value={formNote.NOTE_CONTENT}
                    onChange={(e) =>
                      setFormNote({ ...formNote, NOTE_CONTENT: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label className="col-form-label control-label">
                    Active
                  </label>
                </div>
                <div className="col-sm-3 align-items-center d-flex fw-light">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    id="radioActive1"
                    name="radioActive"
                    value="1"
                    checked={formNote.ACTIVE === "1"}
                    onChange={(e) =>
                      setFormNote({ ...formNote, ACTIVE: e.target.value })
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
                    checked={formNote.ACTIVE === "0"}
                    onChange={(e) =>
                      setFormNote({ ...formNote, ACTIVE: e.target.value })
                    }
                  />
                  <label
                    htmlFor="radioActive0"
                    className="form-check-label me-2"
                  >
                    Inactive
                  </label>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="reset"
                    className="btn btn-light mb-3"
                    value="Reset"
                  />
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-light btn-sm border border-secondary"
                    onClick={handleSaveClick}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save"}
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
        </form>
      </div>

      {/* Confirm Modal */}
      <ConfirmModal onConfirm={submitNote} />

      {/* Success modal */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="successModalLabel">
                Information
              </h1>
            </div>
            <div className="modal-body">
              <FaCheckCircle /> Save completed
            </div>
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