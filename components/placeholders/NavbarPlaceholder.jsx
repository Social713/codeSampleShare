import Link from 'next/link';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {AiOutlineUser, AiOutlineLogout} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {TiMessages} from 'react-icons/ti';
import { Placeholder } from 'semantic-ui-react'

export default function NavbarPlaceholder() {

  return (
      <>
    <nav className="sticky top-0 h-20 flex items-center flex-wrap p-2 w-full z-10 darkColor right-0">
      <div className="w-full inline-flex flex-grow w-auto">
        <div className="w-full">
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
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
                className="rounded-full w-17 h-11"
                src='/noProfilePic.png'
              />
              <Placeholder.Header image />
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
                
                    <div className="relative flex space-x-1 w-full px-2 profile-links">
                    <AiOutlineLogout className='absolute flex-1 left-0 top-1' />
                      <p className='flex-1 pl-3'>Logout</p>
                      </div>

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
</>
    )
  }