import React from "react";
import FooterLogo from "../../assets/images/FooterLogo.svg";
import "../../assets/sass/layout/_footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={FooterLogo} alt="Logo Kasa" />
      <p className="footer__text">© 2022 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
