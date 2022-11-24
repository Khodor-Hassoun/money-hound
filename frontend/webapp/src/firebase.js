// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ2z-cpVTKxDER2XQ_34grjK-1NSklmyA",
  authDomain: "money-hound-aa532.firebaseapp.com",
  projectId: "money-hound-aa532",
  storageBucket: "money-hound-aa532.appspot.com",
  messagingSenderId: "954399280110",
  appId: "1:954399280110:web:fc1960da5ccb214a369cff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();
// export const db = getFirestore(app);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BLfGFRMK0-IKZxjIFiFBCkfI-tO7y-2RQqvmq3Oess_ySrxjqvIQiy5-PLYMrtI68E0gzwPz-Ud_sSHMAfVa14w",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
}
requestPermission();
