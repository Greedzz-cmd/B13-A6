import "./App.css";
import Banner from "./components/Homepage/banner/Banner";
import StatsSection from "./components/Homepage/stats-section/StatsSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
    </>
  );
}

export default App;
