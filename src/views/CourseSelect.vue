<template>
    <link rel="stylesheet" href="../assets/main.css">
    <div id="background" class="min-h-screen">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="butto" >Table</router-link>
        <router-link to="/order" class="button" >Order</router-link>
    </div>

        
    </div>
    <div class="box">
        <form class="entable" @submit.prevent="signInButtonPressed">
            <label for="tables">Select table:</label>
            
            <!-- <div v-for="profile in profiles" :key="profile.id" class="profilecolor2">  -->

            <select v-model="tableselect" name="tables" id="tables" autofocus required="required">
                <option value="">--select--</option>
                <option v-for="table in tables" :key="table.id">{{table.no}}</option>
            </select><br>
            <label for="persons">Number of people : </label>
            <input v-model="persons" type="number" name="numbers" size="25" min="1" max="8"  required><br>
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
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
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
        firebaseData: null,
        state: 'loading'
      };
    },
  async mounted(){
    await useTableStore().fetchData();
    this.tables = useTableStore().getTables;
    console.log(this.tables);
  },computed: {
        sortedArray: function() {
            function compare(a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            }

            return this.tables.sort(compare);
        }
  
  },
    methods: {
        async signInButtonPressed() {
            console.log(this.name, this.tableselect,this.date,this.course,this.person,this.telephone);
            const docRef = await addDoc(collection(db, "form"), {
                tableselect: this.tableselect,
                person: this.person,
                name: this.name,
                course: this.course,
                date: this.date,
                time: this.time,
                telephone: this.telephone,
                status: "not_check"
        });
    //         let formUser = {
    //         tableselect: this.tableselect,
    //         person: this.person,
    //         }
    //     projectFirestore.collection('formUser').add(formUser)
    }
               

    }
}

</script>

<style>

</style>