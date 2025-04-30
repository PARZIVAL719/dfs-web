import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/login/login.jsx"
import DoctorProfile from './components/doctorProfile/DoctorProfile.jsx'
import DoctorDetail from './components/doctorDisDetail/Doctor_Display_Detail.jsx'
import Doctor_Note_Create from "./components/doctorNote/Doctor_Note_Create.jsx"
import Doctor_Guarantee_Create from "./components/doctorGuarantee/Doctor_Guarantee_Create.jsx"
import Doctor_Guarantee_Timetable from "./components/doctorGuarantee/Doctor_Guarantee_Timetable.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'

function App() {
 
  // const token = localStorage.getItem('accessToken');

  // if(!token) {
  //   return <LoginPage />
  // }

  return (
   <Routes>
     <Route path='/' element={<LoginPage/>}/>
     <Route path='/doctorProfile' element={<DoctorProfile/>}/>
     <Route path='/newpage' element={ <DoctorDetail/>}/>
     <Route path='/noteCreate' element={ <Doctor_Note_Create/>}/>
     <Route path='/guaranteeCreate' element={ <Doctor_Guarantee_Create/>}/>
     <Route path='/guaranteeTimetable' element={ <Doctor_Guarantee_Timetable/>}/>
   </Routes>
  )
}

export default App
