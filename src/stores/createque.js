import { defineStore } from 'pinia';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useFormStore = defineStore('form', {
    state: () => ({
        form: ({form: [] })
    }),
    getters:{
        getForm: (state) => {
            return state.form
        }
    },
    actions:{
        async fetchData() {
            const queryData = await getDocs(collection(db, 'form'));
            this.form = queryData.docs.map((doc) => doc.data());
        // },async createUser(){
        //     const queryData = await getDocs(collection(db, 'form'));
        //     this.form = queryData.docs.add((doc) => doc.data());
            
        }
    },

    
    

    

});