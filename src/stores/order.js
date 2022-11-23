import { defineStore } from 'pinia';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export const useSelectMenuStore = defineStore('selectmenu', {
    state: () => ({
        selectmenu: ({selectmenu: [] })
    }),
    getters:{
        getselectmenu: (state) => {
            return state.selectmenu
        }
    },
    actions:{
        async fetchData() {
            const queryData = await getDocs(collection(db, 'selectmenu'));
            this.selectmenu = queryData.docs.map((doc) => doc.data()); 
            
                // queryData.forEach(doc => {
            //     console.log(doc.data());
                
            // });

        }

    }

});