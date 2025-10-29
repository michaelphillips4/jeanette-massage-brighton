export default function Contact() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div>
            Jeanette is available for appointments in Hove at the following
            venues:
            <br />
            <br />
          </div>

          <p>
            <b>Private Practice:</b>
            <br />
            <i>
              41 Tisbury rd
              <br />
              Hove
              <br />
              BN3 3BL
              <br />
            </i>
            To book please phone Jeanette directly <br />
            <b className="sp bigtext">&nbsp;07932-568566</b>
            <br />
            <b className="sp bigtext">Appointments at various times</b>
          </p>

          <hr />

          <p>
            Referrals made to:
            <br />
            <i>
              <b>
                Dr. Anne French
                <br />
                Coast Chiropractic clinic
              </b>
              <br />
              30, The Drive,
              <br /> Lancing <br />
              BN15 8PS
              <br />
              <b>
                07908- 225037
                <br />
                <a href="https://www.coast-chiropractic.co.uk">
                  www.coast-chiropractic.co.uk
                </a>
              </b>
            </i>
          </p>
        </div>

        <br />
        <br />

        <div className="col-md-6 text-center ">
          <img
            src="Pictures/fy.JPG"
            id="jeanetteLeft"
            className="rounded img-fluid mb-3"
            alt="flower"
          />

          <img
            src="Pictures/contact.jpg"
            id="jeanetteRight"
            className="rounded img-fluid"
            alt="jeanette"
          />
        </div>
      </div>
    </div>
  );
}
