import ProfileTop from '../components/profile/ProfileTop';
import Floater from '../components/messages/Floater';
import { withProtected } from '../components/auth/routes';
import Layout from '../components/layout/Layout';
import useAuth from '../components/auth/AuthHook';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

function profile() {
  const { user } = useAuth();
  const [data, setData] = useState([]);


  useEffect(() => {
    firebase
      .firestore()
      .collection('test')
      .doc(user?.uid)
      .onSnapshot((doc) => {
        setData(doc.data());
      });


  }, []);

  const {fname, lname, id, photoURL, backgroundPhotoURL } = data;
  return (
    <>
      <Layout photoURL={photoURL}>
        <div className="h-screen">
          <ProfileTop fname={fname} lname={lname} photoURL={photoURL} backgroundPhotoURL={backgroundPhotoURL} />
        </div>
        <div className="hidden sm:block">
          <Floater />
        </div>
      </Layout>
    </>
  );
}
// export default profile;
export default withProtected((profile));
