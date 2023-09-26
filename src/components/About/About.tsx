import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import "../../styles/styles";
import { AboutSection } from "../AboutSection/AboutSection";
import Form from "../Form";
import { IntroSection } from "../IntroSection/IntroSection";
import { NavBar } from "../NavBar/NavBar";
import { EcommerceProject } from "../ProjectsSection/EcommerceProject";
import { FightClub } from "../ProjectsSection/FightClub";
import { PortfolioVersionOne } from "../ProjectsSection/PortfolioVersionOne";
import { WatchList } from "../ProjectsSection/WatchList";

export const alignCenter = { display: "flex", alignItems: "center" };
export const About = () => {
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <Parallax pages={18}>
        <IntroSection />

        {/* NAV BAR 
        <ParallaxLayer
          sticky={{ start: 1, end: 13 }}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            justifyContent: "flex-end",
          }}
        >
          <NavBar />
        </ParallaxLayer> */}

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
            // ...alignCenter,
            // alignItems: "unset",
            // width: "100vw",
            // paddingTop: "100px",
            // paddingLeft: "150px",
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
            // paddingLeft: "250px",
          }}
          // offset={4}
          // speed={0}
          sticky={{ start: 4, end: 5 }}
        >
          <div>
            <img src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
        <WatchList />
        <FightClub />
        <ParallaxLayer
          className="projectImage right"
          // offset={5}
          // speed={0}
          sticky={{ start: 6, end: 7 }}
          style={{
            ...alignCenter,
            width: "100vw",
            // alignItems: "center",
            zIndex: "-1",
            // justifyContent: "right",
          }}
        >
          <div
          // style={{
          //   // backgroundColor: "#E2037A",
          //   // marginTop: "350px",
          //   // width: "400px",
          //   // height: "400px",
          //   marginRight: "200px",
          // }}
          >
            <img src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="projectImage"
          style={{
            ...alignCenter,
            width: "100vw",
            zIndex: "-1",
            // paddingLeft: "250px",
          }}
          // offset={4}
          // speed={0}
          sticky={{ start: 8, end: 9 }}
        >
          <div>
            <img src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
        <PortfolioVersionOne />
        <EcommerceProject />
        <ParallaxLayer
          className="projectImage right"
          // offset={5}
          // speed={0}
          sticky={{ start: 10, end: 11 }}
          style={{
            ...alignCenter,
            width: "100vw",
            // alignItems: "center",
            zIndex: "-1",
            // justifyContent: "right",
          }}
        >
          <div
          // style={{
          //   // backgroundColor: "#E2037A",
          //   // marginTop: "350px",
          //   // width: "400px",
          //   // height: "400px",
          //   marginRight: "200px",
          // }}
          >
            <img src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="title"
          style={{
            // ...alignCenter,
            // alignItems: "unset",
            // width: "100vw",
            // paddingTop: "100px",
            // paddingLeft: "150px",
            zIndex: "-1",
          }}
          sticky={{ start: 12, end: 13 }}
        >
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Experience</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            paddingTop: "200px",
          }}
          sticky={{ start: 12, end: 13 }}
        >
          <div className="experienceBar"></div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            width: "100vw",
            paddingLeft: "250px",
            paddingTop: "250px",
          }}
          offset={12}
          speed={0}
        >
          <p
            style={{
              marginTop: "150px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Computer Science Degree, University of Reading
          </p>
          <div>2016 - 2019</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          speed={0}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "center",
            marginTop: "650px",

            justifyContent: "flex-end",
            marginBottom: "500px",
          }}
        >
          <div>2019 - 2020</div>
          <p
            style={{
              marginRight: "230px",
              marginTop: "150px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Technology Associate, Elsevier
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            width: "100vw",
            paddingLeft: "250px",
            marginTop: "1050px",
          }}
          offset={12}
          speed={0}
        >
          <p
            style={{
              marginTop: "150px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Software Engineer II
          </p>
          <div>2020 - 2022</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          speed={0}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "center",
            marginTop: "1450px",

            justifyContent: "flex-end",
            marginBottom: "500px",
          }}
        >
          <div>2022 - Present</div>
          <p
            style={{
              marginRight: "230px",
              marginTop: "150px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Software Engineer III
          </p>
        </ParallaxLayer>
        <ParallaxLayer className="title" sticky={{ start: 14.5, end: 17 }}>
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Contact Me</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ paddingTop: "250px" }}
          sticky={{ start: 14.5, end: 17 }}
        >
          <Form />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
