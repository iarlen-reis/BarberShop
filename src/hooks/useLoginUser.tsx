import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

interface IUserData {
  displayEmail: string;
  displayPassword: string;
}

export const loginUserWithEmail = async (data: IUserData) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      data.displayEmail,
      data.displayPassword,
    );
  } catch (error) {
    console.log(error);
  }
};
