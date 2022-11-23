
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

        <select v-model="tableselect" name="tables" id="tables" required="required">
            <option value="">--select--</option>
            <option v-for="table in tables" :key="table.id" value="table">{{table.no}}</option>
        </select><br>
        <label for="person">Number of people : </label>
        <input v-model="person" class="box1" type="number" id="person" name="person" size="25" placeholder="Plese enter the number of people" min="1" max="8" required><br>
        <label for="name">First name: </label>
        <input v-model="name" type="text" class="names" name="name" placeholder="Plese enter your name" required><br>
        <label for="course">Select course : </label>
        <select v-model="course" name="course" class="course" required="required">
            <option value="">--select--</option>
            <option value="normal" class="Normal">  Normal</option>
            <option value="regular" class="Regular">Regular</option>
            <option value="premiur" class="Premium">Premium</option>
        </select><br>
        <label for="Select-day">Select day : </label>
        <input v-model="date" type="date" class="date" name="date" required><br>
        <label for="Telephone">Telephone: </label>
        <input v-model="telephone" type="text" id="telephone" name="telephone" size="25" placeholder="Plese enter the number of people" required><br>
        <button class="btn" type="submit" value="Submit">Make to plan</button>
        <!-- <input type="submit" value="Submit" > -->

        </form>

    </div>
    
</template>

<script>

import { useTableStore } from '../stores/sendForm';
const documentPath = 'form/form2';
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from '@/firebase';
export default {
    data() {
      return {
        tables: [],
        form: [],
        name:'',
        tableselect:'',
        course:'',
        person:'',
        date:'',
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
               

        }
    }
}
</script>

<style>

</style>