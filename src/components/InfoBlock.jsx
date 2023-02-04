import React from "react";
import * as InfoBlockStyles from "../styles/InfoBlock.module.scss";
import InsightsTab from "./InsightsTab";
import Integration from "./Integration";
import Products from "./Products";
import TrackHeading from "./TrackHeading";
import Card from "./Card";

function getGridItem(gridType) {
  console.log(gridType);
  switch (gridType) {
    case "products":
      return <Products />;
    case "trackHeading":
      return <TrackHeading />;
    case "insights":
      return <InsightsTab />;
    case "integration":
      return <Integration />;
    case "card":
      return <Card />;
    default:
      return <div>No Choice</div>;
  }
}

function InfoBlock(props) {
  const {
    coordinates: { rowStart, rowEnd, columnStart, columnEnd },
    type,
  } = props;

  const styleVariables = {
    "--rowStart": rowStart,
    "--rowEnd": rowEnd,
    "--columnStart": columnStart,
    "--columnEnd": columnEnd,
  };

  return (
    <div style={styleVariables} className={InfoBlockStyles.container}>
      {getGridItem(type)}
    </div>
  );
}

export default InfoBlock;
