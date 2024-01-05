
import {Routes, Route} from "react-router-dom"
import DoctorProfile from './components/doctorProfile/DoctorProfile.jsx'
import DoctorDetail from "./components/doctorDisDetail/Doctor_Display_Detail.jsx"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.19.0/font/bootstrap-icons.css" rel="stylesheet"/>

function App() {
 

  return (
   <Routes>
     <Route path='/' element={<DoctorProfile/>}/>
     <Route path='/newpage' element={ <DoctorDetail/>}/>
      
   </Routes>
  )
}

export default App
