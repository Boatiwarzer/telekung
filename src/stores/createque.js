// import { defineStore } from 'pinia';
// import { collection, getDoc, getDocs } from "firebase/firestore";
// import { db } from '@/firebase';
// const formCollection = db.collection('form')
// export const createQue = forms => {
//     return formCollection.add(forms)
// }
// export const getForm = async id => {
//     const forms = await formCollection.doc(id).get()
//     return forms.exists ? forms.data() : null
// }