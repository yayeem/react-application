import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyCard from "./components/Concession.jsx";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import NowPlaying from "./components/NowPlaying.jsx";

import headerImage from "./assets/react_header.png";
function App() {
  const name = "React Web Application";

  return (
    <>
      <header>
        <div class="container-fluid">
          <div class="row">
            <img src={headerImage} alt="header" />
          </div>
        </div>
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/playing" element={<NowPlaying />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
