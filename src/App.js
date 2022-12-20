import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/home";
import Contact from './pages/home';
import Education from "./pages/education";
import Acheivements from "./pages/acheivements";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";
import Internship from "./pages/internship";
import Publishedpaper from "./pages/publishedpaper";
function App() {
  return (
    <div className="App">
      <Router>           
           <Routes>
           <Route path="/"  element={<Dashboard/>}/>
           <Route path="/home"  element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/acheivements"  element={<Acheivements/>}/>
           <Route path="/project" element={<Project/>}/>
           <Route path="/education" element={<Education/>}/>
           <Route path="/internship" element={<Internship/>}/>
           <Route path="/publishedpaper" element={<Publishedpaper/>}/>
           </Routes>
      </Router>
    </div>
  );
}

export default App;
