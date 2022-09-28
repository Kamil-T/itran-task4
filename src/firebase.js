import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

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

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)

const emailPasswordLogIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const emailPasswordRegistration = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await set(ref(db, 'users/' + user.uid), {
      uid: user.uid,
      name,
      email,
      createdAt: user.metadata.creationTime,
      lastLoginAt: user.metadata.lastSignInTime,
      status: 'active',
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export { auth, db, emailPasswordLogIn, emailPasswordRegistration, logout }
