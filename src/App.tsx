/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Copyright from "./Components/Copyright";
import MovieFilter from "./Components/MovieFilter";
import MovieInput from "./Components/MovieInput";
import MovieShow from "./Components/MovieShow";

function App() {
  console.log("hello from APP");
  // const { movies, moviesFiltred, setMoviesFiltred, setMovies } = useMovies();

  // const {test} = useMovies();
  // console.log(movies);

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
          <MovieInput />
          <MovieFilter />
        </Box>
        <MovieShow />
      </Box>
      <Copyright />
    </Container>
  );
}

export default App;
