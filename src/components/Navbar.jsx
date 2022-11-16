import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="left-navbar">
      <h1>Web Design</h1>
    </div>
    <div className="right-navbar">
      <ul className="nav-link ">
        <li>
          <Link to ="/">Home</Link>
          
          
        </li>
        <li>
        <Link to ="about">About</Link>
          
        </li>
        <li>
        <Link to ="/services">Services</Link>
          
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
