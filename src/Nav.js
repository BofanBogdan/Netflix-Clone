import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  // const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  const navigate = useNavigate();
  function profile() {
    navigate("/profile");
  }
  function home() {
    navigate("/");
  }

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          onClick={home}
          className="navLogo"
          src="/assets/netflix-logo-png.png"
          alt="logo"
        />

        <img
          onClick={profile}
          className="navAvatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRWmEJlGi5aIzr_oo-d73CEVySRqVxpR2beb4NWCVzw&s"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
