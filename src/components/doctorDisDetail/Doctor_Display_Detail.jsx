import { useEffect, useState, createContext, useContext } from "react";
// import BackMenu from "../router/BackMenu";

import { Link, useLocation } from "react-router-dom";
// import { BsArrowLeft } from "react-icons/bs";

// Components
import Doctor_Detail from "./Doctor_Detail";
import Doctor_Address from "./Doctor_Address";
import Doctor_Info from "./Doctor_Info";
import Doctor_Department from "./Doctor_Department";
import Doctor_Guarantee from "./Doctor_Guarantee";
import Doctor_Payment from "./Doctor_Payment";
import Doctor_Note from "./Doctor_Note";
import Doctor_File from "./Doctor_File";
import axios from "axios";
import { doctorContext } from "../globalState/DoctorDetailState";

// import NewpageButton from "../router/Newpage";
const doctorAllDetailsContext = createContext();

const DoctorDetail = () => {
  let location = useLocation();

  const [detail, setDetail] = useState({});
  const [address, setAddress] = useState({});
  const [department, setDepartment] = useState({});
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [payment, setPayment] = useState({});
  const [bsInfo, setBsInfo] = useState();

  const { note, setNote, guarantee, setGuarantee } = useContext(doctorContext);

  const test = location?.state;

  // const getDoctorDetail = async () => {
  //   let formData = new FormData();
  //   console.log(formData);
  //   formData.append("hospitalCode", "DEMO");

  //   const username = "admin";
  //   const password = "P@ssw0rd!1234";

  //   const config = {
  //     auth: {
  //       username: username,

  //       password: password,
  //     },
  //   };
  //   // await axios.post(`http://103.82.248.222:8883/interface_api/api_doctorProfileDetail`,
  //   // formData,
  //   // config
  //   // )
  //   // .then((res) => {
  //   //   console.log(res.data?.DOCTOR_DETAILS_DESC);
  //   //   const { DOCTOR_DETAILS_DESC } = res.data;
  //   // setdoctorDetal(DOCTOR_DETAILS_DESC)
  //   //   console.log(doctorDetal);
  //   // console.log(profileCode);
  //   const response = await axios.post(
  //     "http://103.82.248.222:8883/interface_api/api_doctorProfileDetail",
  //     formData,
  //     config
  //   );
  //   console.log(response.data);
  //   console.log(response.data?.DOCTOR_DETAILS_DESC);

  // };
  const fetch = async () => {
    let formData = new FormData();
    formData.append("hospitalCode", "DEMO");
    // setFile("aosdjiuqh");

    const username = "admin";
    const password = "P@ssw0rd!1234";

    const config = {
      auth: {
        username: username,
        password: password,
      },
    };
    await axios
      .post(
        "http://103.82.248.222:8883/interface_api/api_doctorProfileDetail",
        formData,
        config
      )
      .then((res) => {
        console.log(res.data);
        setDetail(res.data?.DOCTOR_DETAILS_DESC);
        setAddress(res.data?.DOCTOR_DETAILS_DESC);
        setInfo(res.data?.DOCTOR_DETAILS_DESC);
        setDepartment(res.data?.DEPARTMENT);
        setGuarantee(res.data?.GUARANTEE);
        setPayment(res.data?.DOCTOR_DETAILS_DESC)

      });
  };
  // const {codes} = location.state;

  useEffect(() => {
    console.log(guarantee);
    setBsInfo(location.state);
    // getDoctorDetail();
    fetch();
    // console.log(codes);
  }, [location]);

  return (
    <div className=" fw-semibold">
      <div className="container">
        <div className="row">
          <div className="card border-0 ">
            <div className="card-body">
              <div className="card">
                <doctorAllDetailsContext.Provider
                  value={{
                    detail,
                    setDetail,
                    address,
                    setAddress,
                    department,
                    setDepartment,
                    file,
                    setFile,
                    guarantee,
                    setGuarantee,
                    info,
                    setInfo,
                    note,
                    setNote,
                    payment,
                    setPayment,
                    bsInfo,
                    setBsInfo,
                  }}
                >
                  <form>
                    <div className="card border-0">
                      <header className="card-header bg-secondary py-2 d-flex justify-content-between align-items-center">
                        <div className="text-light">Doctor Detail</div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-light btn-sm border border-secondary"
                          >
                            Save
                            {console.log(detail)}
                          </button>

                          <button
                            type="reset"
                            className="btn btn-light btn-sm border border-secondary"
                          >
                            Reset
                          </button>
                          <Link to="/">
                            <button
                              type="button"
                              className="btn btn-light btn-sm border border-secondary"
                            >
                              Close
                            </button>
                          </Link>
                        </div>
                      </header>
                      <Doctor_Detail />
                    </div>
                    <Doctor_Address />
                    <Doctor_Info />
                    <Doctor_Department />
                    <Doctor_Guarantee />
                    <Doctor_Payment />
                    <Doctor_Note />
                    <Doctor_File />
                  </form>
                </doctorAllDetailsContext.Provider>

                <div>
                  <header className="card-header navbar bg-secondary py-2 d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light btn-sm border border-secondary"
                      >
                        Reset
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-light btn-sm border border-secondary"
                      >
                        Ok
                      </button>
                      <Link to="/">
                        <button
                          type="button"
                          className="btn btn-light btn-sm border border-secondary"
                        >
                          Close
                        </button>
                      </Link>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { doctorAllDetailsContext };
export default DoctorDetail;
