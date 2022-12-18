import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/home";
import Contact from './pages/home';
import Education from "./pages/education";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Router>           
           <Routes>
           <Route path="/"  element={<Dashboard/>}/>
           <Route path="/home"  element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/experience"  element={<Experience/>}/>
           <Route path="/project" element={<Project/>}/>
           <Route path="/education" element={<Education/>}/>

           </Routes>
      </Router>
    </div>
  );
}

export default App;
