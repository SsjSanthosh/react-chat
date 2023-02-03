import Button from 'Components/Button';
import ChatBox from 'Components/ChatBox';
import WriteMessage from 'Components/WriteMessage';
import { AuthContext } from 'context/auth';
import React, { useContext } from 'react';

const HomePage = () => {
   const { user } = useContext(AuthContext);
   console.log({ user });
   return (
      <>
         {user ? (
            <>
               <h1>Logged in!</h1>
               <WriteMessage />
               <ChatBox />
            </>
         ) : (
            <Button />
         )}
      </>
   );
};

export default HomePage;
