function Heading() {
  return (
    <div className="row text-center heading-lozenge rounded m-3">
      <div className="col-md-3">
        <img src="logo.png" className="img-fluid pt-5" alt="logo" />
      </div>
      <div className="col-md-6 text-center ">
        <h1 className="vdisplay-4 cursive">Jeanette Mahoney</h1>
        <h2 className="display-4 cursive">Massage Therapy </h2>
    
        
        <br />
        BA (HONS) LSSM LCM OSM thai (DIP) BTEC  (Sports Higher DIP)
        <br />
        <b>07932-568566</b>
      </div>
      <div className="col-md-3 d-none d-md-block">
        <img src="logo.png" className="img-fluid pt-5" alt="logo" />
      </div>
    </div>
  );
}

export default Heading;
