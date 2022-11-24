import { initializeApp } from "firebase/app";
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDJ2z-cpVTKxDER2XQ_34grjK-1NSklmyA",
  authDomain: "money-hound-aa532.firebaseapp.com",
  projectId: "money-hound-aa532",
  storageBucket: "money-hound-aa532.appspot.com",
  messagingSenderId: "954399280110",
  appId: "1:954399280110:web:fc1960da5ccb214a369cff",
};

const firebase = initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  this.registration.showNotification(notificationTitle, notificationOptions);
});
