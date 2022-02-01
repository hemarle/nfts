import "./App.css";

import Footer from './Footer'
import Landing from "./Landing";
function App() {
    return (
        <div className="app">

            <Landing/>
            <Footer title='AcenDAO' about='Transaction has never been this easy. Be in charge of all your transactions today'/>
        </div>
    );
}

export default App;
