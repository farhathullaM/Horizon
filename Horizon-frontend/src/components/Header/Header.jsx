import React from "react";
import "./Header.css";
import line from "../../assets/group 2.png";
import bg_9 from "../../assets/group 9.png";
import person from "../../assets/header-girl.png";

const Header = () => {
  return (
    <header className="header">
      <div className="main">
        <h1>
          Transform Your Passion <br /> into a Profession <br /> With{" "}
          <span>Horizon</span>
        </h1>
        <img src={line} alt="" />
      </div>
      <div className="sub">
        <div className="left-header">
          <p>
            Elevate your career horizon with globally accredited degrees. <br />{" "}
            Experience education that crosses borders and expands minds. Your{" "}
            <br />
            journey to success begins here.
          </p>
          <div className="header-btn">
            <button className="btn-1">Get a free Consultation</button>
            <button className="btn-2">view Programmes <span>&#11166;&#11166;</span></button>
          </div>
          <div className="box">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="right-header">
          <img className="background-image" src={bg_9} alt="" />
          <img className="overlay-image" src={person} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
