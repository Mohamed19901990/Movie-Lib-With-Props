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
import GoogleLoginButton from './Components/ButtonG';
import { GoogleAuthenticationProvider } from '@cpl/google-identity';

export const moviesContext = createContext([]);
export const moviesFiltredContext = createContext([]);

const GoogleLogin = () => {
  useEffect(() => {
    // oooo();

    google.accounts.id.initialize({
      client_id:
        '544306654076-jd6f8ubn4bdau9pmujqbum23pprh9r4a.apps.googleusercontent.com',
    });
    google.accounts.id.renderButton(document.getElementById('test') as any, {
      // size: 'large',
      // theme: 'filled_black',
      // type: 'icon',
      // shape: 'pill',
      click_listener: onClickHandler,
    });

    function onClickHandler() {
      console.log('Sign in with Google button clicked...');
    }
  }, []);

  return <div id='test' />;
};

// const GoogleLogin = () => {
//   const hallo = google.accounts.id.renderButton(
//     document.getElementById('test') as any,
//     {
//       theme: 'outline',
//       size: 'large',
//       text: 'continue_with',
//       type: 'standard',
//     },
//   );

//   return <div id='test' />;
// };

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
  // const auth = getAuth();

  // const googleLogin = () => {
  //   console.log('Hello from Button');
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user, '======= USER ======');
  //     })
  //     .catch(console.log);
  // };
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
        {/* <Box
          sx={{
            display: 'inline-row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mt={1}
          ml={50}
        >
          <GoogleLoginButton />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mt={1}
          >
            <GoogleLogin /> */}
            <GoogleAuthenticationProvider clientId='544306654076-jd6f8ubn4bdau9pmujqbum23pprh9r4a.apps.googleusercontent.com'>
              <GoogleLoginButton />
            </GoogleAuthenticationProvider>
          {/* </Box> */}
        {/* </Box> */}
        {/* <Button variant='contained'>Please LogIn</Button> */}
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
