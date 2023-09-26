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
    word: "online shop woop woop ",
    layerStyle: { marginTop: "350px" },
  },
  {
    word: "Created using React, TypeScript",
    layerStyle: { marginTop: "550px" },
    paragraphStyle: { marginTop: "550px" },
  },
];

const renderWords = ecommerceProjectItems.map((item, index) => (
  <ParallaxLayer
    offset={10}
    speed={0}
    className="position projects left"
    style={item.layerStyle ? item.layerStyle : undefined}
  >
    <p
      style={item.paragraphStyle ? item.paragraphStyle : undefined}
      className="projectsText"
    >
      {item.word}
    </p>
  </ParallaxLayer>
));

export const EcommerceProject = () => <>{renderWords}</>;
