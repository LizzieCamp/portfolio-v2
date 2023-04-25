import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../styles/styles";
import { Title } from "./Title";

export const About = () => {
  const items = ["A", "B", "O", "U", "T"];

  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <Parallax pages={3}>
        <ParallaxLayer sticky={{ start: 0, end: 3 }}>
          <Title items={items} />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0} speed={0.5}>
          <div style={{ margin: "5%", marginTop: "20%" }}>
            <img className="activityImage" src="./images/coffee.svg" />
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0} speed={1}>
          <div className="mediationImage">
            <img className="activityImage" src="./images/meditation.svg" />
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer
          className="sticky"
          sticky={{ start: 0, end: 3 }}
          style={{marginTop: "50vh"}}
          
        >
          <div style={{ width: "50vw" }}  >
            
            <img className="stickyBox" src="./images/me.jpg" />
            
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0} speed={1}>
          <div className="cookingImage">
            <img className="activityImage" src="./images/cooking.svg" />
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <img className="activityImage" src="./images/gym.svg" />
          </div>
        </ParallaxLayer> */}
        <div>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              ...alignCenter,
              justifyContent: "center",
              marginLeft: "25%",
              marginTop: "100vh",
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <p> EXCITING INFO ABOUT ME</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              ...alignCenter,
              justifyContent: "center",

              marginLeft: "25%",
              marginTop: "50vh",
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <p> ANOTHER EXCITING FACT ABOUT ME</p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              ...alignCenter,
              justifyContent: "center",

              marginTop: "150vh",
              marginLeft: "25%",
            }}
          >
            <div style={{ backgroundColor: "white" }}>
              <p> OH WOW EVEN MORE FACT ABOUT ME</p>
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
};
