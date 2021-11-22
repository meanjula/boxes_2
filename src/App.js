
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
//import Main from "./components/MainClas"
import Main from "./components/Main"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
    );
}
export default App;
