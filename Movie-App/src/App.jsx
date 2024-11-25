import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=e4de40bf`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Debug API response
        setMovies(data.Search || []);
      })
      .catch((error) => console.error("Error fetching movie list:", error));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search onSearch={searchMovies} />} />
        <Route path="/results" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
