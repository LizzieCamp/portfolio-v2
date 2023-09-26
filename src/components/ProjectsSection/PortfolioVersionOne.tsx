import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type PortfolioVersionOneItem = {
  word: string;
  classNames?: string[];
  layerStyle?: CSSProperties;
  paragraphStyle?: CSSProperties;
};

const portfolioVersionOneItems: PortfolioVersionOneItem[] = [
  {
    word: "Portfolio version 1 woop",
    layerStyle: { marginTop: "350px" },
  },
  {
    word: "Created using React, TypeScript",
    layerStyle: { marginTop: "550px" },
    paragraphStyle: { marginTop: "550px" },
  },
];

const renderWords = portfolioVersionOneItems.map((item, index) => (
  <ParallaxLayer
    offset={8}
    speed={0}
    className="position projects right"
    style={item.layerStyle ? item.layerStyle : undefined}
  >
    <p
      style={item.paragraphStyle ? item.paragraphStyle : undefined}
      className="projectsText right"
    >
      {item.word}
    </p>
  </ParallaxLayer>
));

export const PortfolioVersionOne = () => <>{renderWords}</>;
