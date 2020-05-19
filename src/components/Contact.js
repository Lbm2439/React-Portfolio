import React from "react";
import { FaFile, FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = ({ contactEmail, contactPara, socialLinks }) => {
  return (
    <div className="contact_container">
      <h1>Get in touch.</h1>
      <p>{contactPara}</p>
      <a className="email_link" href={`mailto:${contactEmail}`}>
        {contactEmail}
      </a>
      <div className="social_links">
        <ul>
          <li>
            <a href={socialLinks[0].url} target="_blank">
              <FaFile></FaFile>
            </a>
          </li>
          <li>
            <a href={socialLinks[1].url} target="_blank">
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li>
            <a href={socialLinks[2].url} target="_blank">
              <FaGithub></FaGithub>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

