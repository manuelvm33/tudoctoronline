import React , {useState, useEffect}from "react";
import {Link, useNavigate} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const Login = () => {
    //to redirect from one component to another
    const navigate = useNavigate();

    const [patient, setPatient] = useState({
        email: '',
        password:'',
    });

    const {email,password} = patient;

    const onChange = (e) =>{
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });
    }
    const login = async () => {
        const data = {
            email: patient.email,
            password: patient.password
        }
        const response = await APIInvoke.invokeGET('/patient');
        var isValidUser = 0;
        const validar = response.map( patient => {
            if(patient.patient_email === data.email && patient.patient_password === data.password){
                isValidUser=1;
            }
        });
        if(isValidUser===0){

            const msg = "No fue posible iniciar sesion.\nEl usuario no se encuentra registrado.\nIntente nuevamente";
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
            //redirect to home
            navigate('/home')
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        login();
    }

    useEffect(() =>{
        document.getElementById('email').focus();
    },[]);


  return (
    <div className="hold-transition login-page bg">
    <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
            <Link to={"#"} className="h1">
              <b>Tú Doctor</b> Online
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Iniciar sesión</p>
            <form onSubmit={onSubmit}>
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
            
        <div className="social-auth-links text-center mt-2 mb-3">
            <button type="submit"  className="btn btn-block btn-primary">
                Ingresar 
            </button>
                <Link to={"/crear-paciente"} className="btn btn-block btn-danger">
                    Registrar nuevo paciente
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
};
export default Login;
