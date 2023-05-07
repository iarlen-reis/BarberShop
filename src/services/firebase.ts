import { initializeApp } from "firebase/app";

const ENV = import.meta.env;

const firebaseConfig = {
  apiKey: ENV.VITE_API_KEY,
  authDomain: ENV.VITE_AUTH_DOMAIN,
  projectId: ENV.VITE_PROJECT_ID,
  storageBucket: ENV.VITE_STORAGE_BUCKET,
  messagingSenderId: ENV.VITE_MESSAGING_SEND_ID,
  appId: ENV.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
