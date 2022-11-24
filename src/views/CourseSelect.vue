<template>
    <link rel="stylesheet" href="../assets/main.css">
    <div id="background">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="butto" ><font-awesome-icon icon="fa-solid fa-pen" /> Table</router-link>
        <router-link to="/order" class="button" >Order</router-link>
    </div>

        
    </div>
    <div class="box">
        <form class="entable" @submit.prevent="signInButtonPressed">
            <label for="tables">Select table:</label>
            
            <!-- <div v-for="profile in profiles" :key="profile.id" class="profilecolor2">  -->

            <select v-model="tableselect" name="tables" id="tables" @change="tableNo()" autofocus required="required">
                <option value="">--select--</option>
                <option v-for="table in tables" :key="table.id" >{{table.no}}</option>
            </select><br>
            <label for="persons">Number of people : </label>
            <input v-model="persons" type="number" name="numbers" size="25" min="1" :max="maxperson"  required><br>
            <label for="name">Name : </label>
            <input v-model="name" type="text" class="names" name="name" placeholder="Plese enter your name"  required><br>
            <label for="course">Choosing a course : </label>
            <select v-model="course" name="course" class="course" required="required">
                <option value="">--select--</option>
                <option value="normal" class="Normal">  Normal</option>
                <option value="regular" class="Regular">Regular</option>
                <option value="premium" class="Premium">Premium</option>
            </select><br>
            <label for="Select-day">Choose a date : </label>
            <input v-model="date" type="date" class="date" name="date" required><br>
            <label for="time">Select a time : </label>
            <input v-model="time" type="time" id="time" name="time"><br>
            <label for="Telephone">Telephone: </label>
            <input v-model="telephone" type="text" id="telephone" name="telephone" size="30" placeholder="Plese enter the number of people" required><br>

            <button class="btn" type="submit" value="Submit">Make to plan</button>
            <!-- <input type="submit" value="Submit" > -->

        </form>

    </div>
    
</template>

<script>

import { useTableStore } from '../stores/sendForm';
// import { projectFirestore } from '../firebase/index';
import { collection, getDoc, getDocs, addDoc, query,where } from "firebase/firestore";
import { db } from '@/firebase';
export default {
    data() {
      return {
        tables: [],
        form: [],
        name:'',
        tableselect:'',
        course:'',
        persons:'',
        date:'',
        time:'',
        telephone:'',
        maxperson: 8,
        
      };
    },
    async mounted(){
    await useTableStore().fetchData();
    this.tables = useTableStore().getTables;
    console.log(this.tables);
  
  
  },
    methods: {
        async signInButtonPressed() {
            console.log(this.name, this.tableselect,this.date,this.course,this.persons,this.telephone,this.time);
            const docRef = await addDoc(collection(db, "form"), {
                tableselect: this.tableselect,
                persons: this.persons,
                name: this.name,
                course: this.course,
                date: this.date,
                time: this.time,
                telephone: this.telephone,
                status: "not_check"
        });
        
   
        },
        async tableNo(){
            console.log(this.tableselect);
            const q = query(collection(db, "table"), where("no", "==", this.tableselect));
            
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((docs) => {
                // updateDoc(doc(db, "form", docs.id), {status: "confirm" });
                console.log(docs.data());
                console.log(docs.id, " => ", docs.data());
                this.maxperson = docs.data().tableselect
            
            });
            console.log(this.maxperson);

        }
               

    }
}

</script>

