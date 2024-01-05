import React from 'react'

function Doctor_Address() {
  return (

    <div>
      <header className="card-header rounded-top-0  bg-secondary py-1 ">
        <div className="text-light">Adress</div>
      </header>
      <div className='card-body'> 
        <div className='row '>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="" className='col-form-label'>
              Address No. / Address
            </label>
          </div>
          <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="" className='form-control'/>
            </div>
        </div>
        <div className='row mt-2  '>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="" className='col-form-label'>
            Sub District / District
            </label>
          </div>
          <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="" className='form-control'/>
            </div>
        </div>
        <div className='row mt-2'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="" className='col-form-label'>
            Province
            </label>
          </div>
          <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="" className='form-control'/>
            </div>
            
         
        
      </div>
      <div className='row mt-2'>
          <div className='col-sm-3 text-sm-end'>
            <label htmlFor="" className='col-form-label'>
            Postal Code
            </label>
          </div>
          <div className='col-sm-3 '>
              <input type="text" name="doctorProfileCode" id="" className='form-control'/>
            </div>
            
         
        
      </div>

      <div className='row mt-2'>
          <div className='col-sm-3  text-sm-end'>
            <label htmlFor="" className='col-form-label'>
            Email
            </label>
          </div>
          <div className='col-sm-6 '>
              <input type="text" name="doctorProfileCode" id="" className='form-control'/>
            </div>
      </div>
      </div>
    </div>

  )
}

export default Doctor_Address