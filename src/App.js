import About from "./About";
import "./App.css";
import Download from "./Download";
import Hero from "./Hero";
import Navigation from './Navigation'
import phoneIcon from './images/phone2.png'
import Started from "./Started";
import Footer from './Footer'
function App() {
    return (
        <div className="app">
            <Navigation/>
            <Hero/>
            <About/>
            <Download image={phoneIcon}
                title='Defi for every device'
                about=" Track your portfolio in real time and view the entire DeFi market,
                                                                      straight from your phone. Our mobile app is globally available, with
                                                                      over 10 languages supported.
                                                                 "/>
            <Started/>
            <Footer/>
        </div>
    );
}

export default App;
