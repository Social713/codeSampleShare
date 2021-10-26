
import useAuth from "../components/auth/AuthHook";
import { withProtected } from "../components/auth/routes";
import Layout from '../components/layout/Layout';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ChatMessage from "../components/messages/ChatMessage";
import {db} from "../firebase/initFirebase";


const messages = () => {

    return (
        <div className='darkestColor h-screen'>
        <Layout>
        <div className="h-screen">
        <ChatMessage />
        </div>
          </Layout>
        </div>
    )
}

export default messages
//export default withProtected(messages);