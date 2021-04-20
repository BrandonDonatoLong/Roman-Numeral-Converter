import LandingPageHeader from "./components/LandingPageHeader";
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth={"lg"}>
      <LandingPageHeader />
      <Typography variant="body1">
        Edit <code>src/App.js</code> and save to reload.
      </Typography>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Container>
  );
}

export default App;
