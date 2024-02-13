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
                  pregnancy enhances deep relaxation for both mums-to-be and
                  baby
                </p>
              </li>
              <li>
                <p>reduces swollen hands, feet and ankles</p>
              </li>
              <li>
                <p>alleviates lower back pain</p>
              </li>
              <li>
                <p>helps to reduce carpal tunnel syndrome</p>
              </li>
              <li>
                <p>
                  performed in a side-lying position for maximum comfort either
                  on the futon, thai yoga massage style,
                  <br />
                  through clothing or on the table using oils.
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
