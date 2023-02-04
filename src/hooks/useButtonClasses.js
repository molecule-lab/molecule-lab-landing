import classNames from "classnames";
import * as ButtonStyles from "../ComponentStyles/Button.module.scss";

export default function useButtonClasses(type) {
  let classes;
  switch (type) {
    case "primary":
      classes = classNames(`${ButtonStyles.primary}`);
      break;
    case "secondary":
      classes = classNames(`${ButtonStyles.secondary}`);
      break;
    default:
      classes = classNames(`${ButtonStyles.dark}`);
  }

  return classes;
}
