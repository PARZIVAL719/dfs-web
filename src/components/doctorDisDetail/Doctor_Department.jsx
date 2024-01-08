import React ,{ useEffect, useRef }from 'react'
import { renderToString } from 'react-dom/server'
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import DataTable from 'datatables.net-bs5';



function Doctor_Department() {
  
  const tableRef = useRef();
  
  let table

  useEffect(() => {

      table = new DataTable(tableRef.current,{
        ordering: false,
        paging: false,
        searching:false,
      })
      console.log(table.row().child.show());
     
    return () => {
      // Destroy the DataTable instance when the component unmounts to prevent memory leaks
        table.destroy();
        
    };
  }, []);

  let counter = 0;

  const deleteHandle = (rowId) => {
    table.row(`#${rowId}`).remove().draw()
    counter--
    console.log(counter)
  };
  

  const addNewRow =()=>{
  const currentCounter = counter;
  const newCounter = currentCounter+1
  console.log(newCounter);
    const inputFa = `
              <div class="form-group row ">
                <div class="col-sm-4 ">
                  <div class="input-group">
                    <input type="text" class="form-control ui-autocomplete-input input-sm border-end-0" id="doctorProfile"  placeholder="Search" />
                    <span class="input-group-text border-start-0">${renderToString(<FaSearch />)}</span>
                  </div>
                </div>
                <div class="col-sm-8 ">
                  <input type="text" class="form-control input-sm" id="departmentDesc0" value="" readonly="readonly">
                </div>
              </div>
              `

    const radioDefault = `<div class="text-center"><input type="radio"/></div>`
    const deleteBtnId = `remove-btn${newCounter}`
    const deleteBtn = `<div class="text-center"><button class="btn btn-light border border-secondary" id="${deleteBtnId}">${renderToString(<FaTrashAlt />)}  </button></div>`
  //   const deleteBtn = (
  //     <div className="text-center">
  //       <button className="btn btn-light border border-secondary" onClick={() => handleDeleteRow()}>
  //         <FaTrashAlt />
  //       </button>
  //     </div>
  //   );

  //   table.row.add([inputFa, radioDefault, deleteBtn]).draw(false);
  // };

    // const par = new DOMParser().parseFromString(inputFa,"text/html")
    table.row.add([
      inputFa,
      radioDefault,
      deleteBtn,
    ]).node().id = `myId${newCounter}`
    table.draw(false);

    console.log(table.row().child.show());
    document.getElementById(deleteBtnId).addEventListener("click", () => deleteHandle(`myId${newCounter}`))
    
    console.log("add new row");
    counter++

}

  


  return (
    <div>
        <header className="card-header navbar bg-secondary py-2 ">
          <div className="text-light">Doctor_Department</div>
          <button type="button" className=" btn btn-light btn-sm border border-secondary " onClick={addNewRow} >New</button>
        </header>
       <div className='card-body d-flex flex-column justify-content-center' id="content">
            {/* <div className='d-sm-flex flex-sm-row justify-content-center justify-content-sm-between mb-2'>
                
  
            </div> */}
            <div>
                <table ref={tableRef} className="table table-striped border border-light-subtle table-bordered">
                    <thead>
                        <tr>  
                            <th className="text-center" scope="col" style={{width : '800px'}}>Department</th>
                            <th className="" scope="col" style={{width : '150px'}}>Default</th>
                            <th className="" scope="col" style={{width : '110px'}}></th>
                          
                        </tr>
                    </thead>
                    
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
          
       
            
        </div>
    </div>
  )

          }

export default Doctor_Department