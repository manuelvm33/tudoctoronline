import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Patient = () => {
    const [patient, setPatient] = useState([]);

    const cargarPacientes = async () => {
        const response = await APIInvoke.invokeGET("/patient");
        console.log(response);
        setPatient(response);
    };

    useEffect(() => {
        cargarPacientes();
    }, []);

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <div className="content-wrapper">
                <Header
                    titulo={"Listado De Pacientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Pacientes"}
                    ruta={"/home"}
                ></Header>
                        <div className="container-fluid">
                                    <div className="card-deck">
                                {
                                        patient.map(patient => 
                                            <div className="card border border-primary">                   
                                                <img className="card-img-top rounded-circle" src={"../dist/img/patient.png"} height={200} width={180} alt="Card image cap" />
                                                <div className="card-body" >
                                                    <div key={patient._id}>
                                                    <h5 className="card-text text-center">{patient.patient_name} {patient.patient_lastName}</h5>
                                                    <hr/>
                                                    <p className="card-text text-center">{patient.patient_email}</p>
                                                    <hr/>
                                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>                
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                                </div>
                            </div>
                    </div>
            <Footer></Footer>
        </div>
    )
};

export default Patient;
