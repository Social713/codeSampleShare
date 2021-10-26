import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from '../../firebase/useUser'

const WriteToCloudFirestore = () => {
    const { user } = useUser()
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('users')
        .doc(user.id)
        .set({
            name: `${user.id}`,
            title: ["Buddy "],
            languages: ["HTML ", "CSS ", "JavaScript ", "React ", "Next.JS "],
            description: "Looking to meet a buddy to code with.",
            hourlyRate: 0,
            trialRate: 0,
        })
        .then(alert('Data was successfully sent to cloud firestore!'))
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="container mx-auto" >
      <button className="btn rounded btn-blue bg-blue-500 py-2 px-4 text-white" onClick={sendData}>Send Data To Cloud Firestore</button>
    </div>
  );
};

export default WriteToCloudFirestore;
