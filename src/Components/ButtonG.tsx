/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */
import { useEffect } from 'react';

const GoogleLoginButton = () => {
  // const authentication = useGoogleAuthentication();

  // useEffect(() => {
  // authentication.renderLoginButton(buttonId || GOOGLE_LOGIN_BUTTON_ID, {
  //   size: 'large',
  // });
  useEffect(() => {
    // Load the Google Sign-In API library
    // const script = document.createElement('script');
    // script.src = 'https://accounts.google.com/gsi/client';
    // script.async = true;
    // script.defer = true;
    // document.body.appendChild(script);

    // window.onload = () => {
    google.accounts.id.initialize({
      client_id:
        '544306654076-jd6f8ubn4bdau9pmujqbum23pprh9r4a.apps.googleusercontent.com',
    });
    google.accounts.id.renderButton(document.getElementById('teste') as any, {
      size: 'large',
      theme: 'filled_blue',
      type: 'standard',
      shape: 'pill',
      logo_alignment: 'left',
      text: 'signup_with',
    });
    // };
  }, []);

  // const onSignIn = (credential: any) => {
  //   console.log('Signed in successfully:', credential);
  // };

  return <div id='teste' />;
};

export { GoogleLoginButton as default };
