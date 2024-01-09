import React,{useRef, useEffect} from "react";
import { FaSearch,FaPlus } from "react-icons/fa";
import DataTables  from "datatables.net-bs5";

import { renderToString } from "react-dom/server";

import monthly from "../samlpe_data/time_table/monthly.json"

const dataTest = monthly.data

function Doctor_Guarantee_Timetable_Montly() {

  const table = useRef()

  useEffect(()=>{
    const dt = new DataTables(table.current,{
      paging:false,
      searching:false,
      info:false,
      data:dataTest,
      columns:[
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<div class="checkbox"><label style="width: 20px;"><input type="checkbox" name="active" id="activeGMTT" value="1" class="input-sm isProcess active" checked="checked" '
                +'></label></div>';
          } else {
            return '<div class="checkbox"><label style="width: 20px;"><input type="checkbox" name="active" id="activeGMTT" value="0" class="input-sm isProcess active"'
            +'></label></div>';
          }
          },
          className:"text-center",
          "width": "4%"
        },
        {
        render:function(data,type,full,meta){
          return '<label id="txtDayGMTT" style="width: 50px;" value="'+ full[2]+ '">'+full[2]+'</label>'
							+'<input id="pkDayGMTT" type="hidden" value="'+ full[2]+'" />'
							+'<input id="pkStartTimeGMTT" type="hidden" value="'+ full[10]+'" />'
							+'<input id="pkEndTimeGMTT" type="hidden" value="'+ full[11]+'" />'
							+'<input id="pkGuaranteeTypeCodeGMTT" type="hidden" value="'+ full[7]+'" />'
							+'<input id="pkAdmissionTypeCodeGMTT" type="hidden" value="'+ full[8]+'" />';
          },
          className:"text-center",
          "width": "8%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="cateGMTT" style="width: 100px; display:inline-block; " '
            + 'class="form-control input-sm text-left isProcess cate " value="'+full[3]+'" '
            // + 'onchange = "manageData(this.value,\''+full[0]+'\',\'cate\',\'GMTT\')"'
            +'>'
            + '<option value="'+full[3]+'">'+full[13]+'</option>'
            + '<option value="GA" >Guarantee</option>'
            + '<option value="GEA" >Extra</option>'
            + '<option value="GFA" >Fix</option>'
            + '</select>';
          }else{
            return '<select id="cateGMTT" style="width: 100px; display:inline-block; " '
            + 'class="form-control input-sm text-left isProcess cate " value="'+full[3]+'" '
            // + 'onchange = "manageData(this.value,\''+full[0]+'\',\'cate\',\'GMTT\')"'
            + ' disabled >'
            + '<option value="GA" >Guarantee</option>'
            + '<option value="GEA" >Extra</option>'
            + '<option value="GFA" >Fix</option>'
            + '</select>';
          }
          },
          className:"text-center",
          "width": "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="amountGMTT" value="'+full[4]+'" type="text" placeholder="0.00" class="form-control input-sm text-right number-2 isProcess" style="width: 100px; display:inline-block; " '
            // +'onchange = "manageData(this.value,\''+full[0]+'\',\'amount\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');"'
            +' />';
          }else{
            return '<input id="amountGMTT" value="0.00" type="text" placeholder="0.00" class="form-control input-sm text-right number-2 isProcess" style="width: 100px; display:inline-block; " '
            // +'onchange = "manageData(this.value,\''+full[0]+'\',\'amount\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');"'
            +' disabled/>';
          }
          },
          className:"text-center",
          "width": "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="guaranteeTypeCodeGMTT'
              + '" class="form-control input-sm text-left isProcess guaranteeTypeCode genGuaranteeTypeGMTT" style="width: 100px; display:inline-block;" '
              // + 'onchange = "manageData(this.value ,\''+full[0]+'\',\'guaranteeTypeCode\',\'GMTT\')"'
              +'>'
              + '<option value="'+full[7]+'" hidden>'+full[14]+'</option>'
              + '<option value="MLY">Monthly</option>'
              + '</select>';
          }else{
            return '<select id="guaranteeTypeCodeGMTT'
            + '" class="form-control input-sm text-left isProcess guaranteeTypeCode genGuaranteeTypeGMTT" style="width: 100px; display:inline-block;" '
            // + 'onchange = "manageData(this.value ,\'' + full[0]+ '\',\'guaranteeTypeCode\',\'GMTT\')" '
            +'disabled >'
            + '<option value="MLY">Monthly</option>'
            + '</select>';
          }
        },
        className:"text-center",
        "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="admissionTypeCodeGMTT" '
              + 'class="form-control input-sm text-left isProcess admissionTypeCode genAdmissionTypeGMTT" value="'+full[8]+'" style="width: 80px; display:inline-block; " '
              // + 'onchange = "manageData(this.value ,\''+full[0]+'\',\'admissionType\',\'GMTT\');"  '
              +'>'
              + '<option value="'+full[8]+'" hidden>'+full[15]+'</option>'
              + '</select>';
          }else{
            return '<select id="admissionTypeCodeGMTT" '
            + 'class="form-control input-sm text-left isProcess admissionTypeCode genAdmissionTypeGMTT" style="width: 80px; display:inline-block; " '
            // + 'onchange = "manageData(this.value ,\''+full[0]+'\',\'admissionType\',\'GMTT\');"  '
            +'disabled >'
            + '</select>';
          }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="earlyTimeGMTT" value="'+full[9]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
            +'placeholder="HH:MM:ss"'
            // +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');" '
            +'/>';
          }else{
            return '<input id="earlyTimeGMTT" value="" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
            +'placeholder="HH:MM:ss"'
            // +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');" '
            +'disabled/>';
          }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="startTimeGMTT" value="'+full[10]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
                // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\'GMTT\')" onclick="formEditRowProcess(\'GMTT\');" '
                +'placeholder="HH:MM:ss"'
                // +' onkeypress="return dataKeypress(event);"'
                +'/>';
            }else{
              return '<input id="startTimeGMTT" value="" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
              // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\'GMTT\')" onclick="formEditRowProcess(\'GMTT\');" '
              +'placeholder="HH:MM:ss"'
              // +' onkeypress="return dataKeypress(event);" '
              +'disabled/>';
            }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="startTimeGMTT" value="'+full[11]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
                // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\'GMTT\')" onclick="formEditRowProcess(\'GMTT\');" '
                +'placeholder="HH:MM:ss"'
                // +' onkeypress="return dataKeypress(event);"'
                +'/>';
            }else{
              return '<input id="startTimeGMTT" value="" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
              // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\'GMTT\')" onclick="formEditRowProcess(\'GMTT\');" '
              +'placeholder="HH:MM:ss"'
              // +' onkeypress="return dataKeypress(event);" '
              +'disabled/>';
            }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="earlyTimeGMTT" value="'+full[9]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
            +'placeholder="HH:MM:ss"'
            // +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');" '
            +'/>';
          }else{
            return '<input id="earlyTimeGMTT" value="" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 70px; display:inline-block; " '
            +'placeholder="HH:MM:ss"'
            // +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\'GMTT\');" onclick="formEditRowProcess(\'GMTT\');" '
            +'disabled/>';
          }
          },
          className:"text-center",
          "width" : "10%"
        },{
          render:function(data,type,full,meta){
            return '<button type="button" class="btn btn-default btn-sm isProcess" id="add'+meta.row+'" '
              // +'onclick="manageData(\'1\',\''+full[0]+'\',\'add\',\''+meta.row+'\')"'
              +' value="Add Case" >'
              +`${renderToString(<FaPlus/>)}`
              +'</button>';
          },
          className:"text-center",
          "width" : "4%"
        }
      ]
    })
  },[])

  return (
    <div className="card">
              <header className="card-header bg-secondary py-1 mb-0">
                <div className="text-light">Monthly</div>
              </header>
              <div className="mt-0">
                <table className="table table-striped table-bordered w-100" ref={table}>
                  <thead >
                    <tr>
                      <th className="text-center">test</th>
                      <th className="text-center">Date</th>
                      <th className="text-center">Category</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Type</th>
                      <th className="text-center">I/O</th>
                      <th className="text-center">Early</th>
                      <th className="text-center">Start</th>
                      <th className="text-center">End</th>
                      <th className="text-center">Late</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                </table>
              </div>

            </div>
  )
}

export default Doctor_Guarantee_Timetable_Montly