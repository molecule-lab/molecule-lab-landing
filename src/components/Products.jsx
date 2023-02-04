import React, { useEffect, useState } from "react";
import * as ProductsStyles from "../styles/Products.module.scss";
import LevelLogo from "../images/products/level-logo.svg";
import ZAPLogo from "../images/products/zap-logo.svg";
function Products() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide === 0) {
        setActiveSlide(activeSlide + 1);
      } else {
        setActiveSlide(activeSlide - 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className={ProductsStyles.wrapper}>
      <div className={ProductsStyles.slideContainer}>
        <div
          style={{ "--transform": `translateX(${activeSlide * -100}%` }}
          className={ProductsStyles.slideWrapper}
        >
          <div className={ProductsStyles.slide}>
            <LevelLogo style={{ height: "100%", width: "100%" }} />
          </div>
          <div className={ProductsStyles.slide}>
            <ZAPLogo style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>
      <div className={ProductsStyles.dots}>
        <div className={ProductsStyles.dot}>
          {activeSlide === 0 && <span />}
        </div>
        <div className={ProductsStyles.dot}>
          {activeSlide === 1 && <span />}
        </div>
      </div>
    </div>
  );
}

export default Products;
