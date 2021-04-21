import LandingPageHeader from "./components/LandingPageHeader";
import "@fontsource/roboto";
import CalculatorPage from "./components/CalculatorPage";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header style={{ height: "100%" }}>
        <LandingPageHeader />
        <CalculatorPage />
      </header>
    </div>
  );
}

export default App;
