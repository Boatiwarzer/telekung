
<template>
    <link rel="stylesheet" href="../assets/main.css">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        
    </div>
    <div class="box">
        <form class="entable">
        <label for="table">Select table:</label>
        
        <!-- <div v-for="profile in profiles" :key="profile.id" class="profilecolor2">  -->

        <select name="table" id="table" form="table" required>
            <option v-for="tables in table" :key="tables.id" value="tables">{{tables.tableno}}</option>
            
        </select><br>
        <label for="name">First name: </label>
        <input type="text" class="name" name="name" placeholder="Plese enter your name"><br>
        <label for="course">Select course : </label>
        <select name="course" class="course" form="corse">
            <option value="normal" class="Normal">  Normal</option>
            <option value="regular" class="Regular">Regular</option>
            <option value="premiur" class="Premium">Premium</option>
        </select><br>
        <label for="person">Number of people : </label>
        <input class="box1" type="text" id="person" name="person" placeholder="Plese enter the number of people"><br>
        <label for="Select-day">Select day : </label>
        <input type="date" class="date"><br>
        <label for="Telephone">Telephone: </label>
        <input type="text" id="telephone" name="telephone" placeholder="Plese enter the number of people"><br>
        <button class="btn" type="submit">Make to plan</button>
        <!-- <input type="submit" value="Submit" > -->

        </form>

    </div>
    
</template>

<script>

import { useTableStore } from '../stores/sendForm';
export default {
    data() {
      return {
        table: [],
      };
    },
  async mounted(){
    await useTableStore().fetchData();
    this.table = useTableStore().getTable;
    console.log(this.table);
  },
}
</script>

<style>

</style>