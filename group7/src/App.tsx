import Navbar from "./components/Navbar";

import "./styles/App.css";

import { Route, Routes } from "react-router-dom";

// page imports
import Home from "./pages/Home";
import Films from "./pages/Films";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
