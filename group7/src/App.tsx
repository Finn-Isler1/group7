// src/App.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/App.css";

import { Route, Routes } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import Friends from "./pages/Friends";
import FriendDetails from "./pages/FriendDetails";
import Profile from "./pages/Profile";
import Testing from "./pages/Testing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchResults from "./pages/SearchResults";
import Filters from "./pages/Filters";
import Settings from "./pages/Settings";
import Achievements from "./pages/Achievements";

// Optional standalone Following page (if you still want it)
import AllReviews from "./pages/AllReviews";
import Watchlist from "./pages/Watchlist";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

function App() {
  return (
    <>
      <Navbar />

      <div className="content-container">
        <Routes>
          {/* Core App Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/filters" element={<Filters />} />

          {/* Your Pages */}
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/:id" element={<FriendDetails />} />
          <Route path="/profile" element={<Profile />} />

          {/* Watchlist page */}
          <Route path="/watchlist" element={<Watchlist />} />

          {/* Optional individual following page */}
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />

          {/* Account Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/achievements" element={<Achievements />} />

          {/* Extra Testing Page */}
          <Route path="/testing" element={<Testing />} />

          {/* Film-specific reviews page */}
          <Route path="/films/:id/reviews" element={<AllReviews />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
