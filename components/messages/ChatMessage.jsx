import { useState } from "react";
import messages from "../../pages/messages";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from "../../firebase/initFirebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import useAuth from "../auth/AuthHook";

export default function ChatMessage() {
 
    const [formValue, setFormValue] = useState('')

    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const {user} = useAuth();
    
    const uploadMessage = async (e) => {
        
        e.preventDefault();
        
           await messagesRef.add({
                text: formValue,
                createdAt: new Date(),
                id: user?.uid,
            });
            setFormValue('');
        
    }
    
    return (
        <div>
            
            {messages?.map(msg=>
         <p className="text-white">
           { msg.text}
            </p>
            )}
        
            <form onSubmit={uploadMessage}>
                <input value={formValue} onChange={(e)=> setFormValue(e.target.value)} />
                <button className="bg-blue-300 ml-3 p-1" type='submit'>submit</button>
            </form>
        </div>
    )
}
