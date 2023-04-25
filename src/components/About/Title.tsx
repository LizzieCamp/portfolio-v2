import { useRef } from "react";
import { styled } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";

// const AppContainer = styled("div", {
//   width: "100%",
//   height: "100%",
//   margin: "20px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// });

const Container = styled("div", {
  display: "flex",
  gap: 10,
  height: 300,
  width: 300,
});

const Box = styled("div", {
  position: "relative",
  height: 50,
  width: 50,
});

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#FFB2E8",
  border: "solid 2px #1a1a1a",
  color: "#fafafa",
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#fffff",
  border: "solid 2px #ffff",
  color: "#fafafa",
});

type titleProps = {
  items: string[];
};

export const Title = ({ items }: titleProps) => {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    // <AppContainer>
    <Container onMouseOverCapture={handleClick}>
      {trail.map(({ rotateX }, i) => (
        <Box key={i}>
          <FrontBox
            key={items[i]}
            style={{
              transform: rotateX.to(
                (val) => `perspective(600px) rotateX(${val}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            {items[i]}
          </FrontBox>
          <BackBox
            style={{
              transform: rotateX.to(
                (val) => `perspective(600px) rotateX(${180 - val}deg)`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            {items[i]}
          </BackBox>
        </Box>
      ))}
    </Container>
    // </AppContainer>
  );
};
