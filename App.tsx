import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/App.css";

import { Route, Routes } from "react-router-dom";

// page imports
import Home from "./pages/Home";
import Films from "./pages/Films";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";

import FilmDetails from "./pages/FilmDetails";
import FriendDetails from "./pages/FriendDetails";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/:id" element={<FriendDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile" element={<Reviews />} />
          <Route path="/films/:id/review" element={<Reviews />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
