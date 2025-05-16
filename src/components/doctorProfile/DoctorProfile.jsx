import DoctorDisplay from "./DoctorDisplay";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import axiosInstance from "../../api/axios";

// import { getDoctorProfile, updateDoctorProfile } from "../../api/mockDocterService";
// import doctorProfileJson from "../samlpe_data/getDoctorProfileDetail.json";
// import doctor_detail_json from "../samlpe_data/get_doctor_detail.json";
// import listDocTxt from "../samlpe_data/lookup_mst_doctor_profile.json";

const initialState = {
  ACTIVE: "",
  BIRTH_DATE: "",
  CODE: "",
  EMPLOYEE_ID: "",
  HOSPITAL_CODE: "",
  LICENSE_ID: "",
  NAME_ENG: "",
  NAME_THAI: "",
  NATION_ID: "",
  TELEPHONE: "",
  UPDATE_DATE: "",
  UPDATE_TIME: "",
  USER_ID: "",
};

function DoctorProfile() {
  const searchInput = useRef("");
  const divListDoc = useRef("");
  const [profileCode, setProfileCode] = useState(initialState);
  const [doctorDetail, setDoctorDetail] = useState([]);
  const [listDoc, setListDoc] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDoctorProfile = async () => {
    if (!profileCode.CODE) {
      alert("Please enter doctor profile code");
      return;
    }

    try {
      setLoading(true);

      const response = await axiosInstance.get(`/doctorProfiles/${profileCode.CODE}`);
      const data = response.data;

      if (!data || !data.CODE) {
        alert("Doctor data not found!");
        setProfileCode(initialState);
        setDoctorDetail([]);
        return;
      }

      setProfileCode({
        ...data,
        ACTIVE: data.ACTIVE ? "1" : "0",
      });
      setDoctorDetail(data);

    } catch (error) {
      console.error("Error fetching doctor profile:", error);
      alert("Error fetching doctor profile!");
    } finally {
      setLoading(false);
      hideDoctorList();
      console.log("Doctor Profile:", profileCode);
    }
  };

  const save = async () => {
  if (!profileCode.CODE) {
    alert("Please select a doctor profile first by clicking 'Display'!");
    return;
  }
  try {
    // เตรียมข้อมูลสำหรับส่งไป update
    // แปลง ACTIVE จาก "1"/"0" เป็น boolean true/false
    const payload = {
      ...profileCode,
      ACTIVE: profileCode.ACTIVE === "1",
      // หาก backend คาดหวังให้ส่ง doctorDetailsDescs ก็ต้องเพิ่มใน payload ด้วย
      // doctorDetailsDescs: doctorDetail.doctorDetailsDescs || [],
    };

    const response = await axiosInstance.put(`/doctorProfiles/${profileCode.CODE}`, payload);
    console.log("Profile Updated:", response.data);
    alert("Profile Updated Successfully");
    fetchDoctorProfile(); // โหลดข้อมูลใหม่หลัง update
  } catch (error) {
    console.error("Error updating profile", error);
    alert("Error updating profile");
  }
};

  // const save = async () => {
  //   if (doctorDetail.length === 0) {
  //     alert("Please select a doctor profile first by clicking 'Display'!");
  //     return;
  //   }
  //   try {
  //     const response = await axiosInstance.put(`/doctorProfiles/${profileCode.CODE}`, profileCode);
  //     console.log("Profile Updated:", response.data);
  //     alert("Profile Updated Successfully");
  //     fetchDoctorProfile();
  //   } catch (error) {
  //     console.error("Error updating profile", error);
  //     alert("Error updating profile");
  //   }
  // };

  const reset = () => {
    searchInput.current.disabled = false;
    setProfileCode(initialState);
    setDoctorDetail({ data: [] });
  };

  const handleChange = (e) => {
    setProfileCode({ ...profileCode, CODE: e.target.value });
  };

  const handleBlur = (e) => {
    searchInput.current.disabled =
      e.target.value.trim().length > 0 ? "readOnly" : false;
    hideDoctorList();
  };

  const hideDoctorList = () => {
    if (divListDoc.current) {
      divListDoc.current.style.display = "none";
    }
  };

  // const clearDoctorList = () => setListDoc([]);

  useEffect(() => {
    if (profileCode.CODE === "") {
      setListDoc([]);
    }
  }, [profileCode.CODE]);

  return (
    <div className="fw-semibold font">
      <div className="container">
        <form onReset={reset}>
          <div className="card mt-3">
            <header className="card-header navbar bg-secondary py-2">
              <div className="text-light">Doctor Profile</div>
            </header>
            <div className="px-2">
              <div className="row mt-3">
                <div className="col-sm-3 text-sm-end">
                  <label
                    htmlFor="doctorProfile"
                    className="col-form-label control-label "
                  >
                    Doctor Profile Code*
                  </label>
                </div>
                <div className="col-sm-9 col-md-3 " id="search">
                  <div className="input-group" id="search-input">
                    <input
                      type="text"
                      className="form-control input-sm border-end-0"
                      id="doctorProfile-search"
                      placeholder="Search"
                      ref={searchInput}
                      value={profileCode.CODE}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span
                      className="input-group-text border-start-0"
                      id="search-icon"
                    >
                      <FaSearch />
                    </span>
                  </div>
                  <div
                    ref={divListDoc}
                    className="col-sm-9 col-md-3 col-12 list-group position-absolute overflow-y-auto h-25 z-1 "
                    id="search-result"
                  >
                    {listDoc?.map((item, index) => (
                      <a
                        key={index}
                        onMouseDown={() => getDoctorData(item.id)}
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        {item.value}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-sm-3 text-sm-end ">
                  <label className="col-form-label">Active</label>
                </div>
                <div className="col-sm-3 align-items-center d-flex fw-light ">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    id="radioActive1"
                    name="radioActive"
                    value="true"
                    checked={profileCode.ACTIVE == "1"}
                    onChange={(e) =>
                      setProfileCode({ ...profileCode, ACTIVE: e.target.value })
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
                    value="false"
                    checked={profileCode.ACTIVE == "0"}
                    onChange={(e) =>
                      setProfileCode({ ...profileCode, ACTIVE: e.target.value })
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

              <div className="row mt-3 mb-3">
                <div className="col-sm-3 text-sm-end">
                  <label
                    htmlFor="employeeID"
                    className=" col-form-label control-label "
                  >
                    Employee ID
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="employeeID"
                    value={profileCode.EMPLOYEE_ID}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        EMPLOYEE_ID: e.target.value,
                      })
                    }
                  />
                </div>

                {/* <div className="col-sm-3 text-sm-end">
                  <label
                    className=" col-form-label control-label"
                  >
                    Hospital Code
                  </label>
                </div>

                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    value={profileCode.HOSPITAL_CODE}
                    onChange={(e) =>
                      setProfileCode({ ...profileCode, HOSPITAL_CODE: e.target.value })
                    }
                  />
                </div> */}

                <div className="col-sm-3 text-sm-end">
                  <label
                    className="col-form-label"
                  >
                    Nation ID
                  </label>
                </div>
                <div className="col-sm-2 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="nationId"
                    value={profileCode.NATION_ID}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        NATION_ID: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="row mb-3 ">
                <label
                  htmlFor="nameEng"
                  className="col-sm-3 col-form-label control-label text-sm-end"
                >
                  Name (ENG)*
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="nameEng"
                    value={profileCode.NAME_ENG}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        NAME_ENG: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="nameTH"
                  className="col-sm-3 col-form-label control-label text-sm-end"
                >
                  Name (TH)*
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="nameTH"
                    value={profileCode.NAME_THAI}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        NAME_THAI: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="nameTH"
                  className="col-sm-3 col-form-label control-label text-sm-end"
                >
                  Phone No.*
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="nameTH"
                    value={profileCode.TELEPHONE}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        TELEPHONE: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="row mt-3 mb-3 ">
                <label
                  htmlFor="nameTH"
                  className="col-sm-3 col-form-label control-label text-sm-end"
                >
                  License ID
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nameTH"
                    value={profileCode.LICENSE_ID}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        LICENSE_ID: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-sm-3 text-sm-end">
                  <label className="col-form-label">Birth Date</label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    placeholder="DD/MM/YYYY"
                    value={profileCode.BIRTH_DATE}
                    onChange={(e) =>
                      setProfileCode({
                        ...profileCode,
                        BIRTH_DATE: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="reset"
                    className="btn btn-light mb-3 "
                    value="Reset"
                  />
                </div>
                <div className="d-flex gap-3  ">
                  <button type="button"
                    className="btn btn-light btn-sm mb-3"
                    onClick={fetchDoctorProfile}>
                    Display
                  </button>
                  <button
                    type="button"
                    className="btn btn-light btn-sm mb-3 "
                    onClick={save}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <DoctorDisplay info={doctorDetail} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorProfile;
