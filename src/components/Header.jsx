import React from "react";
import * as HeaderStyles from "../styles/Header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./Button";
import InfoBlock from "./InfoBlock";
import { HEADER_GRID_LAYOUT } from "../utils/constants";

function Header() {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.wrapper}>
        <div>
          <div>
            <StaticImage
              src='../images/molecule-lab-dark-banner.png'
              alt='A dinosaur'
              placeholder='blurred'
              layout='constrained'
              width={400}
              height={100}
              transformOptions={{ fit: "cover" }}
            />
          </div>
          <h3 className={HeaderStyles.headline}>
            We design <span>products</span> to make your life
            <span> hassle free</span>
          </h3>
          <p className={HeaderStyles.tagline}>
            Molecule lab offers a comprehensive suite of products which help you
            track you day to day activity better. Without the hassle of manual
            labour
          </p>
          {/* <Button type='primary'>Know More</Button> */}
        </div>
        <div className={HeaderStyles.infogrid}>
          {HEADER_GRID_LAYOUT.map((layout, index) => (
            <InfoBlock
              key={index}
              type={layout.type}
              coordinates={layout.coordinates}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
