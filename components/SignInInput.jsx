import useAuth from './auth/AuthHook';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { useRef } from 'react';

export default function SignInInput() {
  const {
    user,
    loginWithGoogle,
    loginWithGitHub,
    loginWithFacebook,
    createUserWithEmailAndPassword,
    error,
  } = useAuth();

  const email = useRef();
  const password = useRef();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("clicked!")
    await createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
      );
    };
    
    return (
      <div>
      {error && <h1 className='text-red'>{error}</h1>}
    <form className="relative" onSubmit={handleSignup}>
      <div>
        <div>
          <input
            className="text-center text-white ml-5 sm:ml-0 rounded-full px-10 md:px-20 py-2 shadow-2xl bg-gray-600 sm:w-full mb-2"
            type="Email"
            placeholder="Email"
            ref={email}
          />
        </div>
        <div>
          <input
            className="text-center ml-5 sm:ml-0  text-white rounded-full md:px-20 shadow-2xl px-10 py-2 bg-gray-600 mt-2 mb-4 sm:w-full"
            type="Password"
            placeholder="Password"
            ref={password}
          />
        </div>
      </div>
      <div className=" grid-cols-2 w-4/5 ml-7 grid justify-items-center">
        <button className=" text-center w-2/3 rounded-full shadow-2xl text-white bg-blue-400 py-1">
          Sign Up
        </button>
        <button className="text-center w-2/3 rounded-full shadow-2xl text-white bg-orange">
          Login
        </button>
      </div>
      <div className="flex items-center justify-center mr-4 space-x-2 mt-5">
        <span className="h-px w-20 bg-gray-300"></span>
        <span className="text-gray-500 font-normal">OR</span>
        <span className="h-px w-20 bg-gray-300"></span>
      </div>
      <div className="absolute mt-4 sm:ml-20 justify-items-center w-1/2 text-3xl grid-cols-3 grid justify-items-center">
        <FcGoogle className="cursor-pointer ml-4" onClick={loginWithGoogle} />
        <SiFacebook
          className="rounded-full facebook ml-4 cursor-pointer"
          onClick={loginWithFacebook}
        />
        <AiOutlineGithub
          className="rounded-full text-white ml-4 bg-black cursor-pointer"
          onClick={loginWithGitHub}
        />
      </div>
    </form>
    </div>
  );
}
