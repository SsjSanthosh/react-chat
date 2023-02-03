import { AuthContext } from "context/auth";
import React, { useContext } from "react";
// import styles from "./Button.module.scss";
const Button = () => {
  const { login } = useContext(AuthContext);
  console.log({ login });
  return (
    <>
      <h1>Sign in with Google</h1>
      <button onClick={login}>Sign in now!</button>
    </>
  );
};

export default Button;
