import { useRef, useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment.js";
import DataTables from "datatables.net-bs5";
import { doctorContext } from "../globalState/DoctorDetailState.jsx";
import axiosInstance from "../../api/axios.js";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";
import { renderToString } from "react-dom/server";

function Doctor_Note() {
  const navigate = useNavigate()
  const tableRef = useRef();

  const { note, setNote } = useContext(doctorContext);
  const [ search, setSearch ] = useState("");

  const fetchNote = async (doctor_code) => {
      try {
        const response = await axiosInstance.get(`/doctorDetails/${doctor_code}`);
        const notesData = response.data.NOTES || [];
        setNote(notesData);
        console.log(notesData);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setNote([]);
      }
    };

  useEffect(() => {
    // console.log(info);
    console.log(note);

    const dt = new DataTables(tableRef.current, {
      ordering: false,
      pagingType: "full_numbers",
      dom: 't', // only show table body naja eiei
      data: note,
      columns: [
        {
          title: "Date",
          data: "UPDATE_DATE",
          render: function (data) {
            return data
          },
        },
        {
          title: "Time",
          data: "UPDATE_TIME",
          render: function (data) {
            return moment(data, "HH:mm:ss.SSS").format("HH:mm:ss");
          },
        },
        { data: "NOTE_SUBJECT", width: "30%" },
        { data: "USER_ID", width: "10%" },
        {
          data: "ACTIVE",
          render: (data) =>
            renderToString(
              <div className="text-center">
                {data === true || data === "1" || data === 1 ? (
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

    dt.off('dblclick').on('dblclick', 'tr', (e) => {
      let row = dt.row(e.currentTarget).data()
      row && navigate('/noteCreate', { state: { row } })
      console.log(row);
    })
    return () => {
      dt.destroy();
    };
  }, [note]);


  return (
    <div>
      <header className="card-header navbar bg-secondary py-1 ">
        <div className="text-light">Doctor_Note</div>
        <Link to="/noteCreate">
          <button
            type="button"
            className="btn btn-light btn-sm border border-secondary"
          >
            New
          </button>
        </Link>
      </header>

      <div className="d-flex justify-content-center my-3">
        <div className="input-group w-auto" style={{ maxWidth: "300px" }}>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter Doctor Code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchNote(search.trim());
              }
            }}
          />
          <button
            className="btn btn-light btn-sm border border-secondary"
            type="button"
            onClick={() => fetchNote(search.trim())}
          >
            Search
          </button>
        </div>
      </div>


      <div className="card-body">
        <table
          className="table table-striped border border-light-subtle table-bordered w-100"
          ref={tableRef}
        >
          <thead>
            <tr>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Subject</th>
              <th className="text-center">User Id</th>
              <th className="text-center">Active</th>
            </tr>
          </thead>
          <tbody>
            {/* {data?.map(()=>(
                <tr>
                <th className='text-center'>Date</th>
                <th className='text-center'>Time</th>
                <th className='text-center'>Subject</th>
                <th className='text-center'>User Id</th>
                <th className='text-center'>Active</th>
                </tr>
            ))} */}
          </tbody>
        </table>
      </div>
      {/* <div className='card-body d-flex flex-column justify-content-center' id="content">
            <div className='d-sm-flex flex-sm-row justify-content-center justify-content-sm-between mb-2'>
                <div className='text-center mb-2'>
                    <label id="dataTables_length ">
                        Show &nbsp;
                        <select name="tblDoctor_length" id="">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>&nbsp;
                        entities
                    </label>
                </div>
                <div className='text-center' >
                    <label id="tblDoctor_filter">
                        Search: &nbsp;
                        <input type="search" />
                    </label>
                </div>
            </div> */}
      {/* <div> */}
      {/* <table className="table">
                    <thead>
                        <tr>
                            <th className="border-2 text-center" scope="col">Data</th>
                            <th className="border-2 text-center" scope="col">Time</th>
                            <th className="border-2 text-center col-8" scope="col">Subject</th>
                            <th className="border-2 text-center" scope="col">User Id</th>
                            <th className="border-2 text-center" scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data==null?
                            <tr>
                                <th className="border-2 text-center " colSpan={5}>No data available in table</th>
                            </tr>: 
                            <tr>

                            </tr>
                            }
                    </tbody>
                </table>
            </div> */}
      {/* <div className='d-sm-flex flex-sm-row justify-content-center justify-content-sm-between align-items-center'>
                <p  className='text-center'>Showing 0 to 0 of 0 entries</p>
                <div className='text-center'>
                <div className='btn-group'>
                    <button type="button" className='btn btn-light' disabled={data==null}>First</button>
                    <button type="button" className='btn btn-light' disabled={data==null}>Previous</button>

                    <button type="button" className='btn btn-light' disabled={data==null}>Next</button>
                    <button type="button" className='btn btn-light' disabled={data==null}>Last</button>
                </div>
                </div>
            </div>
            
        </div> */}
    </div>
  );
}

export default Doctor_Note;