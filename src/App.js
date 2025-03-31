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
import ResturantsCards from './Components/ResturantsCards';
import Resturant from './Components/Resturant';
// import { Login } from './Components/Login';

function App() {
  
  return (
    <div className="App">
    <div className=''>
      <Routes>
      <Route path={"/"} element={<>
      <HeroSection/>
      <Commitments/>
      <Resturant/>
      <Appfeatures/>
      <AppPromotion/>
      <Campain/>

      <Howitworks/>
      </>}/>
        <Route path="/privacy" element={<Priviacyandcookies/>} />
        <Route path="/Faq" element={<FAQS/>} />

      </Routes>
      {/* <Login/> */}
    </div>
    <div>

    </div>
    </div>
  );
}

export default App;
