import HeaderTitle from "../HeaderTitle";

export default function PregnancyMassage() {
  return (
    <div className="container">
      <div className="">
        <HeaderTitle>Pregnancy Massage</HeaderTitle>
        <div className="row ">
          <div className="col-md-6">
            <ul className="">
              <li>
                <p>
                  Pregnancy enhances deep relaxation for both mums-to-be and
                  baby
                </p>
              </li>
              <li>
                <p>Reduces swollen hands, feet and ankles</p>
              </li>
              <li>
                <p>Alleviates lower back pain</p>
              </li>
              <li>
                <p>Helps to reduce carpal tunnel syndrome</p>
              </li>
              <li>
                <p>
                  Performed in a side-lying position for maximum comfort 
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="Pictures/Pregnancy/pregnancy3.jpg"
              className="float-md-end rounded img-fluid "
              title="pregnancy massage"
             />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
