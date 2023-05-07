import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../services/firebase";

import { db } from "../services/firebase";

interface ICreateUserWithEmail {
  displayName: string;
  displayEmail: string;
  displayPassword: string;
}

interface IUser {
  displayName: string;
  uuid: string;
}

const useCreateUserWithEmail = async (userData: ICreateUserWithEmail) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.displayEmail,
      userData.displayPassword,
    );

    await updateProfile(user, { displayName: userData.displayName });
  } catch (error) {
    console.log(error);
  }
};

export default useCreateUserWithEmail;
