import React, { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import DataTables from "datatables.net-bs5";
import { doctorContext } from "../globalState/DoctorDetailState.jsx";

function Doctor_Guarantee() {
  const tableRef = useRef();
  const { guarantee } = useContext(doctorContext);

  const navigate = useNavigate()

  useEffect(() => {
    console.log(guarantee);
    const table = new DataTables(tableRef.current, {
      ordering: false,
      pagingType: "full_numbers",
      data: guarantee,
      columns: [
        { data: "CONTRACT_START_DATE", width: "20%" },
        { data: "CONTRACT_EXPIRE_DATE", width: "20%" },
        { data: "GUARANTEE_TYPE_CODE", width: "20%" },
        { data: "GUARANTEE_METHOD", width: "20%" },
        { data: "ACTIVE", width: "20%" },
      ],
    });

    table.off('dblclick').on('dblclick','tr',(e)=>{
      let row = table.row(e.currentTarget).data()
      row && navigate('/guaranteeCreate',{state:{row}})
      console.log(row);
  })
    return () => {
      table.destroy();
    };
  }, [guarantee]);

  return (
    <div>
      <header className="card-header navbar bg-secondary py-2 d-flex justify-content-between align-items-center">
        <div className="text-light">Doctor_Guarantee</div>
        <div>
          <Link to="/guaranteeTimetable">
            <button
              type="button"
              className="btn btn-light btn-sm border border-secondary"
            >
              Timetable
            </button>
          </Link>
          <Link to="/guaranteeCreate">
            <button
              type="button"
              className="btn btn-light btn-sm border border-secondary"
            >
              New
            </button>
          </Link>
        </div>
      </header>
      <div className="card-body">
        <table
          className="table table-striped border border-light-subtle table-bordered w-100"
          ref={tableRef}
        >
          <thead>
            <tr>
              <th className="text-center">Start Date</th>
              <th className="text-center">Expire Date</th>
              <th className="text-center">Guarantee type</th>
              <th className="text-center">Guarantee Method</th>
              <th className="text-center">Active</th>
            </tr>
          </thead>
          <tbody>
            {/* {info?.map((item, index)=>(
							<tr key={index}>
								<td>{item.color}</td>
								<td>{item.value}</td>
							</tr>
						))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctor_Guarantee;
