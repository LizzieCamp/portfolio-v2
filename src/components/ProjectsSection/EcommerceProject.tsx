import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type EcommerceProjectItem = {
  word: string;
  classNames?: string[];
  layerStyle?: CSSProperties;
  paragraphStyle?: CSSProperties;
};

const ecommerceProjectItems: EcommerceProjectItem[] = [
  {
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam urna ut nulla rhoncus, in convallis nunc ultricies.",
    layerStyle: { marginTop: "350px" },
  },
  {
    word: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam urna ut nulla rhoncus, in convallis nunc ultricies.",
    layerStyle: { marginTop: "350px" },
    paragraphStyle: { marginTop: "550px" },
  },
  {
    word: "This project is built using React, Typescript and SCSS.",
    layerStyle: { marginTop: "350px" },
    paragraphStyle: { marginTop: "1050px" },
  },
];

const renderWords = ecommerceProjectItems.map((item, index) => (
  <ParallaxLayer
    offset={4}
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

export const EcommerceProject = () => <>{renderWords}</>;
