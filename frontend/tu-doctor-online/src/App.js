import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './components/menu';
import Login from './pages/auth/Login';
import HomePage from './pages/homePage';
import CreatePatient from './pages/auth/CreatePatient';
//para seleccionar 
function App() {

  return (
  
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/crear-especialista' element={<Menu/>}/>
          <Route path='/crear-paciente' exact element={<CreatePatient/>}/>
          <Route path='/agendar-cita-medica' element={<Menu/>}/>
          <Route path='/listapacientes' element={<Menu/>}/>
          <Route path='/listaespecialista' element={<Menu/>}/>
          <Route path='/listacitas' element={<Menu/>}/>

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
