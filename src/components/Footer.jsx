import React from "react";
import "./Footer.css";

import logo from "../assets/TMDB_logo.svg";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center">© All Rights Reserved 2025</div>
          <div class="col-md-4 text-center">
            Author: <br></br>Imee Balderas
          </div>
          <div class="col-md-4 text-center">
            <img class="img-fluid" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
