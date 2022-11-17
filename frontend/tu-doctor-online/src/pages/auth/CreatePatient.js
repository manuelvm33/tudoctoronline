import React , {useState, useEffect}from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const CreatePatient = () =>{

    const [patient, setPatient] = useState({
        name: '',
        lastname: '',
        email: '',
        password:'',
        confirm:''
    });

    const {name,lastname,email,password,confirm} = patient;

    const onChange = (e) =>{
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() =>{
        document.getElementById('name').focus();
    },[]);

    const createPatient = async () => {
        
        if(password !== confirm){
            const msg = "Las contraseñas son diferentes";
            swal({
                title:"Error",
                text:msg,
                icon:'error',
                buttons:{
                    confirm:{
                        text: 'Ok',
                        value:true,
                        visible:true,
                        className:'btn btn-danger',
                        closeModal:true
                    }
                }
            })
        }else{

        let id = 10932;
        const data = {
        "patient_id": id,
        "patient_name": patient.name,
        "patient_lastName": patient.lastname,
        "patient_email": patient.email,
        "patient_password": patient.password
        }
        const response = APIInvoke.invokePOST(`/patient`, data);
        const message = response.msg;
        console.log(response);
        const msg = "El usuario fue registrado correctamente";
        swal({
            title:"Information",
            text:msg,
            icon:'success',
            buttons:{
                confirm:{
                    text: 'Ok',
                    value:true,
                    visible:true,
                    className:'btn btn-primary',
                    closeModal:true
                }
            }
        });
        setPatient({
            name: '',
            lastname:'',
            email:'',
            password:'',
            confirm:''
        })

        }
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createPatient();
    }

    return (
    <div className="hold-transition login-page ">
        <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
            <Link to={"#"} className="h1">
              <b>Registrar </b> Paciente
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Ingresar datos del paciente</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombres"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="apellidos"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                  
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                </div>
            </div>
            <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar Contraseña"
                    id="confirm"
                    name="confirm"
                    value={confirm}
                    onChange={onChange}
                    required
                />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                </div>
            </div>
        <div className="social-auth-links text-center mt-2 mb-3">
            <button type="submit"  className="btn btn-block btn-primary">
                Registrar
            </button>
                <Link to={"/"} className="btn btn-block btn-danger">
                <i className="fas fa-arrow-alt-circle-left"></i>    Regregar al Login 
                </Link>
            </div>
            </form>
        </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>

    );
}

export default CreatePatient;