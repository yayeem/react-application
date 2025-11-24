import React from "react";
import "./Footer.css";

import logo from '../assets/TMDB_logo.svg';

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-6">Developed by: Imee Balderas</div>
          <div class="col-md-6">
            <img class="img-fluid" src={logo} alt="logo"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
