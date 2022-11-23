import { defineStore } from 'pinia';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useTableStore = defineStore('tables', {
    state: () => ({
        tables: ({tables: [] })
    }),
    getters:{
        getTables: (state) => {
            return state.tables
        }
    },
    actions:{
        async fetchData() {
            const queryData = await getDocs(collection(db, 'tables'));
            this.tables = queryData.docs.map((doc) => doc.data());          // queryData.forEach(doc => {
            //     console.log(doc.data());
                
            // });

        }

    }

});