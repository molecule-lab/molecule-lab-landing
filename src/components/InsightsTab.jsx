import React from "react";
import * as InsightsStyles from "../styles/InsightsTab.module.scss";
import InsightIcon from "../images/icons/insights.svg";
function InsightsTab() {
  return (
    <div className={InsightsStyles.container}>
      <div>
        <InsightIcon className={InsightsStyles.iconStyle} />
      </div>
      <div className={InsightsStyles.text}>Detailed Insights</div>
    </div>
  );
}

export default InsightsTab;
