import { useState } from "react";
import Menu from "../components/menu";

const HomePage = () => {

    const [patients, setPatients] = useState([]);

    fetch('http://localhost:4000/medicalappointment/')
    .then(res =>res.json()).then(pacientes => console.log(pacientes));

    return(
    <main>
        <h1>Tu Doctor Online</h1>
        <hr/>
        <Menu/>
        <hr />
        return(
        {patients.map(cadaPat =>{
            <><h3>ID: {cadaPat.id}</h3><h3>Nombre: {cadaPat.nombres}</h3><h3>Apellido: {cadaPat.apellidos}</h3></>
            
        
        })};
    </main>
    );
}
export default HomePage;
