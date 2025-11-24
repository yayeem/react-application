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

function App() {
  const name = "React Web Application";

  return (
    <>
      <header>
        <h1>My Learning About {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          cumque sit dignissimos, consectetur nemo possimus accusamus maxime
          excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/playing" element={<MovieCard />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
