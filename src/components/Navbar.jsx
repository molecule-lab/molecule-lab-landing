import React from "react";
import * as NavbarStyles from "../styles/Navbar.module.scss";
import { StaticImage } from "gatsby-plugin-image";

function Navbar() {
  return (
    <div className={NavbarStyles.container}>
      <StaticImage
        src='../images/molecule-lab-light-banner.png'
        alt='A dinosaur'
        placeholder='blurred'
        layout='constrained'
        width={200}
        height={44}
        transformOptions={{ fit: "cover" }}
      />
    </div>
  );
}

export default Navbar;
