import { Route, Routes } from "react-router-dom";
import "./App.css";
import Candies from "./Candies.jsx";
import CandyCard from "./components/CandyCard.jsx";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import NowPlaying from "./components/NowPlaying.jsx";

function App() {
  const name = "React Web Application";

  return (
    <>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              </div>
            <div class="col-sm-8">
              <h1>Welcome to my <br></br>{name}</h1>
              <p>
                This website is created for my Programming Rich-Media
                Application course.
              </p>
            </div>
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
