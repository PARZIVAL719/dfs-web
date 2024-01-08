import React,{useRef, useEffect} from 'react'

import DataTables from 'datatables.net-bs5'
function Doctor_File({data}) {

    const tableRef = useRef()

    useEffect(()=>{
        const dt = new DataTables(tableRef.current,{
            ordering: false,
            pagingType:"full_numbers"
        })
        return()=>{
            dt.destroy()
        }
    },[])

    
  return (
    <div>
      <header className="card-header navbar bg-secondary py-2 ">
        <div className="text-light">Doctor_File</div>
      </header>
      <div className='card-body d-flex flex-column justify-content-center' id="content">
        <div className='row mb-3'>
            <div className="col-sm-3 text-sm-end">
                <label htmlFor="doctorProfile"className="col-form-label control-label ">
                      File Name
                </label>
            </div>
            <div className="col-sm-3">
                <input type="text" className="form-control" id="fileName"/>
            </div>
            <div className="col-sm-3">
                <input type="file" className="form-control" id="fileSelect"/>
            </div>
        </div>
        <div className='row'>
                <label className="col-sm-3 text-right"/>
            <div className="col-sm-3">
                <button type="button" className='btn btn-light btn-sm border border-secondary'>Upload</button>
            </div>
        </div>
        <div className='card-body'>
        <table className='table table-striped border border-light-subtle table-bordered' ref={tableRef}>
        <thead>
            <tr>
                <th className='text-center'>Date</th>
                <th className='text-center'>Time</th>
                <th className='text-center'>File Name</th>
                <th className='text-center'>View</th>
                <th className='text-center'>Download</th>
                <th className='text-center'></th>
            </tr>
        </thead>
        <tbody>
            {data?.map(()=>(
                <tr>
                <th className='text-center'>Date</th>
                <th className='text-center'>Time</th>
                <th className='text-center'>File Name</th>
                <th className='text-center'>View</th>
                <th className='text-center'>Download</th>
                <th className='text-center'></th>
                </tr>
            ))}
        </tbody>
        </table>
      </div>
            

            
        </div>
    </div>
  )
}

export default Doctor_File