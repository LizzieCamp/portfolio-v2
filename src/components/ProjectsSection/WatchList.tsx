import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";
import "../../styles/styles";

type WatchListItem = {
  linkText?: string;
  href?: string;
  word: string;
  classNames?: string[];
  layerStyle?: CSSProperties;
  paragraphStyle?: CSSProperties;
};

const watchListItems: WatchListItem[] = [
  {
    word: " is a web application that allows users to browse a variety of films from different genres and add them to a watch list.",
    layerStyle: { marginTop: "350px" },
  },
  {
    word: "The application is designed to mimic Netflix's interface, which makes it easy for users to navigate and find their desired films.",
    layerStyle: { marginTop: "350px" },
    paragraphStyle: { marginTop: "550px" },
  },
  {
    linkText: "The Watch List",
    href: "https://lizziecamp.github.io/the-watch-list/",
    word: "This project is built using React, Typescript and SCSS. ",
    layerStyle: { marginTop: "350px" },
    paragraphStyle: { marginTop: "1050px" },
  },
];

const renderWords = watchListItems.map((item, index) => (
  <ParallaxLayer
    offset={6}
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

export const WatchList = () => <>{renderWords}</>;
