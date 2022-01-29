import "./App.css";
import Navigation from './Navigation'

import Footer from './Footer'
import Landing from "./Landing";
function App() {
    return (
        <div className="app">
            <Navigation/>
            <Landing/>
            <Footer title='AcenDAO' about='Transaction has never been this easy. Be in charge of all your transactions today'/>
        </div>
    );
}

export default App;
