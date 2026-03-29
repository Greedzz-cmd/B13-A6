import "./App.css";
import Banner from "./components/Homepage/banner/Banner";
import ProductsAndCarts from "./components/Homepage/productsAndCart/ProductsAndCarts";
import StatsSection from "./components/Homepage/statsSection/StatsSection";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ProductsAndCarts></ProductsAndCarts>
    </>
  );
}

export default App;
