import LandingPageHeader from "./components/LandingPageHeader";
import "@fontsource/roboto";
import ConverterPage from "./components/ConverterPage";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header style={{ height: "100%" }}>
        <LandingPageHeader />
        <ConverterPage />
      </header>
    </div>
  );
}

export default App;
