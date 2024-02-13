import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="row text-center heading-lozenge mb-2 ">
      <div className="col-md-3  ">
        <Link to="/"><img src="logo.png" className="img-fluid pt-3 pt-md-5" alt="logo" /></Link>
      </div>
      <div className="col-md-6 text-center ">
        <h1 className="display-5 cursive  ">Jeanette Mahoney</h1>
        <h2 className="2display-6 cursive">Massage Therapy </h2>
<span className="">
        BA (HONS) LSSM LCM OSM thai (DIP) BTEC  (Sports Higher DIP)<br /></span>
        
        <b className="">07932-568566</b>
      </div>
      <div className="col-md-3 d-none d-md-block">
      <Link to="/"> <img src="logo.png" className="img-fluid pt-5" alt="logo" /></Link>
      </div>
    </div>
    
  );
}

export default Heading;
