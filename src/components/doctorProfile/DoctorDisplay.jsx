import React, { useState, useRef, useEffect } from 'react';
import { renderToString } from "react-dom/server";
import NewpageButton from '../router/Newpage.jsx';
import { FaCheckCircle, FaDotCircle } from 'react-icons/fa';
import DataTables from 'datatables.net-bs5';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


function DoctorDisplay({ info }) {
  const detail = info;

  const tableRef = useRef(null);
  // const [tableVisible, setTableVisible] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {

    const dt = new DataTables(tableRef.current, {
      pagingType: 'full_numbers',
      data: detail,
      columns: [
        { "data": 'CODE', "width": '30%' },
        { "data": 'NAME_ENG', "width": '30%' },
        { "data": 'DOCTOR_CATEGORY_CODE', "width": '30%' },
        {
          "data": 'ACTIVE',
          render: function (data) {
            return renderToString(<div className="text-center">
                {data === '1' ?  <FaCheckCircle/> :  <FaDotCircle/>}
              </div>)
          },
          "width": '10%',
        },
      ], 
    })
      
      dt.off('dblclick').on('dblclick','tr',(e)=>{
        console.log(e.currentTarget);
          const doctorCode = dt.row(e.currentTarget).data()?.CODE
          console.log(doctorCode);
          
          doctorCode && navigate("/newpage",{state:doctorCode})
      })
      
      return () => {
        dt.destroy();
      }
  }, [detail]);

  return (
    <div className='card border-0 m-2 '>
      <header className='card-header d-flex justify-content-between align-items-center bg-secondary py-1'>
        <div className='text-light'>Doctor Detail</div>
        {/* <NewpageButton /> */}
        <div className="flex ">
      <Link to={detail.length>0 ?"/newpage":"#"} >
        <button type="button" className={`btn btn-light btn-sm border border-secondary ${!detail.length > 0 ? 'not-allowed' : ''}`} disabled={!detail.length > 0 }
            > New</button>
      </Link>
    </div>
      </header>
  
        <div className='card-body'>
          <table className='table table-striped border border-light-subtle table-bordered mt-2 w-100 '
           ref={tableRef}>
            <thead>
              <tr>
                <th>Doctor Code</th>
                <th>Doctor Name</th>
                <th>Category</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {/* Render rows if needed */}
            </tbody>
          </table>
        </div>
  
    </div>
  );
}

export default DoctorDisplay;