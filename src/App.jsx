import { Routes, Route } from "react-router-dom";
//import pages
import Login from './pages/Login';
import About from "./pages/About";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}//end function