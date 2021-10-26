import React, { useState, useEffect } from "react";

export default function ChatroomList() {
  const [room, setRoom] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      firebase
        .database()
        .ref("rooms/")
        .on("value", (resp) => {
          setRoom([]);
          setRoom(snapshotToArray(resp));
          setShowLoading(false);
        });
    };
    const snapshotToArray = (snapshot) => {
      const returnArr = [];

      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });

      return returnArr;
    };
    fetchData();
  }, []);

  return <>

  </>
  ;
}
