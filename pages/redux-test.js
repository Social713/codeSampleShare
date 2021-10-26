import { connect } from "react-redux";
import { compose } from "redux";
import { useSelector } from 'react-redux'
import { useFirebaseConnect } from "react-redux-firebase";
import { useEffect } from "react";

function reduxTest() {

  const initialValues = {
    fname: '',
    lname: '',
    title: 'Buddy',
    languages: [],
    description: '',
    hourlyRate: '',
    trialRate: '',
  };
  const handleChange = (e) => {
    e.preventDefault();
    testAction(initialValues);
  }

  return <div>
    <h1>Testing...</h1>
    <button onSubmit={handleChange}>Submit</button>
  </div>
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (data) => dispatch(testAction(data))
  }
}

export default connect(null, mapDispatchToProps)(reduxTest)

// useEffect(()=>{
//     useFirebaseConnect('test')
// },[])
// const test = useSelector(state => state.firebase.data.test)
// console.log('This is the userData from Firebase synced with Redux:',userData);

// {JSON.stringify(test, null, 2)}
// export default compose(
  //     firestoreConnect(() => ['profile']), // sync test collection from Firestore into redux
  //     connect((state, props) => ({
    //       test: state.firestore.ordered.test
    //     }))
    //   )(reduxTest)