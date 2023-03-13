/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import {
  GoogleAuthenticationProvider,
  GoogleIdentityServices,
} from '@cpl/google-identity';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { positions } from '@mui/system';
import AppBar from '../AppBar';
import GoogleLoginButton from '../button';
import Toolbar from '../Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position='fixed' color='transparent'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='/premium-themes/onepirate/'
            sx={{ fontSize: 24 }}
          >
            {'MOFLIX : Welcome To Your Movie Library'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='/premium-themes/onepirate/sign-in/'
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Box color='inherit'> */}
            <GoogleIdentityServices>
              <GoogleAuthenticationProvider clientId='544306654076-jd6f8ubn4bdau9pmujqbum23pprh9r4a.apps.googleusercontent.com'>
                <GoogleLoginButton />
              </GoogleAuthenticationProvider>
            </GoogleIdentityServices>
            {/* </Box>
            <Link
              variant='h6'
              underline='none'
              href='/premium-themes/onepirate/sign-up/'
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
