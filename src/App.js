import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="heading"> Movies</h1>
      <div className="main-div">
        {movies.map((movie) => {
          return (
            <div className="movies_con">
              <p className="title">{movie.title}</p>
              <p>{movie.tagline}</p>
              <p className="vote">{movie.vote_average}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
