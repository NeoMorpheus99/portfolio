import { NavLink } from "react-router-dom";

// Define a reusable NavItem component
const NavItem = ({ to, children }) => (
  <li className="nav-item">
    <NavLink
      to={to}
      className={({ isActive }) => `custom-nav p-3 ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  </li>
);

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-4 mb-lg-0">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/resume">Resume</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            {/* <NavItem to="/github">Github Repo</NavItem>
            <NavItem to="/socials">Socials</NavItem> */}
            <NavItem to="/certificates">Certificates</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
