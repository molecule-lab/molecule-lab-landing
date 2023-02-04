import React from "react";
import * as SecondarySectionStyles from "../styles/SecondarySection.module.scss";

function SecondarySection() {
  return (
    <div className={SecondarySectionStyles.container}>
      <div className={SecondarySectionStyles.aboutUs}>
        <h3>About Us </h3>
        <p>
          At MoleculeLab, we understand the challenges that engineering teams
          face in managing their projects, workflow, and personnel. That's why
          we've developed a comprehensive SaaS platform specifically designed to
          tackle these issues head-on.
        </p>
        <p>
          Our team consists of experienced engineers and project managers who
          have faced these challenges first-hand. We're passionate about using
          technology to make engineering team management easier and more
          efficient.
        </p>
        <p>
          Our platform integrates all aspects of engineering team management
          into one user-friendly interface, from project management and task
          assignment to performance tracking and progress reporting. With
          MoleculeLab, engineering teams can focus on what they do best –
          designing, developing, and delivering cutting-edge products.{" "}
        </p>
        <p>
          Join us on our mission to empower engineering teams and improve the
          way they work. Try MoleculeLab today and experience the difference for
          yourself.
        </p>
      </div>
    </div>
  );
}

export default SecondarySection;
