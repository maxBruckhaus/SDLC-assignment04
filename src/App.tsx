import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import External from './External';

function App() {
  return (
    <Router>
      <div>
        <div className="menu">
          <Link to="/welcome">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/external">External</Link>
        </div>
        <Routes>
          <Route path="/welcome">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/external">
            <External />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
