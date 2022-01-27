import About from "./About";
import "./App.css";
import Download from "./Download";
import Hero from "./Hero";
import phoneIcon from './images/phone2.png'
function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Download
      image={phoneIcon}
      title='Defi for every device'
      about=" Track your portfolio in real time and view the entire DeFi market,
          straight from your phone. Our mobile app is globally available, with
          over 10 languages supported.
     "
      />
    </div>
  );
}

export default App;
