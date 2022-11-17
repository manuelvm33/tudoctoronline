import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const MedicalAppo = () => {
    const [medicalappointment, setMedicalAppointment] = useState([]);

    const cargarPacientes = async () => {
        const response = await APIInvoke.invokeGET("/medicalappointment");
        console.log(response);
        setMedicalAppointment(response);
    };

    useEffect(() => {
        cargarPacientes();
    }, []);

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <div className="content-wrapper">
                <Header
                    titulo={"Listado De Especialistas"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Especialistas"}
                    ruta={"/home"}
                ></Header>
                        <div className="container-fluid">
                                    <div className="card-deck">
                                {
                                        medicalappointment.map(medicalappo => 
                                            <div className="card border border-primary">                   
                                                <div className="text-center">
                                                <img classname="rounded mx-auto d-block" src={"../dist/img/appointment.png"} height={300} width={300} alt="Card image cap" />
                                                </div>
                                                <div classname="card-body" key={medicalappo._id}>
                                                    <h5 className="card-text text-center">Fecha: {medicalappo.medical_appointment_fechahora}</h5>
                                                    <hr/>
                                                    <p className="card-text text-center"> Paciente ID :{ medicalappo.patient_id}</p>
                                                    <hr/>
                                                    <p className="card-text text-center"> Especialista ID :{ medicalappo.specialist_id}</p>
                                                    <hr/>
                                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>                
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

export default MedicalAppo;

