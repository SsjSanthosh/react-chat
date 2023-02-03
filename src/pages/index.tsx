import Button from "Components/Button";
import { AuthContext } from "context/auth";
import React, { useContext } from "react";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  console.log({ user });
  return <>{user ? <h1>Logged in!</h1> : <Button />}</>;
};

export default HomePage;
