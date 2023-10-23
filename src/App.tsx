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
      <Parallax pages={17}>
        <IntroSection />
        {/* ABOUT ME SECTION */}
        <ParallaxLayer
          className="alignItems aboutImage"
          style={{
            width: "100vw",
            justifyContent: "center",
          }}
          sticky={{ start: 1, end: 2 }}
        >
          <img className="meImage" src="Images/AvatarMakerHappy.png" />
        </ParallaxLayer>
        <AboutSection />

        {/* PROJECTS PART  */}

        <ParallaxLayer
          className="title"
          style={{
            zIndex: "-1",
          }}
          sticky={{ start: 3, end: 10 }}
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
          sticky={{ start: 3, end: 4 }}
        >
          <div>
            <img src="Images/online-shop.png" />
          </div>
        </ParallaxLayer>
        <EcommerceProject />
        <WatchList />
        <ParallaxLayer
          className="projectImage right"
          sticky={{ start: 5, end: 6 }}
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
        >
          <div>
            <picture>
              <img className="video" srcSet="Images/watch-list-gif.gif" />
              <img
                className="fallbackImage"
                src="Images/the-watch-list-fallback.png"
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
          sticky={{ start: 7, end: 8 }}
        >
          <div>
            <picture>
              <img
                className="video"
                srcSet="Images/fight-club-placeholder.png"
              />
              <img
                className="fallbackImage"
                src="Images/fight-club-placeholder.png"
                alt="Fallback Image"
              />
            </picture>
          </div>
        </ParallaxLayer>
        <FightClub />
        <PortfolioVersionOne />
        <ParallaxLayer
          className="projectImage right"
          sticky={{ start: 9, end: 10 }}
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
          }}
        >
          <div>
            <picture>
              <img className="video" srcSet="Images/portfolio-gif.gif" />
              <img
                className="fallbackImage"
                src="Images/portfolio-v1-fallback.png"
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
          sticky={{ start: 11, end: 12.5 }}
        >
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Experience</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            paddingTop: "200px",
            zIndex: "-1",
          }}
          sticky={{ start: 11, end: 12.5 }}
        >
          <div className="experienceBar"></div>
        </ParallaxLayer>
        <ExperienceSection />
        <ParallaxLayer className="title" sticky={{ start: 14, end: 16 }}>
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Contact Me</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ paddingTop: "250px" }}
          sticky={{ start: 14, end: 16 }}
        >
          <Form />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
