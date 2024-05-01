import React from 'react';

const LoginForm = ({ toggleForm }) => {
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
        <p className="text-gray-600">
          Not a member?{' '}
          <button
            className="text-purple-600 hover:text-purple-800"
            onClick={toggleForm}
          >
            Create an account
          </button>
        </p>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email address
          </label>
          <input
            type="email"
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter your password"
          />
          <a href="#" className="text-purple-600 hover:text-purple-800 mt-2 block">
            Forgot password?
          </a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;