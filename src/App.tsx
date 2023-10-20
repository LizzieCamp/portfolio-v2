import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import "./styles/styles";
import { AboutSection } from "./components/AboutSection/AboutSection";
import Form from "./components/Form";
import { IntroSection } from "./components/IntroSection/IntroSection";
import { EcommerceProject } from "./components/ProjectsSection/EcommerceProject";
import { FightClub } from "./components/ProjectsSection/FightClub";
import { PortfolioVersionOne } from "./components/ProjectsSection/PortfolioVersionOne";
import { WatchList } from "./components/ProjectsSection/WatchList";
import { ExperienceSection } from "./components/ExperienceBar/ExperienceBar";

export const alignCenter = { display: "flex", alignItems: "center" };

const App = () => {
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <Parallax pages={18}>
        <IntroSection />
        {/* ABOUT ME SECTION */}
        <ParallaxLayer
          className="alignItems aboutImage"
          style={{
            width: "100vw",
            justifyContent: "center",
          }}
          sticky={{ start: 1, end: 3 }}
        >
          <img className="meImage" src="./images/AvatarMakerHappy.png" />
        </ParallaxLayer>
        <AboutSection />

        {/* PROJECTS PART  */}

        <ParallaxLayer
          className="title"
          style={{
            zIndex: "-1",
          }}
          sticky={{ start: 4, end: 11 }}
        >
          <h1>Projects</h1>
        </ParallaxLayer>
        <ParallaxLayer
          className="projectImage"
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
          sticky={{ start: 4, end: 5 }}
        >
          <div>
            <img src="./images/online-shop.png" />
          </div>
        </ParallaxLayer>
        <EcommerceProject />
        <WatchList />
        <ParallaxLayer
          className="projectImage right"
          sticky={{ start: 6, end: 7 }}
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
        >
          <div>
            <picture>
              <img className="video" srcSet="./images/watch-list-gif.gif" />
              <img
                className="fallbackImage"
                src="./images/the-watch-list-fallback.png"
                alt="Fallback Image"
              />
            </picture>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="projectImage"
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
          sticky={{ start: 8, end: 9 }}
        >
          <div>
            <picture>
              <img
                className="video"
                srcSet="./images/fight-club-placeholder.png"
              />
              <img
                className="fallbackImage"
                src="./images/fight-club-placeholder.png"
                alt="Fallback Image"
              />
            </picture>
          </div>
        </ParallaxLayer>
        <FightClub />
        <PortfolioVersionOne />
        <ParallaxLayer
          className="projectImage right"
          sticky={{ start: 10, end: 11 }}
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
        >
          <div>
            <picture>
              <img className="video" srcSet="./images/portfolio-gif.gif" />
              <img
                className="fallbackImage"
                src="./images/portfolio-v1-fallback.png"
                alt="Fallback Image"
              />
            </picture>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="title"
          style={{
            zIndex: "-1",
          }}
          sticky={{ start: 12, end: 13.5 }}
        >
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Experience</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            paddingTop: "200px",
            zIndex: "-1",
          }}
          sticky={{ start: 12, end: 13.5 }}
        >
          <div className="experienceBar"></div>
        </ParallaxLayer>
        <ExperienceSection />
        <ParallaxLayer className="title" sticky={{ start: 15, end: 17 }}>
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Contact Me</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ paddingTop: "250px" }}
          sticky={{ start: 15, end: 17 }}
        >
          <Form />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
