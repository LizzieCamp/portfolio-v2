import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../styles/styles";
import { NavBar } from "../NavBar/NavBar";

export const About = () => {

  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <Parallax pages={10}>
        <ParallaxLayer
          horizontal={true}
          offset={0}
          speed={-5}
          className="elizabethText"
        >
          <p className="homePageText">ELIZABETH</p>
        </ParallaxLayer>
        <ParallaxLayer
          horizontal={true}
          offset={0}
          speed={5}
          className="campText"
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",

            justifyContent: "right",
          }}
        >
          <p className="homePageText right">CAMP</p>
        </ParallaxLayer>
        <ParallaxLayer
          horizontal={true}
          offset={0}
          speed={-4}
          // style={{ paddingTop: "450px" }}
          className="softwareText"
        >
          <p className="homePageText">SOFTWARE</p>
        </ParallaxLayer>
        <ParallaxLayer
          horizontal={true}
          offset={0}
          speed={4}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            // paddingTop: "600px",

            justifyContent: "flex-end",
          }}
          className="engineerText"
        >
          <p className="homePageText right">ENGINEER</p>
        </ParallaxLayer>

        {/* NAV BAR  */}
        <ParallaxLayer
          //   horizontal={true}
          //   offset={1}
          //   speed={4}
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
          style={{
            ...alignCenter,
            width: "100vw",
            justifyContent: "center",
          }}
          sticky={{ start: 1, end: 3 }}
        >
          <div>
            <img
              className="meImage"
              src="./images/AvatarMakerHappy.png"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ paddingLeft: "200px" }} className="testingThis">
          <p
            style={{
              color: "white",
              fontSize: "26px",
              width: "25%",
              borderRadius: "25px",
              padding: "25px",
              height: "fit-content",
              backgroundColor: "#E2037A",
            }}
          >
            Hello👋🏻 I'm Elizabeth, a Frontend Software Engineer, currently
            working for Elsevier.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            paddingTop: "350px",
            justifyContent: "right",
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
            I graduated Univeristy in 2019 with a 2.1 in Computer Science.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            paddingTop: "700px",
            paddingLeft: "200px",
            // width: "fit-content",
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
            }}
          >
            I have been working professionally as a Software Engineer for just
            over 3.5 years.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            paddingTop: "1050px",
            justifyContent: "right",
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
            WOW MORE FACTS
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            paddingTop: "1400px",
            paddingLeft: "200px",
            // width: "fit-content",
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
            }}
          >
            I have been working professionally as a Software Engineer for just
            over 3.5 years.
          </p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            ...alignCenter,
            width: "100vw",
            alignItems: "unset",
            paddingTop: "1750px",
            justifyContent: "right",
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
            WOW MORE FACTS
          </p>
        </ParallaxLayer>

        {/* 
        skills bit?
         */}

        {/* PROJECTS PART  */}

        <ParallaxLayer
          style={{
            ...alignCenter,
            alignItems: "unset",
            width: "100vw",
            paddingTop: "100px",
            paddingLeft: "150px",
            // justifyContent: "center",
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
