import React from 'react';
import { useClerk } from '@clerk/nextjs';


const SignInButton = ({ children }) => {
  const { openSignIn } = useClerk();


  const handleSignIn = () => {
    if (openSignIn) {
      openSignIn(); // Implementing the sign-in logic using Clerk
    } else {
      console.error("signIn function is not available.");
    }
  };

  return (
    <button onClick={handleSignIn} className="btn">
      {children}
    </button>
  );
};

export default SignInButton;
