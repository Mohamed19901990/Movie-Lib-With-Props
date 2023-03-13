/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { useGoogleAuthentication } from '@cpl/google-identity';
import { FC, useEffect } from 'react';

export interface GoogleLoginButtonProps {
  buttonId?: string;
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({
  buttonId = 'zomfgWtfBbqButton',
}) => {
  const authentication = useGoogleAuthentication();

  useEffect(() => {
    window.setTimeout(() => {
      authentication.renderLoginButton(buttonId, {
        size: 'large',
        theme: 'filled_blue',
        type: 'standard',
        shape: 'pill',
        logo_alignment: 'left',
        text: 'signup_with',
      });
    }, 10);
  }, [buttonId, authentication, authentication.renderLoginButton]);

  return <div id={buttonId} />;
};

export { GoogleLoginButton as default };
