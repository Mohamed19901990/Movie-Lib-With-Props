/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { createContext, useEffect } from 'react';
import Copyright from './Components/Copyright';
import MovieFilter from './Components/MovieFilter';
import MovieInput from './Components/MovieInput';
import MovieShow from './Components/MovieShow';
import useMovies from './Components/useMovies';
// import GoogleLoginButton from './Components/ButtonG';
import React from 'react';
import AppAppBar from './Components/views/AppAppBar';
import { async } from '@firebase/util';

export const moviesContext = createContext([]);
export const moviesFiltredContext = createContext([]);

function App() {
  const {
    movies,
    submitHandler,
    remove,
    filterHandler,
    buttonDisabled,
    clearHandler,
    oooo,
  } = useMovies();

  window.onload = () => {
    oooo();
  };

  console.log(movies, 'from app');

  async function fetchMoviePic(MovieName: string) {
    const apiKey = 'f5adf0c1';
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${MovieName}`;

    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();
    const coverUrl = data.Poster;
    console.log('Hello from fetchMoviePic', data.Ratings[0].Value);

    return coverUrl;
  }

  const movieName = 'The Godfather';
  // useEffect(() => {
  window.setTimeout(async () => {
    const coverUrl = await fetchMoviePic(movieName);
    console.log(`The cover photo URL for ${movieName} is: ${coverUrl}`);
  }, 10);
  // }, [movieName]);

  return (
    <React.Fragment>
      <Container sx={{ height: '100%', backgroundColor: '#d6f3f6aa' }}>
        <Box
          sx={{
            display: 'flex',
            height: '100px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Box>MOFLIX : Welcome To Your Movie Library&nbsp;&nbsp;&nbsp;</Box> */}
          <AppAppBar />
          {/* 
          <Box
            sx={{
              display: 'inline-row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mt={1}
            ml={50}
          >
            <GoogleIdentityServices>
              <GoogleAuthenticationProvider clientId='544306654076-jd6f8ubn4bdau9pmujqbum23pprh9r4a.apps.googleusercontent.com'>
                <GoogleLoginButton />
              </GoogleAuthenticationProvider>
            </GoogleIdentityServices>
          </Box> */}
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
          {/* <ProductCategories /> */}
          <moviesContext.Provider value={movies}>
            <moviesFiltredContext.Provider value={movies}>
              <MovieShow onRemove={remove} />
            </moviesFiltredContext.Provider>
          </moviesContext.Provider>
        </Box>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default App;
