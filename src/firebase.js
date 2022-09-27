// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkKoN0TkQKFIZu89zGeUr0whDmZbEK0Xk',
  authDomain: 'itran-task4.firebaseapp.com',
  databaseURL:
    'https://itran-task4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'itran-task4',
  storageBucket: 'itran-task4.appspot.com',
  messagingSenderId: '621236206104',
  appId: '1:621236206104:web:38d0b0d8f5b9534bdf216d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
