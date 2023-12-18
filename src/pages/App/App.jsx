import "../../styles.css";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route } from 'react-router-dom';
import MovieList from "../MovieList/MovieList";
import MovieDetail from "../MovieDetail/MovieDetail";
import ActorList from "../ActorList/ActorList";
import { movies } from "../../data";
import NavBar from "../../components/NavBar/NavBar"
export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      {user ? (
        <>
        <NavBar />
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetail movies={movies} />} />
            <Route path="/actors" element={<ActorList movies={movies} />} />
            
          </Routes>
        </>
      ) : (
        <>
          <LoginPage setUser={setUser} />
        </>
      )}
    </>
  );
}
