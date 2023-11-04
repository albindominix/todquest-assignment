import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Options from "./components/Options";
import DealDay from "./components/DealDay";
import Coupon from "./components/Coupon";
import ImageBanner from "./components/ImageBanner";
import Newsletter from "./components/NewsLetter";
import HowItWorks from "./components/HowItWorks";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import MemberShip from "./components/MemberShip";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Options />
      <DealDay />
      <Coupon />
      <ImageBanner />
      <MemberShip />
      <Newsletter />
      <HowItWorks />
      <OurTeam />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
