import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Title } from "../About/Title";

export const Test = () => {
  const alignCenter = {
    display: "flex",
    alignItems: "center",
  };

  const items = ["A", "B", "O", "U", "T"];



  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <Parallax pages={2} >
        <ParallaxLayer 
        speed={-1}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img
            width="250px"
            style={{ marginBottom: "150px" }}
            src="./images/AvatarMaker.png"
          />
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            ...alignCenter,
            color: "white",
            marginTop: "100px",
            left: "25%",
          }}
          offset={0}
          speed={1}
        >
          <h1>SOFTWARE</h1>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 2 }}>
          <Title items={items} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
