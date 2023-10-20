import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type PortfolioVersionOneItem = {
  linkText?: string;
  href?: string;
  word: string;
  classNames?: string[];
  layerStyle?: CSSProperties;
  paragraphStyle?: CSSProperties;
};

const portfolioVersionOneItems: PortfolioVersionOneItem[] = [
  {
    word: "Portfolio version 1. My first visual CV used to showcase my skills and personal projects.",
    layerStyle: { marginTop: "350px" },
  },
  {
    linkText: "Portfolio V1",
    href: "https://lizziecamp.github.io/Portfolio/",
    word: "Created using React, Javascript, SCSS. ",
    layerStyle: { marginTop: "350px" },
    paragraphStyle: { marginTop: "550px" },
  },
];

const renderWords = portfolioVersionOneItems.map((item, index) => (
  <ParallaxLayer
    offset={9}
    speed={0}
    className="position projects left"
    style={item.layerStyle ? item.layerStyle : undefined}
  >
    <p
      style={item.paragraphStyle ? item.paragraphStyle : undefined}
      className="projectsText"
    >
      {item.word}
      <a className="projectLink" target="_blank" href={item.href}>{item.linkText}</a>
    </p>
  </ParallaxLayer>
));

export const PortfolioVersionOne = () => <>{renderWords}</>;
