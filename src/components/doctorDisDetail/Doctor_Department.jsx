import React, { useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import DataTable from "datatables.net-bs5";

function Doctor_Department() {
  const tableRef = useRef();
  let table;
  
  useEffect(() => {
    table = new DataTable(tableRef.current, {
      ordering: false,
      paging: false,
      searching: false,
    });

    return () => {
      table.destroy();
    };
  }, []);

  const deleteRowHandle = (e) => {
    let parent = e.target.closest("tr");
    table.row(parent)
          .remove()
          .draw()
  };

  const addNewRow = () => {
    const inputFa = `
                <div class="form-group row ">
                  <div class="col-sm-4 ">
                    <div class="input-group">
                      <input type="text" class="form-control ui-autocomplete-input input-sm border-end-0" id="doctorProfile"  placeholder="Search" />
                      <span class="input-group-text border-start-0">${renderToString(
                        <FaSearch />
                      )}</span>
                    </div>
                  </div>
                  <div class="col-sm-8 ">
                    <input type="text" class="form-control input-sm" id="departmentDesc0" value="" readonly="readonly">
                  </div>
                </div>
                `;
  
    const radioDefault = `<div class="text-center"><input type="radio"/></div>`;
    const deleteBtn = `<div class="text-center" id="deleteBtnId"><button class="btn btn-light border border-secondary" >${renderToString(<FaTrashAlt />)} </button></div>`;

    table.row
      .add([inputFa, radioDefault, deleteBtn])
      .draw(false);

    document
      .querySelectorAll("#deleteBtnId").forEach((item)=>{
        item.addEventListener("click",deleteRowHandle);
      })
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
            className="table table-striped border border-light-subtle table-bordered"
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
