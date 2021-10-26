import Link from "next/link";
import { AiOutlineUser} from 'react-icons/ai';
import {RiUserSearchLine, RiTodoLine} from 'react-icons/ri';
import {TiMessages} from 'react-icons/ti';
import {MdFavoriteBorder} from 'react-icons/md';
import {GiBlackBelt} from 'react-icons/gi';

const Sidebar = ({sidebar, sidebarOpen}) => {

  if (!sidebar) return (
    <div siderbar={sidebar} onClick={sidebarOpen}>
      <div className="relative">
        <div className="hidden w-60 sm:flex flex-col sm:flex-row sm:justify-around light:bg-white darkColor z-2">
          <div className="w-60 h-screen fixed darkColor">
            <div className="flex items-center justify-start mx-4 mt-6">
              <span className="orange dark:text-gray-300 ml-4 text-2xl font-bold">
                Menu
              </span>
            </div>
            <nav className="mt-10 px-6 ">
            <Link href='/dashboard'>
              <a
                 className="hover:text-gray-800  hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600"
                href="#"
              >
              <GiBlackBelt className='text-white text-lg ' />
                <p className="mx-4 text-lg text-white font-normal">DoJo</p>
              </a>
              </Link>
              <Link href="/profile">
              <a
                className="hover:text-gray-800  hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600"
                href="#"
              >
              <AiOutlineUser className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Profile</p>

              </a>
              </Link>
              <Link href="/find-a-buddy">
                <a
                  className="hover:text-gray-800 hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  
                >
                <RiUserSearchLine className='text-white text-lg' />
                  <p className="mx-4 text-lg text-white font-normal">
                    Find a Buddy
                  </p>
                </a>
              </Link>
              <a
                className="hover:text-gray-800 hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="/messages"
              >
              <TiMessages className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Messages</p>

              </a>
              <Link href='/schedule'>
              <a
                className="hover:text-gray-800 hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
              <RiTodoLine className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Schedule</p>
             </a>
             </Link>
              <a
                className="hover:text-gray-800 hover:bg-gray-400 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
              <MdFavoriteBorder className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Favorites</p>
                 </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
  // Mobile view below
  if (sidebar) return (
    <div>
      <div className="relative">
        <div className="w-60 fixed z-30 justify-around light:bg-white darkColor z-10 ">
          <div className="w-72 h-full">
            <div className="flex items-center justify-start mx-6 mt-6">
              <span className="orange dark:text-gray-300 ml-4 text-2xl font-bold">
                Menu
              </span>
            </div>
            <nav className="mt-10 px-6 ">
              <a
                className="hover:text-gray-800  flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
              <GiBlackBelt className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">DoJo</p>
               </a>
              <Link href="/profile">
              <a
                className="hover:text-gray-800 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg  dark:bg-gray-600"
                href="#"
              >
              <AiOutlineUser className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Profile</p>
              </a>
              </Link>
              <Link href="/find-a-buddy">
                <a
                  className="hover:text-gray-800 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  
                >
                <RiUserSearchLine className='text-white text-lg' />
                  <p className="mx-4 text-lg text-white font-normal">
                    Find a Buddy
                  </p>
                </a>
              </Link>
              <a
                className="hover:text-gray-800  flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="/messages"
              >
              <TiMessages className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Messages</p>
              </a>
              <a
                className="hover:text-gray-800 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
              <RiTodoLine className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Schedule</p>
              </a>
              <a
                className="hover:text-gray-800 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
              <MdFavoriteBorder className='text-white text-lg' />
                <p className="mx-4 text-lg text-white font-normal">Favorites</p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
