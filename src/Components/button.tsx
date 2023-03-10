/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { useEffect } from 'react';

export interface GoogleLoginButtonProps {
  buttonId?: string;
}

// type Fun = <T>(props: T) => 'test';

const GoogleLoginButton = () => {
  // const authentication = useGoogleAuthentication();

  useEffect(() => {
  // window.setTimeout(() => {
  // authentication.renderLoginButton(buttonId || GOOGLE_LOGIN_BUTTON_ID, {
  //   size: 'large',
  // });
  google.accounts.id.renderButton(document.getElementById('test') as any, {
    size: 'large',
    theme: 'filled_blue',
    type: 'standard',
    shape: 'pill',
    logo_alignment: 'left',
    text: 'signup_with',
  });
  // }, 3);
  }, []);

  return <div id='test' />;
};

export { GoogleLoginButton as default };
