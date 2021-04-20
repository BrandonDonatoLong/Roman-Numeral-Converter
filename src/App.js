import LandingPageHeader from "./components/LandingPageHeader";
import "@fontsource/roboto";
import CalculatorBody from "./components/CalculatorBody";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header style={{ height: "100%" }}>
        <LandingPageHeader />
        <CalculatorBody />
      </header>
    </div>
  );
}

export default App;
