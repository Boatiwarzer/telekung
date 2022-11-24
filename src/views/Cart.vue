<template>
    <link rel="stylesheet" href="../src/assets/style.css">
  <link rel="stylesheet" href="../src/assets/main.css">
  

  <div id="background" >
  <div>
    
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/menu" class="button" >Menu</router-link>
      <router-link to="/select" class="button" >Table</router-link>
    <div class="dropdown">
        <router-link to="/order" class="dropbtn" >Order</router-link>
        <div class="dropdown-content">
          <a href="Order">Normal</a>
          <a href="regular">Regular</a>
          <a href="premium">Premium</a>
        </div>
    
  
    </div>
  </div>
  </div>


  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    Product name
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td class="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td class="py-4 px-6">
                    $99
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td class="py-4 px-6">
                    Gray
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td class="py-4 px-6">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td class="py-4 px-6">
                    Red
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td class="py-4 px-6">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
export default {

}
</script>

<style>
.card10{
     width: 20%;
     display: inline-block;
     box-shadow: 2px 2px 20px black;
     border-radius: 5px; 
     margin: 2%;
    }
</style>