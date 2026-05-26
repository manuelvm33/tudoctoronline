import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Specialist = () => {
    const [specialist, setSpecialist] = useState([]);

    const cargarPacientes = async () => {
        const response = await APIInvoke.invokeGET("/specialist");
        console.log(response);
        setSpecialist(response);
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
                                        specialist.map(specialist => 
                                            <div className="card border border-primary">                   
                                            <div className="text-center">
                                                <img classname="card-img-top rounded-circle" src={"../dist/img/specialist.png"} height={200} width={180} alt="Card image cap" />
                                            </div>
                                                <div classname="card-body" key={specialist.id}>
                                                    <h5 className="card-text text-center"> {specialist.specialist_name} {specialist.specialist_lastName}</h5>
                                                    <hr/>
                                                    <p className="card-text text-center"> {specialist.specialist_email}</p>
                                                    <hr/>
                                                    <p className="card-text text-center"> {specialist.specialist_category}</p>
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

export default Specialist;
