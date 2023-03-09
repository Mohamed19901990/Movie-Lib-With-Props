/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCLEp_Y1C9tDfSPnVUlZ6E7uHI9AdhzCdA',
  authDomain: 'cpl-mo.firebaseapp.com',
  projectId: 'cpl-mo',
  storageBucket: 'cpl-mo.appspot.com',
  messagingSenderId: '544306654076',
  appId: '1:544306654076:web:adad05e3c54cfd80d892f9',
  measurementId: 'G-CPZH2E9K04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db as default };
