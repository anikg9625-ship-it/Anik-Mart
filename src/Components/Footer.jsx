import React from "react";
import { Link } from "react-router-dom";
import AnikMartLogo from "../Images/AnikMartLogo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">

        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-4">
            <Link to="/">
            <img
              src={AnikMartLogo}
              alt="logo"
              style={{ height: "100px" }}
              className="mb-2"
            />
            </Link>
            

            <p className="small">
              Your one-stop shop for groceries, beauty, outfits & more.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/groceries" className="text-white text-decoration-none">Groceries</Link></li>
              <li><Link to="/beauty" className="text-white text-decoration-none">Beauty</Link></li>
              <li><Link to="/outfits" className="text-white text-decoration-none">Outfits</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="small mb-1">📍 India</p>
            <p className="small mb-1">📞 9125862135</p>
            <p className="small">✉️ support@anikmart.com</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center pb-3 small">
          © {new Date().getFullYear()} Anik Mart. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;