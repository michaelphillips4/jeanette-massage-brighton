import HeaderTitle from "../HeaderTitle";

export default function CouplesMassage() {
  return (
    <div>
      <HeaderTitle>Couples Massage</HeaderTitle>
      <div className="row">
        <div className="col-md-4">
          <ul>
            <li>
              <p>
                Experience a nurturing <b>treatment</b> and a deep sense of{" "}
                <b>relaxation</b> and <b>well-being</b> together with a special
                friend, relative or partner
              </p>
            </li>
            <li>
              <p>
                A unique experience shared by 2 people, lying side-by side, in
                the same room, at the same time
              </p>
            </li>
            <li>
              <p>
                Performed by 2 <b>therapists</b>
              </p>
            </li>
          </ul>

          <p>
            <b>
              <i>Request:</i>
              <br />
              Please book in advance
            </b>
          </p>
        </div>
        <div className="col-md-8 text-center ">
          <img
            src="Pictures/Couples/couples.jpeg"
            className="img-flex w-75 rounded "
            title="jeanette and friend giving a couples massage"
            alt="jeanette and friend giving a couples massage"
            id="couples"
          />
        </div>
      </div>
      <br /><br />
    </div>
  );
}
