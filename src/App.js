import './App.css';
import Navbaar from './Components/Navbaar';
import HeroSection from './Components/HeroSection';
import Howitworks from './Components/Howitworks';
import Cards from './Components/Cards';
import Commitments from './Components/Commitments';
import Appfeatures from './Components/Appfeatures';
import AppPromotion from './Components/AppPromotion';
import CardSecond from './Components/CardSecond';
import Campain from './Components/Campain';
import Footer from './Components/Footer';
import FAQS from './Components/FAQS';
import Priviacyandcookies from './Components/Priviacyandcookies';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path={"/"} element={<><HeroSection/><Commitments/><Howitworks/><Cards/><Appfeatures/><AppPromotion/><CardSecond/><Campain/></>}/>
        <Route path="/privacy" element={<Priviacyandcookies/>} />
        <Route path="/Faq" element={<FAQS/>} />

      </Routes>
    </div>
  );
}

export default App;
