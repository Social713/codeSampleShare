import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const ReadDataFromCloudFirestore = () => {
    const { user } = useUser();
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(user.id)
                .onSnapshot(function (doc) {
                    console.log(doc.data())
                })
            alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
    <div className="container mx-auto" >
    <button className="btn rounded btn-blue bg-blue-500 py-2 px-4 text-white" onClick={readData}>Read Data From Cloud Firestore</button>
    </div>
    )
}

export default ReadDataFromCloudFirestore