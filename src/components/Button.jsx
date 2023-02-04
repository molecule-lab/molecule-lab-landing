import React from "react";
import useButtonClasses from "../hooks/useButtonClasses";

function Button(props) {
  const { children, type } = props;

  const classes = useButtonClasses(type);

  console.log(classes);

  return <button className={classes}>{children}</button>;
}

export default Button;
