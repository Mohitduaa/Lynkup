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

function App() {
  return (
    <div className="App">
      <Navbaar/>
      {/* <HeroSection/> */}
      <Commitments/>
      <Howitworks/>
      <Cards/>
      <Appfeatures/>
      <AppPromotion/>
      <CardSecond/>
      <Campain/>
      <FAQS/>
      <Footer/>
    </div>
  );
}

export default App;
