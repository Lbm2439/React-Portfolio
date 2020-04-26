import React from "react";
// import { Link } from "react-router-dom";

const Header = ({ name, contactEmail }) => {
  return (
    <div>
      <div className="header_container">
        <img src="assets/logo2.png" width="450vh" height="auto" alt="my logo" />
        {/* <Link to="/"><h1>{name}</h1></Link> */}
        <nav>
          <ul>
            {/* <li><Link to="/about">about</Link></li> */}
            <li>
              <a href="">About</a>
              <a href="">Portfolio</a>
              <a href={`mailto:${contactEmail}`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
