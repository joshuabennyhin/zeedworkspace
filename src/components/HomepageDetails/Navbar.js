import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { WidthFull } from "@mui/icons-material";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    setIsSmallScreen(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      style={{
        background: isScrolled ? "white" : "linear-gradient(#F9BD6448, #BFBDB948)",
        boxShadow:isScrolled?" 5px 5px 5px 5px ":"none"
      }}
    >
      <div style={{ marginLeft: 40 }} className="left-buttons">
        <img
          style={{ height: isSmallScreen ? "30px" : "40px" }}
          src="artboard-2-4x-2@4x.png"
          alt="Logo"
        />
      </div>
      <div style={{ marginRight: isSmallScreen ? 20 : 40 }} className="right-buttons">
        <button
          style={{
            height: isSmallScreen ? "34px" : "44px",
            paddingLeft: isSmallScreen ? "12px" : "32px",
            paddingRight: isSmallScreen ? "12px" : "32px",
            borderRadius: "10px",
            backgroundColor: "#FC762A",
            color: "black",
            fontWeight: "bold",
            fontSize: isSmallScreen ? "13px" : "16px",
            fontFamily: "g-bold",
          }}
        >
          Live Gold Rate
        </button>
      </div>
    </div>
  );
};

export default Navbar;


