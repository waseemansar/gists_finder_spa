import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import GistForks from "./pages/GistForks";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forks/:id" element={<GistForks />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
