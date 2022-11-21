
<template>
    <link rel="stylesheet" href="../assets/main.css">
    <div class="">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/menu" class="button" >Menu</router-link>
        <router-link to="/select" class="button" >Table</router-link>
        
    </div>
    <div class="box">
        <form>
        <label for="table">Select table:</label>
        <select name="table" id="table" form="table">
            <option value="1" class="value">1</option>
            <option value="2" class="value">2</option>
            <option value="3" class="value">3</option>
            <option value="4" class="value">4</option>
            <option value="5" class="value">5</option>
            <option value="6" class="value">6</option>
            <option value="7" class="value">7</option>
            <option value="8" class="value">8</option>
            <option value="9" class="value">9</option>
            <option value="10" class="value">10</option>
            <option value="11" class="value">11</option>
            <option value="12" class="value">12</option>
        </select><br>
        <label for="fname">First name: </label>
        <input type="text" id="fname" name="fname" placeholder="Plese enter your name"><br>
        <label for="course">Select course : </label>
        <select name="course" id="course" form="corse">
            <option value="normal" class="Normal">  Normal</option>
            <option value="regular" class="Regular">Regular</option>
            <option value="premiur" class="Premium">Premium</option>
        </select><br>
        <label for="person">Number of people : </label>
        <input class="box1" type="text" id="person" name="person" placeholder="Plese enter the number of people"><br>
        <label for="Select-day">Select day : </label>
        <input type="date"><br>
        <label for="Telephone">Telephone: </label>
        <input type="text" id="person" name="person" placeholder="Plese enter the number of people"><br>
        <input type="submit" value="Submit">

        </form>

    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>