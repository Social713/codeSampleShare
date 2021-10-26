import Link from 'next/link';
import {
  IoIosNotificationsOutline
} from 'react-icons/io';
import {AiOutlineUser, AiOutlineLogout} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {TiMessages} from 'react-icons/ti';
import useAuth from './auth/AuthHook';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';

const Navbar = ({ sidebarOpen, photoURL }) => {
  const { logout, user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('test')
      .doc(user?.uid)
      .onSnapshot((doc) => {
        setData(doc.data());
      })
    }, []);


  return (
    <nav className="sticky top-0 h-20 flex items-center flex-wrap p-2 w-full z-10 darkColor right-0">
      <button
        className=" inline-flex p-3 hamburger z-10 rounded sm:hidden text-white mr-auto hover:text-white outline-none"
        onClick={sidebarOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="w-full inline-flex flex-grow w-auto">
        <div className="w-full">
          <p className="text-center sm:text-left sm:ml-3 text-white text-2xl mt-2">CodeBuds</p>
        </div>
        <div className="inline-flex flex-row ml-auto w-auto w-full items-center items-start flex h-auto mr-5">
          <ul className="flex">
            <li>
              <IoIosNotificationsOutline className='text-white text-2xl mt-3' />
            </li>
            <li>
            <TiMessages className='text-white text-2xl mt-3 mx-3' />
            </li>
            <li className="relative group text-white relative dropdown cursor-pointer mt-2 sm:mt-0">
              <img
                className="rounded-full w-16 h-11"
                src={data.photoURL || '/noProfilePic.png'}
              />
              <div className="relative group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="absolute right-0 w-auto shadow rounded darkColor px-1 py-1 z-10">
                  <li className="py-1 px-3">
                    <Link href="/profile" className="">
                    <div className="relative flex space-x-1 w-full px-2 profile-links">
                    <AiOutlineUser className='absolute flex-1 left-0 top-1' />
                      <p className='flex-1 pl-3'>Profile</p>
                      </div>
                    </Link>
                  </li>
                  <li className="py-1 px-3">
                    <Link href="/settings">
                      <div className="relative flex space-x-1 w-full px-2 profile-links" >
                        <FiSettings className='absolute flex-1 left-0 top-1' /> 
                        <p className='flex-1 pl-3'>Settings</p>
                      </div>
                    </Link>
                  </li>
                  <li className="py-1 px-3">
                    <a href="/" onClick={logout}>
                    <div className="relative flex space-x-1 w-full px-2 profile-links">
                    <AiOutlineLogout className='absolute flex-1 left-0 top-1' />
                      <p className='flex-1 pl-3'>Logout</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="inline-flex flex-row ml-auto w-auto w-full items-center items-start flex h-auto"></div>
      </div>
    </nav>
  );
};

export default Navbar;
