import React,{useRef, useEffect} from 'react';
import { Link } from "react-router-dom";

import DataTables  from 'datatables.net-bs5';

function Doctor_Guarantee() {

const tableRef = useRef()

useEffect(()=>{
  console.log(tableRef.current);
  const table = new DataTables((tableRef.current),{
    ordering: false,
    pagingType: 'full_numbers'
  })
  return()=>{
    table.destroy();
  };
},[])


  return (
    <div>
      <header className="card-header navbar bg-secondary py-2 d-flex justify-content-between align-items-center">
          <div className="text-light">Doctor_Guarantee</div>
          <div>
						<Link to="/guaranteeTimetable">
            	<button type="button" className="btn btn-light btn-sm border border-secondary">Timetable</button>
        		</Link>
            <Link to="/guaranteeCreate">
            	<button type="button" className="btn btn-light btn-sm border border-secondary">New</button>
        		</Link>
          </div>
      </header>
			<div className="card-body">
				<table className='table table-striped border border-light-subtle table-bordered' ref={tableRef}>
					<thead>
							<tr>
									<th className='text-center'>Start Date</th>
									<th className='text-center'>Expire Date</th>
									<th className='text-center'>Guarantee type</th>
									<th className='text-center'>Guarantee Method</th>
									<th className='text-center'>Active</th>
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
  )
}

export default Doctor_Guarantee