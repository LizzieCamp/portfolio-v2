import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type WatchListItem = {
  word: string;
  classNames?: string[];
  layerStyle?: CSSProperties;
  paragraphStyle?: CSSProperties;
};

const watchListItems: WatchListItem[] = [
  {
    word: "Create your own 'to watch' and 'favourites' lists from a Netlfix inspired app.",
    layerStyle: { marginTop: "350px" },
  },
  {
    word: "Created using React, TypeScript",
    layerStyle: { marginTop: "550px" },
    paragraphStyle: { marginTop: "550px" },
  },
];

const renderWords = watchListItems.map((item, index) => (
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

export const WatchList = () => <>{renderWords}</>;
