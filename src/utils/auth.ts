import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./db";
import { UserWithNull } from "./type";

export const loginWithGoogle = async (): Promise<UserWithNull> => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log({ user });
    if (user) {
      return {
        uid: user.uid,
        displayName: user.displayName,
        displayPicture: user.photoURL || null,
      };
    }
    throw "error";
  } catch (error: any) {
    // user cancelled the operation
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }
    // handle error later
    return null;
  }
};
