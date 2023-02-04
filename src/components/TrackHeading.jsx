import React from "react";
import * as TrackHeadingStyles from "../styles/TrackHeading.module.scss";

function TrackHeading() {
  return (
    <div className={TrackHeadingStyles.headingContainer}>
      <span>Track Expense</span> <span>across</span>
      <span className={TrackHeadingStyles.gradientText}>10+</span>{" "}
      <span>eCommerce Platforms</span>
    </div>
  );
}

export default TrackHeading;
