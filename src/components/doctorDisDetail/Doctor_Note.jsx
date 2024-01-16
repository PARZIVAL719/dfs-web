import { useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment.js";
import DataTables from "datatables.net-bs5";
import { doctorContext } from "../globalState/DoctorDetailState.jsx";
function Doctor_Note() {
  //     var  info = [{"DATE" : "11/10/2024","TIME":"24","SUBJECT":"MATH","USERID":"1","ACTIVE":"1"},
  //     {"DATE" : "11/10/2024","TIME":"24","SUBJECT":"MATH","USERID":"1","ACTIVE":"1"}

  // ]
  const navigate = useNavigate()
  const tableRef = useRef();
  const { note } = useContext(doctorContext);

  useEffect(() => {
    // console.log(info);
    console.log(note);

    const dt = new DataTables(tableRef.current, {
      ordering: false,
      pagingType: "full_numbers",
      data: note,
      columns: [
        // { "render": DataTables.render.moment('Do MMM YYYY'), "width": '30%' },
        // DataTables.render.
        {
          title: "Date",
          data: "DATE",
          render: function (data) {
            return moment(data).format(moment.HTML5_FMT.DATE);
          },
        },
        {
          title: "Time",
          data: "TIME",
          render: function (data) {
            return moment(data,"hh:mm:ss");
          },
        },
        { data: "NOTE_SUBJECT", width: "30%" },
        { data: "USERID", width: "10%" },
        { data: "ACTIVE", width: "10%" },
      ],
    });

    dt.off('dblclick').on('dblclick','tr',(e)=>{
        let row = dt.row(e.currentTarget).data()
        row && navigate('/noteCreate',{state:{row}})
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
      <div className="card-body">
        <table
          className="table table-striped border border-light-subtle table-bordered "
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
