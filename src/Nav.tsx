import { useRef } from "react";
import { Link } from "react-router-dom";

let Links: { Name: string; Path: string }[] = [
  { Name: "St Valentines Couples Massage ", Path: "valentines" },
  {
    Name: "Deep-tissue and Sports Massage",
    Path: "deep-tissue-and-sports-massage",
  },
  { Name: "Thai Yoga Massage", Path: "thai-yoga-massage" },
  { Name: "Pregnancy Massage", Path: "pregnancy-massage" },
  { Name: "Chair Massage", Path: "chair-massage" },
  { Name: "Couples Massage", Path: "couples-massage" },
  { Name: "About", Path: "about" },
  { Name: "Contact", Path: "contact" },
  { Name: "Bookings", Path: "booking" },
];

const showValentinesDayMenuItem = () => {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const start = new Date(year, 0, 20); // start on the yyyy Jan 20th
  const end = new Date(year, 1, 15); // end on the yyyy feb 15th
  return nowDate >= start && nowDate <= end;
};

export default function Nav() {
  const menuRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    if (menuRef.current?.offsetParent !== null) {
      menuRef.current?.click();
    }
  };

  if (!showValentinesDayMenuItem()) {
    Links = Links.filter((e) => e.Path !== "valentines");
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Jeanette Mahoney
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={menuRef}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Links.map((l) => (
                <li className="nav-item" key={l.Name}>
                  <Link to={l.Path} className="nav-link" onClick={closeMenu}>
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
