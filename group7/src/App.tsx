import Navbar from "./components/Navbar";

import "./styles/App.css";

import { Route, Routes } from "react-router-dom";

// page imports
import Home from "./pages/Home";
import Films from "./pages/Films";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Testing from "./pages/Testing";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto p-4 md:w-[1000px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
