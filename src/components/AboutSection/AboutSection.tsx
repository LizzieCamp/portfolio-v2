import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type AboutItem = {
  words: string;
  className: string[];
  style?: CSSProperties;
};
const aboutItems: AboutItem[] = [
  {
    words:
      "Hello👋🏻 I'm Elizabeth, a Frontend Software Engineer, currently working for Elsevier.",
    className: ["position", "left"],
  },
  {
    words: "I graduated Univeristy in 2019 with a 2.1 in Computer Science.",
    className: ["position onRight", "right"],
    style: { width: "100vw", paddingTop: "350px" },
  },
  {
    words:
      " I have 4 years professional experience working as a Software Engineer.",
    className: ["position", "left"],
    style: { paddingTop: "700px" },
  },
  {
    words: "This will be another super fun fact",
    className: ["position onRight", "right"],
    style: { width: "100vw", paddingTop: "1050px" },
  },
  {
    words: "This will be another super fun fact",
    className: ["position", "left"],
    style: { paddingTop: "1400px" },
  },
  {
    words: "This will be another super fun fact",
    className: ["position onRight", "right"],
    style: { width: "100vw", paddingTop: "1750px" },
  },
];

const renderAbout = aboutItems.map((item, index) => (
  <ParallaxLayer
    offset={1.5}
    speed={0.5}
    style={item.style ? item.style : undefined}
    className={item.className[0]}
    key={index}
  >
    <p className={`messages + ${item.className[1]}`}>{item.words}</p>
  </ParallaxLayer>
));

export const AboutSection = () => <>{renderAbout}</>;
