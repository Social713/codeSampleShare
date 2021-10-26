import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { clientCredentials } from "../firebase/initFirebase";

const initialState = {};

export const newStore = () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk.withExtraArgument({
          getFirebase,
          getFirestore,
        })
      ),
      reduxFirestore(clientCredentials)
    )
  );
};

export const wrapper = createWrapper(newStore, { debug: true });
