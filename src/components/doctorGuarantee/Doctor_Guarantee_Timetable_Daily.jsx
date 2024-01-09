import React,{useRef, useEffect} from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import DataTables  from "datatables.net-bs5";

import { renderToString } from "react-dom/server";

import daily from "../samlpe_data/time_table/daily.json"



const dataTest = daily.data

function Doctor_Guarantee_Timetable_Daily() {

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
            return '<label hidden>'+ full[0]+ '</label>'
            +'<div class="checkbox"><label style="width: 20px;"><input type="checkbox" name="active" id="active'+meta.row+'"  class="input-sm isProcess active" checked="checked" '
            // +'onclick=manageData("1","'+full[0]+'",  ,"'+meta.row+'");'
            +'></label></div>';
          } else {
            return'<label hidden>'+ full[0]+ '</label>'
            +'<div class="checkbox"><label style="width: 20px;"><input type="checkbox" name="active" id="active'+meta.row+'"  class="input-sm isProcess active" '
            // +' onclick=manageData("0","'+full[0]+'","active","'+meta.row+'");'
            +'></label></div>';
          }
          },
          className:"text-center",
          "width": "4%"
        },
        {
        render:function(data,type,full,meta){
          return '<label id="txtDay'+ meta.row+ '" value="'+ full[2]+ '" style="width: 50px;">'+full[2]+'</label>'
								+'<input id="pkDay'+meta.row+'" type="hidden" value="'+ full[2]+'" />'
								+'<input id="pkStartTime'+meta.row+'" type="hidden" value="'+ full[10]+'" />'
								+'<input id="pkEndTime'+meta.row+'" type="hidden" value="'+ full[11]+'" />'
								+'<input id="pkGuaranteeTypeCode'+meta.row+'" type="hidden" value="'+ full[7]+'" />'
								+'<input id="pkAdmissionTypeCode'+meta.row+'" type="hidden" value="'+ full[8]+'" />';
          },
          className:"text-center",
          "width": "8%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="cate'+ meta.row
            + '" class="form-control input-sm text-left isProcess cate" style="width: 100px; display:inline-block; " value="'+full[3]+'" '
            // + 'onchange = "manageData(this.value,\''+full[0]+'\',\'cate\',\''+meta.row+'\')"'
            +'>'
            + '<option value="'+full[3]+'" hidden>'+full[13]+'</option>'
            + '<option value="GA" >Guarantee</option>'
            + '<option value="GEA" >Extra</option>'
            + '<option value="GFA" >Fix</option>'
            + '</select>';
          }else{
            return '<select id="cate'+ meta.row
            + '" class="form-control input-sm text-left isProcess cate" style="width: 100px; display:inline-block;" '
            // + 'onchange = "manageData(this.value,\''+full[0]+'\',\'cate\',\''+meta.row+'\')"'
            +' disabled >'
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
            return '<input id="amount'+meta.row+'" value="'+full[4]+'" type="text" placeholder="0.00" class="form-control input-sm text-right number-2 isProcess" style="width: 100px; display:inline-block;"'
            // +'onblur = "manageData(this.value,\''+full[0]+'\',\'amount\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
            +'/>';
          }else{
            return '<input id="amount'+meta.row+'" type="text" value="0.00" placeholder="0.00" class="form-control input-sm text-right number-2 isProcess" style="width: 100px; display:inline-block;"'
            // +'onblur = "manageData(this.value,\''+full[0]+'\',\'amount\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
            +'disabled/>';
          }
          },
          className:"text-center",
          "width": "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="guaranteeTypeCode'+ meta.row
              + '" class="form-control input-sm text-left isProcess guaranteeTypeCode genGuaranteeTypeGTT" style="width: 100px; display:inline-block;" '
              // + 'onchange = "manageData(this.value ,\''+full[0]+'\',\'guaranteeTypeCode\',\''+meta.row+'\')"'
              +'>'
              + '<option value="'+full[7]+'" hidden>'+full[14]+'</option>'
              + '</select>';
          }else{
            return '<select id="guaranteeTypeCode'+ meta.row
            + '" class="form-control input-sm text-left isProcess guaranteeTypeCode genGuaranteeTypeGTT" style="width: 100px; display:inline-block;" '
            // + 'onchange = "manageData(this.value ,\'' + full[0]+ '\',\'guaranteeTypeCode\',\''+meta.row+'\')" '
            +'>'
            + '</select>';
          }
        },
        className:"text-center",
        "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<select id="admissionTypeCode'+ meta.row
              + '" class="form-control input-sm text-left isProcess admissionTypeCode genAdmissionTypeGTT" tyle="width: 70px; display:inline-block;" '
              // +' onchange = "manageData(this.value ,\''+full[0]+'\',\'admissionType\',\''+meta.row+'\');" '
              +'>'
              + '<option value="'+full[8]+'" hidden>'+full[15]+'</option>'
              + '</select>';
          }else{
            return '<select id="admissionTypeCode'+ meta.row
            + '" class="form-control input-sm text-left isProcess admissionTypeCode genAdmissionTypeGTT" style="width: 70px; display:inline-block;"'
            // +' onchange = "manageData(this.value ,\''+full[0]+'\',\'admissionType\',\''+meta.row+'\');"  '
            +'   >'
            + '</select>';
          }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="earlyTime'+meta.row+'" value="'+full[9]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
                // +'placeholder="HH:MM:ss" onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
                +'/>';
            }else{
              return '<input id="earlyTime'+meta.row+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
              // +'placeholder="HH:MM:ss" onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'earlyTime\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
              +'disabled/>';
            }
          },
          className:"text-center",
          "width" : "10%"
        },
        {
        render:function(data,type,full,meta){
          if (full[1] == "1") {
            return '<input id="startTime'+meta.row+'" value="'+full[10]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
                // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\''+meta.row+'\')" onclick="formEditRowProcess(\''+meta.row+'\');" '
                +'placeholder="HH:MM:ss"'
                // +' onkeypress="return dataKeypress(event);"'
                +'/>';
            }else{
              return '<input id="startTime'+meta.row+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
              // +'onblur = "manageData(this.value,\''+full[0]+'\',\'startTime\',\''+meta.row+'\')" onclick="formEditRowProcess(\''+meta.row+'\');" '
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
            return '<input id="lateTime'+meta.row+'" value="'+full[12]+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
                +'placeholder="HH:MM:ss"'
                +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'lateTime\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
                +'/>';
            }else{
              return '<input id="lateTime'+meta.row+'" type="text" class="form-control input-sm text-left txtTimePicker isProcess" style="width: 80px; display:inline-block;" '
              +'placeholder="HH:MM:ss"'
              // +' onkeypress="return dataKeypress(event);" onblur = "manageData(this.value ,\''+full[0]+'\',\'lateTime\',\''+meta.row+'\');" onclick="formEditRowProcess(\''+meta.row+'\');" '
              +'disabled/>';
            }
          },
          className:"text-center",
          "width" : "10%"
        },{
          render:function(data,type,full,meta){
            if (full[1] == "1") {
              return '<button type="button" class="btn btn-default btn-sm isProcess" id="add'+meta.row+'"'
              // +' onclick="manageData(\'1\',\''+full[0]+'\',\'add\',\''+meta.row+'\')"'
              +' value="Add Case">'
              +'<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'
              +'</button>';
            }else{
              return '<button type="button" class="btn btn-default btn-sm isProcess" id="add'+meta.row+'" '
              // +'onclick="manageData(\'1\',\''+full[0]+'\',\'add\',\''+meta.row+'\')"'
              +' value="Add Case" >'
              +`${renderToString(<FaPlus/>)}`
              +'</button>';
            }
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
                <div className="text-light">Daily</div>
              </header>
              <div className="">
                <table className="table  table-bordered w-100 m-0"  ref={table}>
                  <thead>
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
                      <th className="text-center"> </th>
                    </tr>
                  </thead>
                </table>
              </div>

            </div>
  )
}

export default Doctor_Guarantee_Timetable_Daily