import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Homepage/banner/Banner";
import ProductsAndCarts from "./components/Homepage/productsAndCart/ProductsAndCarts";
import StatsSection from "./components/Homepage/statsSection/StatsSection";
import Steps from "./components/Homepage/steps/Steps";
import Navbar from "./components/navbar/Navbar";
import Trial from "./components/Homepage/trial/Trial";
import Footer from "./components/Homepage/footer/footer";
import Plans from "./components/Homepage/pricings/Plans";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchSteps = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchPlans = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const stepsPromise = fetchSteps();
  const plansPromise = fetchPlans();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <ProductsAndCarts productsPromise={productsPromise}></ProductsAndCarts>
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Plans plansPromise={plansPromise}></Plans>
      </Suspense>
      <Trial></Trial>
      <Footer></Footer>
    </>
  );
}

export default App;
