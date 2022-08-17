import { getFirestore } from "firebase/firestore";

import { getApp, initializeApp } from "firebase/app";
// const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyBAXW3wjyfRNZ6vIszZ-xbZP2pPG_IvVoM",
  authDomain: "turismo-serrano-web-api.firebaseapp.com",
  databaseURL: "https://turismo-serrano-web-api-default-rtdb.firebaseio.com",
  projectId: "turismo-serrano-web-api",
  storageBucket: "turismo-serrano-web-api.appspot.com",
  messagingSenderId: "140584913747",
  appId: "1:140584913747:web:3727bc3ef9e94f48ba2fa6",
  measurementId: "G-HLRTEXXP7B",
};

const firebaseConfigDev = {
  apiKey: "AIzaSyDLFbxAIRGJ0HXWLbuhtYvgzPmQq0fValk",
  authDomain: "turismo-serrano-web-dev.firebaseapp.com",
  projectId: "turismo-serrano-web-dev",
  storageBucket: "turismo-serrano-web-dev.appspot.com",
  messagingSenderId: "181781228705",
  appId: "1:181781228705:web:c330521bc02f3f6382d4e0",
  measurementId: "G-KV2SCVKK67",
};

function createFirebaseApp(config) {
  try {
    return getApp("[DEFAULT]");
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfigDev);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider("6LdVc70gAAAAALj5yYi3zKFDk7y8QSENDpsrtTrn"),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true,
// });

export const database = getFirestore(firebaseApp);
