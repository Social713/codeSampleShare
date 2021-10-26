import { combineReducers } from "redux";
import storeReducers from "./storeReducers";
import { firestoreReducer } from "redux-firestore";
import testReducer from './testReducer';

const rootReducer = combineReducers({
  storeItems: storeReducers,
  firestore: firestoreReducer,
  test: testReducer
});

export default rootReducer;
