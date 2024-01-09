
import {Routes, Route} from "react-router-dom"
import DoctorProfile from './components/doctorProfile/DoctorProfile.jsx'
import DoctorDetail from "./components/doctorDisDetail/Doctor_Display_Detail.jsx"
import Doctor_Note_Create from "./components/doctorNote/Doctor_Note_Create.jsx"
import Doctor_Guarantee_Create from "./components/doctorGuarantee/Doctor_Guarantee_Create.jsx"
import Doctor_Guarantee_Timetable from "./components/doctorGuarantee/Doctor_Guarantee_Timetable.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.19.0/font/bootstrap-icons.css" rel="stylesheet"/>

function App() {
 

  return (
   <Routes>
     <Route path='/' element={<DoctorProfile/>}/>
     <Route path='/newpage' element={ <DoctorDetail/>}/>
     <Route path='/noteCreate' element={ <Doctor_Note_Create/>}/>
     <Route path='/guaranteeCreate' element={ <Doctor_Guarantee_Create/>}/>
     <Route path='/guaranteeTimetable' element={ <Doctor_Guarantee_Timetable/>}/>
      
   </Routes>
  )
}

export default App
