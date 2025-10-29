import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderTitle";

export default function Booking() {
  return (
    <div>
     <HeaderTitle>Appointments and Prices</HeaderTitle>
      <div className="row">
        <div className="col-md-6 p-2 p-md-5">
          <dl className="lead text-center ">
            <dt>
              30 minutes @ &pound;38
              <br />
            </dt>

            <dt>
              60 minutes @ &pound;63
              <br />
            </dt>

            <dt>
              90 minutes @ &pound;90
              <br />
            </dt>
          </dl>
        </div>
        <div className="col-md-6 p-2 p-md-5">
          <dl className="lead text-center text-md-start">
            <dt>Course of 3 x 30 minutes @ &pound;105</dt>
            <dt> Course of 3 x 60 minutes @ &pound;175</dt>
          </dl>

          <ul className="text-start ps-md-3">
            <li>Only available at Jeanettes' home practice </li>
            <li>All 3 treatments must be used within 6 months </li>
          </ul>
        </div>
      </div>

      <h3 className="hsp cursive">Gift Vouchers Available</h3>
      <p className="text-left">
        Prices and length of treatment times may vary slightly form venue to
        venue. Please confirm these details when booking your appointment.
        Please see <Link to="/contact">Contact page</Link> for venue details
      <br /><br /></p>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
    </div>
    
  );
}
