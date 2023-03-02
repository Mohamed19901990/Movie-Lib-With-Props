/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { useState } from "react";
import MovieFilter from "./Components/MovieFilter";
import MovieInput from "./Components/MovieInput";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import MovieShow from "./Components/MovieShow";

function App() {
  const [movies, setMovies]: any = useState([]);
  const [moviesFiltred, setMoviesFiltred]: any = useState([]);
  const [toggleMovie, setToggleMovie]: any = useState(false);

  const setMovieArray = (moovies: any) => {
    setMovies([...movies, moovies]);
  };

  console.log("hello from APP");
  console.log(movies);

  return (
    // <Container maxWidth="sm">
    <div className="App" style={{ border: "1.5px solid lightgrey" }}>
      <div
        style={{
          height: "100px",
          border: "1.5px solid lightgrey",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span style={{ display: "flex", border: "1.5px solid lightgrey" }}>
          MOFLIX : Welcome To Your Movie Library
        </span>
      </div>

      <div style={{ display: "flex" }}>
        <Box
          display={"flex"}
          sx={{ width: 180, height: 280, backgroundColor: "lightblue" }}
        >
          <div style={{ display: "" }}>
            <MovieInput setMovieArray={setMovieArray} />
            <MovieFilter
              setMoviesFiltred={setMoviesFiltred}
              setToggleMovie={setToggleMovie}
              movies={movies}
            />
          </div>
        </Box>

        <div style={{ display: "flex", justifyContent: "flex-row" }}>
          <MovieShow
            setMoviesFiltred={setMoviesFiltred}
            setMovies={setMovies}
            movies={movies}
            moviesFiltred={moviesFiltred}
            toggleMovie={toggleMovie}
          />
        </div>
      </div>
    </div>
    // </Container>
  );
}

export default App;
