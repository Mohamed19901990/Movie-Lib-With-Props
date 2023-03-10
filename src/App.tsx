/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Firestore } from 'firebase/firestore';
import { createContext, useEffect } from 'react';
import Copyright from './Components/Copyright';
import MovieFilter from './Components/MovieFilter';
import MovieInput from './Components/MovieInput';
import MovieShow from './Components/MovieShow';
import useMovies from './Components/useMovies';
import firebase from './firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleLoginButton from './Components/button';
// import GoogleLoginButton from './Components/ButtonG';
import {
  GoogleAuthenticationProvider,
  GoogleIdentityServices,
} from '@cpl/google-identity';

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
        <Box>MOFLIX : Welcome To Your Movie Library&nbsp;&nbsp;&nbsp;</Box>

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
        </Box>
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
          <moviesFiltredContext.Provider value={movies}>
            <MovieShow onRemove={remove} />
          </moviesFiltredContext.Provider>
        </moviesContext.Provider>
      </Box>
      <Copyright />
    </Container>
  );
}

export default App;
