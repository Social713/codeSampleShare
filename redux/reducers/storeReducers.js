import {HYDRATE} from 'next-redux-wrapper';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
  }
  return state;
};

export default reducer;




// user: [
//   {
//     fname: "",
//     lname: "",
//     title: "Buddy",
//     languages: [],
//     description: "",
//     hourlyRate: "",
//     trialRate: "",
//   },
// ],
