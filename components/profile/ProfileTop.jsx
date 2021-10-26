import Image from 'next/image';
import 'firebase/firestore';

export default function ProfileTop ({fname, lname, photoURL, backgroundPhotoURL }) {
  
  return (
    <div className="h-1/2 darkColor rounded-lg">
      <div className="relative flex flex-col justify-center items-center ">
        <Image
          className="rounded-br-lg rounded-bl-lg"
          src={backgroundPhotoURL || "/profile-bg-img.jpeg"}
          height="300"
          width="600"
        />
        <div className="sm:absolute sm:top-56">
          <div className="ml-14 profile-circle">
            <img
              src={photoURL || '/noProfilePic.png'}
              alt="User Profile Picture"
            />
          </div>
          <p className="text-white text-3xl py-3 text-center">
            {(fname && lname) ? `${fname} ${lname}` : 'User Name'}
          </p>
          <div className="flex flex-row justify-center pb-4">
            <a className="text-white mr-5">About</a>
            <a className="text-white mr-5">Buddies</a>
            <a className="text-white mr-5">Photos</a>
            <a className="text-white mr-5">Commits</a>
          </div>
        </div>
      </div>
    </div>
  );
};
