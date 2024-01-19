import React, { useContext, useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import DataTable from "datatables.net-bs5";
import { doctorAllDetailsContext } from "./Doctor_Display_Detail";
import { render } from "react-dom";
import $ from "jquery";

function Doctor_Department() {
  const { department, setDepartment } = useContext(doctorAllDetailsContext);

  const tableRef = useRef();
  // DEPARTMENT_CODE

  // {DEPARTMENT_CODE: 'SUR', DEPARTMENT_DESC: 'SUR', IS_DEFAULT: 'Y'}

  // {DEPARTMENT_CODE: 'MED', DEPARTMENT_DESC: 'MED', IS_DEFAULT: 'N'}
  useEffect(() => {
    // console.log(department);
    const table1 = new DataTable(tableRef.current, {
      ordering: false,
      paging: false,
      searching: false,
      data: department,
      columns: [
        {
          render: (data, type, row) => {
            // console.log(row);
            return renderToString(
              <div className="form-group row ">
                <div className="col-sm-4 ">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control ui-autocomplete-input input-sm border-end-0"
                      id="doctorProfile"
                      placeholder="Search"
                      value={row.DEPARTMENT_CODE}
                      onChange={(e) => {}}
                    />
                    <span className="input-group-text border-start-0">
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <div className="col-sm-8 ">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="departmentDesc0"
                    value={row.DEPARTMENT_DESC}
                    readOnly
                  />
                </div>
              </div>
            );
          },
        },
        {
          data: "IS_DEFAULT",
          render: (data) => {
            // console.log(data);
            return renderToString(
              <div className="text-center">
                <input
                  type="radio"
                  checked={data === "Y"}
                  onChange={(e) => {}}
                />
              </div>
            );
          },
        },
        {
          render: () => {
            return renderToString(
              <div className="text-center">
                <button
                  className="btn btn-light border border-secondary deleteBtn"
                  type="button"
                >
                  <FaTrashAlt />
                </button>
              </div>
            );
          },
        },
      ],
    });

    $(".deleteBtn").on("click", (e) => {
      deleteRowHandle(e);
    });

    return () => {
      table1.destroy();
    };
  }, [department]);

  const deleteRowHandle = (e) => {
    let parent = e.target.closest("tr");
    let table = new DataTable(tableRef.current);
    let index = table.row(parent).index();
    let updateDepartment = department.filter((e, i) => i !== index);
    console.log(updateDepartment);
    setDepartment(updateDepartment);
    table.row(parent).remove().draw();
  };

  const addNewRow = () => {
    let table = new DataTable(tableRef.current);

    const inputFa = renderToString(
      <div className="form-group row ">
        <div className="col-sm-4 ">
          <div className="input-group">
            <input
              type="text"
              className="form-control ui-autocomplete-input input-sm border-end-0"
              id="doctorProfile"
              placeholder="Search"
            />
            <span className="input-group-text border-start-0">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="col-sm-8 ">
          <input
            type="text"
            className="form-control input-sm"
            id="departmentDesc0"
            value=""
            readOnly
          />
        </div>
      </div>
    );

    const radioDefault = renderToString(
      <div className="text-center">
                <input
                  type="radio"
                  // checked={data||"" === "Y"}
                  onChange={(e) => {}}
                />
              </div>
    );
    const deleteBtn = renderToString(
      <div className="text-center ">
        <button className="btn btn-light border border-secondary deleteBtn">
          <FaTrashAlt />
        </button>
      </div>
    );

    table.row.add([inputFa, radioDefault, deleteBtn]).draw(false);
    const initail = {
      DEPARTMENT_CODE: "",
      DEPARTMENT_DESC: "",
      IS_DEFAULT: "N",
    };
    setDepartment([...department, initail]);
    // document.querySelectorAll("#deleteBtnId").forEach((item) => {
    //   item.addEventListener("click", deleteRowHandle);
    // });
    // .querySelector("#deleteBtnId").addEventListener("click",deleteRowHandle);
    console.log("add new row");
  };

  return (
    <div>
      <header className="card-header navbar bg-secondary py-2 ">
        <div className="text-light">Doctor_Department</div>
        <button
          type="button"
          className=" btn btn-light btn-sm border border-secondary "
          onClick={addNewRow}
        >
          New
        </button>
      </header>
      <div
        className="card-body d-flex flex-column justify-content-center"
        id="content"
      >
        {/* <div className='d-sm-flex flex-sm-row justify-content-center justify-content-sm-between mb-2'>
                
  
            </div> */}
        <div>
          <table
            ref={tableRef}
            className="table table-striped border border-light-subtle table-bordered w-100"
          >
            <thead>
              <tr>
                <th
                  className="text-center"
                  scope="col"
                  style={{ width: "800px" }}
                >
                  Department
                </th>
                <th className="" scope="col" style={{ width: "150px" }}>
                  Default
                </th>
                <th className="" scope="col" style={{ width: "110px" }}></th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Department;
