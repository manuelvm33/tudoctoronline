import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './components/menu';
import Login from './pages/auth/Login';
import CreatePatient from './pages/auth/CreatePatient';
import Home from './pages/Home';
import Patient from './pages/dashboard/Patient';
import Medicalappointment from './pages/dashboard/MedicalAppo';
import Specialist from './pages/dashboard/Specialist';
//para seleccionar 
function App() {

  return (
  
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/crear-paciente' exact element={<CreatePatient/>}/>
          <Route path='/agendar-cita-medica' element={<Menu/>}/>
          <Route path='/home/listar-pacientes' element={<Patient/>}/>
          <Route path='/home/listar-especialistas' element={<Specialist/>}/>
          <Route path='/home/listar-citas' element={<Medicalappointment/>}/>

        </Routes>
      </Router>
    </Fragment>
    /*
    <div className='App'>
      <header>
        <img width="600" alt='hello' src='./../public/logo192.png'/>
        <hr/>
      </header>
      <HomePage/>
    </div>
    */

  );
}

export default App;
