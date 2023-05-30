import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../styles/styles";
import { AboutSection } from "../AboutSection/AboutSection";
import { IntroSection } from "../IntroSection/IntroSection";
import { NavBar } from "../NavBar/NavBar";


export const alignCenter = { display: "flex", alignItems: "center" };
export const About = () => {
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <Parallax pages={10}>
        <IntroSection />

        {/* NAV BAR  */}
        <ParallaxLayer
          sticky={{ start: 1, end: 10 }}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            justifyContent: "right",
          }}
        >
          <NavBar />
        </ParallaxLayer>

        {/* ABOUT ME SECTION */}
        <ParallaxLayer
          className="alignItems"
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
          style={{
            ...alignCenter,
            alignItems: "unset",
            width: "100vw",
            paddingTop: "100px",
            paddingLeft: "150px",
          }}
          sticky={{ start: 4, end: 7 }}
        >
          <p style={{ color: "#E2037A", fontSize: "40px" }}>Projects</p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            width: "100vw",
            paddingLeft: "250px",
          }}
          // offset={4}
          // speed={0}
          sticky={{ start: 4, end: 5 }}
        >
          <div
            style={
              {
                // backgroundColor: "#E2037A",
                // marginTop: "200px",
                // width: "400px",
                // height: "400px",
              }
            }
          >
            <img style={{ width: "35vw" }} src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "center",

            justifyContent: "right",
          }}
        >
          <p
            style={{
              marginTop: "350px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
              marginRight: "200px",
            }}
          >
            Create your own 'to watch' and 'favourites' lists from a Netlfix
            inspired app.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "center",
            marginTop: "550px",
            justifyContent: "right",
            marginBottom: "500px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
              marginRight: "200px",
            }}
          >
            Created using React, TypeScript
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            width: "100vw",
            paddingLeft: "250px",
            paddingTop: "350px",
          }}
          offset={6}
          speed={0}
        >
          <p
            style={{
              marginTop: "350px",
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Create your own 'to watch' and 'favourites' lists from a Netlfix
            inspired app.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          // offset={5}
          // speed={0}
          sticky={{ start: 6, end: 7 }}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "center",

            justifyContent: "right",
          }}
        >
          <div
            style={{
              // backgroundColor: "#E2037A",
              // marginTop: "350px",
              // width: "400px",
              // height: "400px",
              marginRight: "200px",
            }}
          >
            <img style={{ width: "35vw" }} src="./images/watchList.png" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
