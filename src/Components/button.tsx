/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { FC, useEffect } from 'react';
import { useGoogleAuthentication } from '@cpl/google-identity';
import { GOOGLE_LOGIN_BUTTON_ID } from '@cpl/google-identity/build/@components/esm/google/authentication/login';

export interface GoogleLoginButtonProps {
  buttonId?: string;
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ buttonId }) => {
  const authentication = useGoogleAuthentication();

  useEffect(() => {
    window.setTimeout(() => {
      authentication.renderLoginButton(buttonId || GOOGLE_LOGIN_BUTTON_ID);
    }, 10);
  }, [buttonId, authentication, authentication.renderLoginButton]);

  return <div id={buttonId || GOOGLE_LOGIN_BUTTON_ID} />;
};

export { GoogleLoginButton as default };
