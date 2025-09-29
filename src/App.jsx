import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import WaifusPage from "./pages/WaifusPage";
import CatgirlPage from "./pages/CatgirlPage";

function App() {
    return (
        <div className="container">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/waifus" element={<WaifusPage />} />
                <Route path="/catgirls" element={<CatgirlPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
