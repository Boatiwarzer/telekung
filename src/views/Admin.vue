
<template >
    <link rel="stylesheet" href="../assets/main.css">
    <link rel="stylesheet" href="../src/assets/style.css">
    <h1>Admin</h1>
    <div class="adminflexbox">
        <div class="adminitem" v-for="ch in form" :key="ch.id">
            <div class="admincontent">
                <div>
                    {{ch.tableselect}}
                </div>
                <div>
                    {{ch.person}}
                </div>
                <div>
                    {{ch.name}}
                </div>
                <div>
                    {{ch.course}}
                </div>
                <div>
                    {{ch.date}}
                </div>
                <div>
                    {{ch.telephone}}
                </div>
                <div>
                    {{ch.status}}
                </div>
                <div>
                    <!-- id: {{ch.id}} -->

                </div>
                <div>
                    <button @click="updateStatus">Confirm</button>
                </div>
            </div>
        </div>  
  </div>

    
            
  
</template>

<script>
import { useFormStore } from '../stores/createque';
import { doc, updateDoc } from "firebase/firestore";
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
        async updateStatus(){
            
    
            const statusRef = doc(db, "form", "qW84hovcT908faTqTxsc");
            await updateDoc(statusRef, {
                status: "confirm"

            
    });
        }
  },
}


</script>

<style>
#background {
    /* background-image: url(../assets/images/back.png);  */
    background-image: url("https://cdn.discordapp.com/attachments/1039195786585579550/1044466921854214184/bg-menu.jpg");
    }
</style>