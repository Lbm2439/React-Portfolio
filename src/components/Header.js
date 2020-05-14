import React from "react";
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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              {/* <a href={`mailto:${contactEmail}`}>Contact</a> */}
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;