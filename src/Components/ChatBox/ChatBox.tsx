import { collection, limit, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'utils/db';
import { GenericObject, MessageProps } from 'utils/type';
import styles from './ChatBox.module.scss';

const ChatBox = () => {
   const [messages, setMessages] = useState<MessageProps[] | []>([]);
   useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('createdAt'), limit(50));

      const update = onSnapshot(q, (QuerySnapshot) => {
         let newMessages: GenericObject[] = [];
         QuerySnapshot.forEach((doc) => {
            newMessages.push({ ...doc.data() });
         });
         setMessages(newMessages as MessageProps[]);
      });
      return update;
   }, []);
   console.log({ messages });
   return <div>ChatBox</div>;
};

export default ChatBox;
