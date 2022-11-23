// Import the functions you need from the SDKs you need
// import firebase from 'firebase/index.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// import { ref, onUnmounted } from 'vue'

// import { ref, onUnmounted } from 'vue'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA537GAIRoJbIaMibJW3Eb7Oo_DFv-IfZ4",
  authDomain: "telekung-1bf83.firebaseapp.com",
  projectId: "telekung-1bf83",
  storageBucket: "telekung-1bf83.appspot.com",
  messagingSenderId: "731202700742",
  appId: "1:731202700742:web:618b2b2b35807e61e55ec7",
  measurementId: "G-01Z43Q53E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const formCollection = db.collection('form')

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }
// const usersCollection = db.collection('users')

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }
