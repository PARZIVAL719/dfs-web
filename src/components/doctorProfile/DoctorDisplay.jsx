import React, { useState, useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import NewpageButton from "../router/Newpage.jsx";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";
import DataTables from "datatables.net-bs5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axios.js";

function DoctorDisplay({ info }) {
  const [doctorData, setDoctorData] = useState([]);
  // const detail = info;
  const tableRef = useRef(null);
  const navigate = useNavigate();
  // const [tableVisible, setTableVisible] = useState(false);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axiosInstance.get('/doctorProfiles/${profileCode.CODE}');
        setDoctorData([response.data]);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        //alert("Failed to load doctor data.");
      }
    };
    fetchDoctorData();
  }, []);

  useEffect(() => {
    if (!info || info.length === 0) return;

    const dt = new DataTables(tableRef.current, {
      pagingType: "full_numbers",
      data: info,
      columns: [
        { data: "DOCTOR_CODE", width: "30%" },
        { data: "NAME_ENG", width: "30%" },
        { data: "DOCTOR_CATEGORY", width: "30%" },
        {
          data: "ACTIVE",
          render: (data) =>
            renderToString(
              <div className="text-center">
                {data === true || data === "1" ? (
                  <FaCheckCircle style={{ color: "green" }} />
                ) : (
                  <FaDotCircle style={{ color: "red" }} />
                )}
              </div>
            ),
          width: "10%",
        },
      ],
    });

    dt.off("dblclick").on("dblclick", "tr", (e) => {
      console.log(e.currentTarget);
      const doctorCode = dt.row(e.currentTarget).data()?.CODE;
      console.log(doctorCode);

      doctorCode && navigate("/newpage", { state: doctorCode });
    });

    return () => {
      dt.destroy();
    };
  }, [info, navigate]);

  return (
    <div className="card border-0 m-2 ">
      <header className="card-header d-flex justify-content-between align-items-center bg-secondary py-1">
        <div className="text-light">Doctor Detail</div>
        <NewpageButton />
        {/* <div className="flex ">
          <Link to={detail.length > 0 ? "/newpage" : "#"}>
            <button
              type="button"
              className={`btn btn-light btn-sm border border-secondary ${
                !detail.length > 0 ? "not-allowed" : ""
              }`}
              disabled={!detail.length > 0}
            >
              {" "}
              New
            </button>
          </Link>
        </div> */}
      </header>

      <div className="card-body">
        <table
          className="table table-striped border border-light-subtle table-bordered mt-2 w-100 "
          ref={tableRef}
        >
          <thead>
            <tr>
              <th>Doctor Code</th>
              <th>Doctor Name</th>
              <th>Category</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>{/* Render rows if needed */}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorDisplay;
