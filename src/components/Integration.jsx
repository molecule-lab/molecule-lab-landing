import React from "react";
import * as IntegrationStyles from "../styles/Integration.module.scss";
import IntegrationImage from "../images/products/integration.svg";
function Integration() {
  return (
    <div>
      <IntegrationImage className={IntegrationStyles.iconStyle} />
    </div>
  );
}

export default Integration;
