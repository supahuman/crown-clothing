import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  createUserDocumentFromAuth,
  signInWithGoohleRedirect,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const userDocRef = await createUserDocumentFromAuth();
    const { user } = await signInWithGooglePopup();
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoohleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
