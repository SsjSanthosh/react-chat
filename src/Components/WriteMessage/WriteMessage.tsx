import { AuthContext } from 'context/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { db } from 'utils/db';
import styles from './WriteMessage.module.scss';

const WriteMessage = () => {
   const [message, setMessage] = useState('');
   const { user } = useContext(AuthContext);

   const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      if (message.trim().length && user) {
         const { uid, displayName, displayPicture } = user;
         console.log({ uid, displayName, displayPicture });
         await addDoc(collection(db, 'messages'), {
            text: message,
            name: displayName,
            avatar: displayPicture,
            createdAt: serverTimestamp(),
            uid,
         });
         setMessage('');
      }
   };

   return (
      <>
         <h1>Write your message</h1>
         <form onSubmit={handleSubmit}>
            <input
               id='message'
               type='text'
               name='message'
               placeholder='Start typing...'
               onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit'>Send</button>
         </form>
      </>
   );
};

export default WriteMessage;
