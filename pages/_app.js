import "tailwindcss/tailwind.css";
import { AuthProvider } from "../components/auth/AuthHook";
import AuthStateChanged from "../components/layout/AuthStateChanged";
import "../styles/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { wrapper, newStore } from "../redux/index.js";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/app";
import {clientCredentials} from "../firebase/initFirebase";
import initFirebase from '../firebase/initFirebase'

initFirebase()

function MyApp({ Component, pageProps }) {
  const store = newStore();
  const rrfProps = {
    firebase,
    config: clientCredentials,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  return (
    <AuthProvider>
      <AuthStateChanged>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <ToastContainer />
            <Component {...pageProps} />
          </ReactReduxFirebaseProvider>
        </Provider>
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default MyApp;
