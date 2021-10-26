// import initFirebase from '../../firebase/initFirebase'
// import { useEffect, useState } from 'react'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import { setUserCookie } from '../../firebase/userCookies'
// import { mapUserData } from '../../firebase/mapUserData'


// initFirebase() // initialize firebase

// const firebaseAuthConfig = {
//     signInFlow: 'popup',
//     // Auth providers
//     // https://github.com/firebase/firebaseui-web#configure-oauth-providers
//     signInOptions: [
//         {
//             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             requireDisplayName: true,
//         },
//         // add additional auth flows below
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
//     signInSuccessUrl: '/profile',
//     credentialHelper: 'none',
//     callbacks: {
//         signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
//             const userData = mapUserData(user)
//             setUserCookie(userData)
//         },
//     },
// }

// const FirebaseAuth = () => {

//     const [renderAuth, setRenderAuth] = useState(false)
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             setRenderAuth(true)
//         }
//     }, [])
//     return (
//         <div>
//             {renderAuth ? (
//                 <StyledFirebaseAuth
//                     uiConfig={firebaseAuthConfig}
//                     firebaseAuth={firebase.auth()}
//                 />
//             ) : null}
//         </div>
//     )
// }

export default function SignInInputTest() {
    const {user, loginWithGoogle, loginWithGitHub, loginWithFacebook, error} = useAuth();
      return (
      <form>
        <div>
          <input
            className="text-center rounded-full px-10 md:px-20 py-0.5 shadow-2xl bg-gray-600 w-full mb-2"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="text-center text-white rounded-full md:px-20 shadow-2xl px-10 py-0.5 bg-gray-600 mt-2 mb-4"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className=' grid-cols-2 grid justify-items-center'>
        <button className=' text-center w-2/3 rounded-full shadow-2xl text-white bg-blue-400'>Sign Up</button>
        <button className='text-center w-2/3 rounded-full shadow-2xl text-white bg-orange'>Login</button>
        </div>
        <div className='mt-4 text-3xl grid-cols-4 grid justify-items-center'>
            <FcGoogle className='cursor-pointer' onClick={loginWithGoogle} />
            <SiFacebook className='rounded-full facebook cursor-pointer' onClick={loginWithFacebook} />
            <AiOutlineGithub className='rounded-full text-white bg-black cursor-pointer' onClick={loginWithGitHub} />
            <AiFillApple className='rounded-full text-white bg-black cursor-pointer' onClick={loginWithGitHub} />
          </div>
      </form>
    );
  }