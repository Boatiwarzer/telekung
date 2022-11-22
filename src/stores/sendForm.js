import { defineStore } from 'pinia';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useTableStore = defineStore('table', {
    state: () => ({
        table: ({table: [] })
    }),
    getters:{
        getTable: (state) => {
            return state.table
        }
    },
    actions:{
        async fetchData() {
            const queryData = await getDocs(collection(db, 'table'));
            this.table = queryData.docs.map((doc) => doc.data());          // queryData.forEach(doc => {
            //     console.log(doc.data());
                
            // });

        }

    }

});