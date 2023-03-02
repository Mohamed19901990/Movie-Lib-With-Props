/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import MovieFilter from "./Components/MovieFilter";
import MovieInput from "./Components/MovieInput";
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
    <Container sx={{ height: "100%", backgroundColor: "#d6f3f6aa" }}>
      <Box
        sx={{
          display: "flex",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>MOFLIX : Welcome To Your Movie Library</Box>
      </Box>

      <Box sx={{ display: "flex", height: "1000px" }} mt={1}>
        <Box sx={{ mt: 8 }}>
          <MovieInput setMovieArray={setMovieArray} />
          <MovieFilter
            setMoviesFiltred={setMoviesFiltred}
            setToggleMovie={setToggleMovie}
            movies={movies}
          />
        </Box>

        {/* <Box
          sx={{
            : "lightgreen",
            width: "100%",
            display: "flex",
            alignItems: "row",
            justifyContent: "space-around",
          }}
        > */}
        <MovieShow
          setMoviesFiltred={setMoviesFiltred}
          setMovies={setMovies}
          movies={movies}
          moviesFiltred={moviesFiltred}
          toggleMovie={toggleMovie}
        />
        {/* </Box> */}
      </Box>
    </Container>
  );
}

export default App;
