import { Suspense, useRef, useState } from "react";
import "./App.css";
import Banner from "./components/Homepage/banner/Banner";
import ProductsAndCarts from "./components/Homepage/productsAndCart/ProductsAndCarts";
import StatsSection from "./components/Homepage/statsSection/StatsSection";
import Steps from "./components/Homepage/steps/Steps";
import Navbar from "./components/navbar/Navbar";
import Trial from "./components/Homepage/trial/Trial";
import Footer from "./components/Homepage/footer/footer";
import Plans from "./components/Homepage/plans/Plans";
import { ToastContainer } from "react-toastify";

const handleScroll = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

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

const productsPromise = fetchProducts();
const stepsPromise = fetchSteps();
const plansPromise = fetchPlans();

function App() {
  const handleScrollCart = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveTab("cart");
  };

  const [activeTab, setActiveTab] = useState("products");

  const productsRef = useRef(null);
  const plansRef = useRef(null);
  const [boughtProducts, setBoughtProducts] = useState([]);
  return (
    <>
      <Navbar
        boughtProducts={boughtProducts}
        plansRef={plansRef}
        productsRef={productsRef}
        handleScrollCart={handleScrollCart}
        handleScroll={handleScroll}
      ></Navbar>
      <Banner
        handleScroll={handleScroll}
        productsRef={productsRef}
        setActiveTab={setActiveTab}
      ></Banner>
      <StatsSection></StatsSection>
      <section ref={productsRef}>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <ProductsAndCarts
            productsPromise={productsPromise}
            boughtProducts={boughtProducts}
            setBoughtProducts={setBoughtProducts}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></ProductsAndCarts>
        </Suspense>
      </section>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
      <section ref={plansRef}>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <Plans plansPromise={plansPromise}></Plans>
        </Suspense>
      </section>
      <Trial
        handleScroll={handleScroll}
        plansRef={plansRef}
        productsRef={productsRef}
        setActiveTab={setActiveTab}
      ></Trial>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
