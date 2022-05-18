import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="text-center pb-2 pt-3"
      style={{
        backgroundColor: "#219EBC",
        height: "60px",
        bottom: "0",
        width: "100%",
        position: "absolute",
      }}
    >
      <p>&copy; Giedre Bielske 2022</p>
    </footer>
  );
}

export default Footer;
