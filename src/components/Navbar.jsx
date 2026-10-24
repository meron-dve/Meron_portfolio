function Navbar() {
  return (
    <div className="container">
    <div className="navbar">
      <p className="navbar-name">Meron.dev</p>
      <ul className="navbar-list">
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}
export default Navbar;
