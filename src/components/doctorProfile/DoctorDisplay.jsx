import React from 'react'
import NewpageButton from '../router/Newpage.jsx'
import{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate();
// const change =()=>{



// }

function DoctorDisplay({data}) {

  return (

    <div className='card border-0 m-2 '>
        <header className="card-header d-flex justify-content-between align-items-center bg-secondary py-1">
            <div className="text-light ">Doctor Detail</div>
            <NewpageButton/>
        </header>
        <div className='card-body d-flex flex-column justify-content-center' id="content">
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
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="border-2 text-center" scope="col">Doctor Code</th>
                            <th className="border-2 text-center" scope="col">Doctor Name</th>
                            <th className="border-2 text-center" scope="col">Category</th>
                            <th className="border-2 text-center" scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data==null?
                            <tr>
                                <th className="border-2 text-center bg-dark-subtle " colSpan={4}>No data available in table</th>
                            </tr>: 
                            <tr>
                                {/* {data.map((item)=>(
                                    <> */}
                                        <th className="border-2 text-right">asda</th>
                                        <th className="border-2 text-right">asdas</th>
                                        <th className="border-2 text-right">asdasd</th>
                                        <th className="border-2 text-right">asdasd</th>
                                    {/* </>
                                ))} */}
                            </tr>
                            }
                    </tbody>
                </table>
            </div>
            <div className='d-sm-flex flex-sm-row justify-content-center justify-content-sm-between align-items-center'>
                <p  className='text-center '>Showing 0 to 0 of 0 entries</p>
                <div className='text-center'>
                <div className='btn-group'>
                    <button type="button" className='btn btn-light' disabled={data==null}>First</button>
                    <button type="button" className='btn btn-light' disabled={data==null}>Previous</button>
                    <button type="button" className='btn btn-light' >1</button>

                    <button type="button" className='btn btn-light' disabled={data==null}>Next</button>
                    <button type="button" className='btn btn-light' disabled={data==null}>Last</button>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DoctorDisplay