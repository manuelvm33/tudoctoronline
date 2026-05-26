import { Link } from "react-router-dom";
const Header = ({titulo,breadCrumb1, breadCrumb2, ruta}) => {
  return (
    <div className="content-header">
      <div className="container">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 font-weight-bold text-primary"> {titulo}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><Link to={ruta}>{breadCrumb1}</Link></li>
              <li className="breadcrumb-item active">{breadCrumb2}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Header;
