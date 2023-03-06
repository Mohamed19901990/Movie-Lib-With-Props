/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, createContext } from 'react';
import Copyright from './Components/Copyright';
import MovieFilter from './Components/MovieFilter';
import MovieInput from './Components/MovieInput';
import MovieShow from './Components/MovieShow';
import useMovies from './Components/useMovies';

export const moviesContext = createContext([]);

function App() {
  console.log('hello from APP');
  const {
    movies,
    submitHandler,
    toggleMovie,
    remove,
    moviesFiltred,
    filterHandler,
    buttonDisabled,
    clearHandler,
  } = useMovies();

  useEffect(() => {
    console.log(movies, 'from app');
  }, [movies]);

  return (
    <Container sx={{ height: '100%', backgroundColor: '#d6f3f6aa' }}>
      <Box
        sx={{
          display: 'flex',
          height: '100px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>MOFLIX : Welcome To Your Movie Library</Box>
      </Box>

      <Box sx={{ display: 'flex', height: '1000px' }} mt={1}>
        <Box sx={{ mt: 8 }}>
          <MovieInput onSubmit={submitHandler} />
          <MovieFilter
            onSubmit={filterHandler}
            buttonDisabled={buttonDisabled}
            onClick={clearHandler}
          />
        </Box>
        <moviesContext.Provider value={movies}>
          <MovieShow
            toggleMovie={toggleMovie}
            onRemove={remove}
            moviesFiltred={moviesFiltred}
          />
        </moviesContext.Provider>
      </Box>
      <Copyright />
    </Container>
  );
}

export default App;
