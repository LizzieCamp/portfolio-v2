import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type IntroItem = {
  word: string;
  classNames: string[];
  style?: CSSProperties;
  speed: number;
};
const introItems: IntroItem[] = [
  {
    word: "ELIZABETH",
    classNames: ["elizabethText", "homePageText"],
    speed: -5,
  },
  {
    word: "CAMP",
    classNames: ["campText onRight", "homePageText right"],
    speed: 5,
    style: { width: "100vw" },
  },
  {
    word: "SOFTWARE",
    classNames: ["softwareText", "homePageText"],
    speed: -4,
  },
  {
    word: "ENGINEER",
    classNames: ["engineerText onRight", "homePageText right"],
    speed: 4,
    style: { width: "100vw" },
  },
];

const renderWords = introItems.map((item, index) => (
  <ParallaxLayer
    horizontal={true}
    offset={0}
    speed={item.speed}
    className={item.classNames[0]}
    style={item.style ? item.style : undefined}
  >
    <p className={item.classNames[1]}>{item.word}</p>
  </ParallaxLayer>
));

export const IntroSection = () => <>{renderWords}</>;
