import ProfileTop from '../../components/profile/ProfileTop';
import Floater from '../../components/messages/Floater';
import { withProtected } from '../../components/auth/routes';
import Layout from '../../components/layout/Layout';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function buddyProfile() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('test')
      .doc(Cookies.get("otherUserID"))
      .onSnapshot((doc) => {
        setData(doc.data());
      });
  }, []);

  const {fname, lname, id, photoURL, } = data;
  return (
    <>
      <Layout photoURL={photoURL}>
        <div className="h-screen">
          <ProfileTop fname={fname} lname={lname} photoURL={photoURL} />
        </div>
        <div className="hidden sm:block">
          <Floater />
        </div>
      </Layout>
    </>
  );
}

export default withProtected((buddyProfile));
