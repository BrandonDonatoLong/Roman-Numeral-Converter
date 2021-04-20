import LandingPageHeader from "./components/LandingPageHeader";
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import CalculatorBody from "./components/CalculatorBody";

function App() {
  return (
    <>
      <Container
        maxWidth={"lg"}
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          backgroundColor: "white",
        }}
      >
        <LandingPageHeader />
      </Container>
      <Container maxWidth={"lg"}>
        <CalculatorBody />
      </Container>
    </>
  );
}

export default App;
