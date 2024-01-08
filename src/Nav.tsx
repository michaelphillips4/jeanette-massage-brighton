import { Link } from "react-router-dom";

const Links: { Name: string; Path: string }[] = [
  { Name: "Home", Path: "/" },
  { Name: "St Valentines Couples Massage ", Path: "valentines" },
  {
    Name: "Deep-tissue and Sports Massage",
    Path: "deep-tissue-and-sports-massage",
  },
  { Name: "Thai yoga massage", Path: "thai-yoga-massage" },
  { Name: "Pregnancy massage", Path: "pregnancy-massage" },
  { Name: "Chair massage", Path: "chair-massage" },
  { Name: "Couples massage", Path: "couples-massage" },
  { Name: "About jeanette", Path: "about" },
  { Name: "Contact", Path: "contact" },
  { Name: "Appointments and prices", Path: "booking" },
];

export default function Nav() {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const start = new Date(year, 0, 20); // start on the yyyy Jan 20th
  const end = new Date(year, 1, 15); // end on the yyyy feb 15th
  const showValentinesDayMenuItem = nowDate >= start && nowDate <= end;

  if (!showValentinesDayMenuItem) {
    Links.splice(1, 1);
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">Jeanette Mahoney </Link>
                  <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Links.map((l) => (
                <li className="nav-item" key={l.Name}>
                  <Link to={l.Path} className="nav-link">
                    {l.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}