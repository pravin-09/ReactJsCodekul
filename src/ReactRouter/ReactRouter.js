import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Login from "./Login";
import Loginpage from "./Loginpage";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

function ReactRouter(){

    return(
        <div>
        <BrowserRouter>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/services'>service</Link></li>
            <li><Link to='/Loginpage'>loginpage</Link></li>
            <li><Link to='/Login'>UserForm</Link></li>
            </ul>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about/:message" element={<About/>}/>
                <Route path="/services/:message" element={<Services/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Loginpage/:name" element={<Loginpage/>}/>
            </Routes>
        </BrowserRouter>
           
        </div>
    )
}

export default ReactRouter