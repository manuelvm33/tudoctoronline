import { useState } from "react";
import Menu from "../components/menu";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <div className="content-wrapper">
        <Header
          titulo={"Tú Doctor Online"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"dashboard"}
          ruta={"/home"}
        />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
                <div className="col-4 md-12 lg-6 col-xl-4 ">
                  <div className="card mb-2 bg-gradient-dark">
                    <img
                      className="card-img-top "
                      src={"../dist/img/pacient.jpg"}
                      height={513}
                      width={275}
                      alt="Pacientes"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <p className="card-title text-dark text-bold h5 align-bottom">
                       <mark> Pacientes </mark>
                      </p>
                      
                      <Link to={"listar-pacientes"}>
                        <p className="h2 text-bold"><u>Lista de pacientes</u> </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md-12 lg-6 col-xl-4 col-4">
                  <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src={"../dist/img/specialists.jpg"}
                      height={513}
                      width={275}
                      alt="Especialistas"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                       <p className="card-title text-dark text-bold h5 align-bottom">
                       <mark> Especialistas </mark>
                      </p>
                      
                      <Link to={"listar-especialistas"}>
                        <p className="h2 text-bold"><u>Lista de especialistas</u> </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4 col-4">
                <div className="card mb-2">
                    <img
                      className="card-img-top"
                      src="../dist/img/appointment.jpg"
                      height={513}
                      width={275}
                      alt="Citas Médicas"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end align-bottom">
                       <p className="card-title text-dark text-bold h5 ">
                       <mark> Citas Medicas </mark>
                      </p>
                      
                      <Link to={"listar-citas"}>
                        <p className="h2 text-bold"><u>Lista de citas medicas</u> </p>
                      </Link>
                    </div>
                  </div>
                  
                </div>
            
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
