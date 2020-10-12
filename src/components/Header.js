import React from "react";
import {Link} from "react-scroll"
// import { Link } from "react-router-dom";

const Header = ({ name, contactEmail }) => {
  return (
    <div>
      <div className="header_container">
        <div className="header-wrapper">
          <img src="assets/logo2.png" height="auto" alt="my logo" />
        </div>
        {/* <Link to="/"><h1>{name}</h1></Link> */}
        <nav>
          <ul>
            {/* <li><Link to="/about">about</Link></li> */}
            <li>
              <Link to="home_container" smooth={true} duration={1000}>About</Link>
            </li>
            <li>
              <Link to="work_container" smooth={true} duration={1000}>Portfolio</Link>
            </li>
            <li>
              {/* <a href={`mailto:${contactEmail}`}>Contact</a> */}
              <Link to="contact_container" smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;