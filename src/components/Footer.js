import React from "react";
import "./Footer.css";
import email from '../images/email-icon.png'
import address from '../images/address-icon.png'
import phone from '../images/call-icon.png'

function Footer() {
  return (
    <div className="main-footer">
          {/* Column1 */}
          <div className="mainwrapper">
            <h1>GET IN TOUCH</h1>
          </div>
            <div className="symbolwrap">
            <h6 className="list-unstyled row justify-content-space-between">
              <div className="wrap">
              <img class="img" src={phone}/>
              <li>Phone:+447519478697</li>
              </div>
              <div className="wrap">
              <img class="img" src={email}/>
              <li>Email: aahmed251@outlook.com</li>
              </div>
              <div className="wrap">
              <img class="img" src={address}/>
              <li>Wellingborough, UK</li>
              </div>
            </h6>
            </div>
          
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Site created by Ayan Ahmed
          </p>
        </div>
    </div>
  );
}

export default Footer;