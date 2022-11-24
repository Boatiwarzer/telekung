
<template >
    <link rel="stylesheet" href="../assets/main.css">
    <h1>Admin</h1>
    <div class="adminflexbox">
        <div class="adminitem" v-for="ch in form" :key="ch.id">
            <div class="admincontent">
                <div>
                    Table : {{ch.tableselect}}
                </div>
                <div>
                    Number of people : {{ch.persons}}
                </div>
                <div>
                    Name : {{ch.name}}
                </div>
                <div>
                    Course : {{ch.course}}
                </div>
                <div>
                    Date : {{ch.date}}
                </div>
                <div>
                    Time : {{ch.time}}
                </div>
                <div>
                    Tel : {{ch.telephone}}
                </div>
                <div>
                    Status : {{ch.status}}
                </div>
                <div>
                    <!-- id: {{ch.id}} -->

                </div>
                <div>
                    <button @click="updateq(ch.name)">Check</button>
                    <button @click="deleteq(ch.name)">Delete</button>
                </div>
            </div>
        </div>  
  </div>

    
            
  
</template>

<script>
import { useFormStore } from '../stores/createque';
import { doc, updateDoc, query, where, getDocs, collection , deleteDoc } from "firebase/firestore";
import { db } from '@/firebase';



export default {
    data() {
      return {
        form: [],
      };
    },
  async mounted(){
    await useFormStore().fetchData();
    this.form = useFormStore().getForm;
    console.log(this.form);
    
  },methods:{
        async deleteq(name){
            console.log(name);
            const q = query(collection(db, "form"), where("name", "==", name));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((docs) => {
                deleteDoc(doc(db, "form", docs.id));
                console.log(docs.id, " => ", docs.data());
            
            });
        },
        async updateq(name){
            console.log(name);
            const q = query(collection(db, "form"), where("name", "==", name));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((docs) => {
                updateDoc(doc(db, "form", docs.id), {status: "confirm" });
                console.log(docs.id, " => ", docs.data());
            
            });
        }
    }
}



</script>

<style>
#background {
    /* background-image: url(../assets/images/back.png);  */
    background-image: url("https://cdn.discordapp.com/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
    }
</style>