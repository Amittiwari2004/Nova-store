import React from 'react';

const SignUpForm = ({ toggleForm }) => {
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Create an account</h2>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="border border-gray-400 p-2 w-full rounded-md"
            placeholder="Enter your full name"
          />
        </div>
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
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full">
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            className="text-purple-600 hover:text-purple-800"
            onClick={toggleForm}
          >
            Login
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;