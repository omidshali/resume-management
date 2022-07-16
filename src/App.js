import Home from "./components/home";
import Resumes from "./components/resumes";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resumes" element={<Resumes />} />
      </Routes>
    </div>
  );
}

export default App;
