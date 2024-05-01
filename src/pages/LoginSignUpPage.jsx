import React, { useState } from 'react';
import Login from '../components/Login/LoginForm';
import SignUp from '../components/SignUp/SignupForm';

const LoginSignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-md w-full"> {/* Added padding */}
        {isSignUp ? (
          <SignUp toggleForm={toggleForm} />
        ) : (
          <Login toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default LoginSignUpPage;
