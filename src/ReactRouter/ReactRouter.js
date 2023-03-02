import About from "./About";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function ReactRouter(){

    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
        </BrowserRouter>
           
        </div>
    )
}

export default ReactRouter