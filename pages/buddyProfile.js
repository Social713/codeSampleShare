import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import ProfileCard from "../components/profile/ProfileCard";
import firebase from "firebase/app";
import "firebase/firestore";

export default function buddyProfile() {
  let otherUserID = Cookies.get("otherUserID");

  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("test")
      .doc(otherUserID)
      .onSnapshot((doc) => {
        setData(doc.data());
      });
  }, []);

  const { fname, lname, id, photoURL, title, description, createdAt } = data;

  return (
    <>
      <Layout>
        <ProfileCard fname={fname} lname={lname} photoURL={photoURL} description={description} title={title} createdAt={createdAt} />
      </Layout>
    </>
  );
}
