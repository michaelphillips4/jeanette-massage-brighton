import { Routes, Route, Outlet } from "react-router-dom";
import Heading from "./Heading";
import Nav from "./Nav";
import Index from "./Pages/Index";
import DeepTissueAndSportsMassage from "./Pages/DeepTissueAndSportsMassage";
import ThaiYogaMassage from "./Pages/ThaiYogaMassage";
import PregnancyMassage from "./Pages/PregnancyMassage";
import ChairMassage from "./Pages/ChairMassage";
import CouplesMassage from "./Pages/CouplesMassage";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Footer from "./Footer";
import "./App.css";
import ValentinesCouples from "./Pages/ValentinesCouples";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route
          path="deep-tissue-and-sports-massage"
          element={<DeepTissueAndSportsMassage />}
        />
        <Route path="valentines" element={<ValentinesCouples />} />
        <Route path="thai-yoga-massage" element={<ThaiYogaMassage />} />
        <Route path="pregnancy-massage" element={<PregnancyMassage />} />
        <Route path="chair-massage" element={<ChairMassage />} />
        <Route path="couples-massage" element={<CouplesMassage />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Index />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <Heading />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
