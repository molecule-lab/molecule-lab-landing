import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import * as TimelineStyles from "../styles/Card.module.scss";
function Timeline() {
  return (
    <div className={TimelineStyles.container}>
      <h3>
        ZAP <br /> Team
      </h3>
      <div className={TimelineStyles.progressbarContainer}>
        <div>Progress</div>
        <div
          style={{ borderRadius: "5px" }}
          className={TimelineStyles.progressbar}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>20%</div>
      </div>
      <div className={TimelineStyles.cardFooter}>
        <div className={TimelineStyles.cardFooterTeam}>
          <img alt={"Avatar"} src={"https://i.pravatar.cc/100?img=17"} />
          <img alt={"Avatar"} src={"https://i.pravatar.cc/100?img=33"} />
          <img alt={"Avatar"} src={"https://i.pravatar.cc/100?img=13"} />
          <img alt={"Avatar"} src={"https://i.pravatar.cc/100?img=34"} />
        </div>
        <div className={TimelineStyles.cardFooterDate}>
          <CalendarMonthIcon fontSize='small' />
          <p>Jan 17</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
