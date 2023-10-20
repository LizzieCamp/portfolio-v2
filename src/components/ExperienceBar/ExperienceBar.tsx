import { ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "@stitches/react";
import "../../styles/styles";

type ExpereinceItem = {
  yearLeft?: string;
  yearRight?: string;
  words: string;
  className: string;
  style?: CSSProperties;
};

const experienceItems: ExpereinceItem[] = [
  {
    yearRight: "2016 - 2019",
    words: "Computer Science Degree, University of Reading",
    className: "left",
    style: {
      paddingTop: "250px",
    },
  },
  {
    yearLeft: "2019 - 2020",
    words: "Technology Associate, Elsevier",
    className: "right",
    style: {
      marginTop: "650px",
    },
  },
  {
    yearRight: "2020 - 2021",
    words: "Software Engineer II",
    className: "left",
    style: {
      marginTop: "1050px",
    },
  },
  {
    yearLeft: "2022 - Present",
    words: "Software Engineer III",
    className: "right",
    style: {
      marginTop: "1450px",
    },
  },
];

const renderExperience = experienceItems.map((item, index) => (
  <ParallaxLayer
    offset={12}
    speed={0}
    className={`experienceMessage ${item.className}`}
    style={item.style ? item.style : undefined}
    key={index}
  >
    <div className={item.yearLeft ? "yearLabel" : undefined}>
      {item.yearLeft ? item.yearLeft : undefined}
    </div>
    <p className={`experienceText ${item.className}`}>{item.words}</p>
    <div className={item.yearRight ? "yearLabel" : undefined}>
      {item.yearRight ? item.yearRight : undefined}
    </div>
  </ParallaxLayer>
));

export const ExperienceSection = () => <>{renderExperience}</>;
