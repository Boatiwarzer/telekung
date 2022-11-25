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
                    ชื่อเมนู
                </th>
                <th scope="col" class="py-3 px-6">
                    เพิ่มลดจำนวนถาด
                </th>
                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    จำนวนถาด
                </th>
                <th scope="col" class="py-3 px-6">
                    ยกเลิก
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ตับหมู
                </th>
                <td class="py-4 px-6">
                    ปุ่มเพิ่มลด
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    ลิ้งเลข
                </td>
                <td class="py-4 px-6">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    หมูสามชั้น
                </th>
                <td class="py-4 px-6">
                    ปุ่มเพิ่มลด
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    ลิ้งเลข
                </td>
                <td class="py-4 px-6">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    สาหร่ายวากาเมะ
                </th>
                <td class="py-4 px-6">
                    ปุ่มเพิ่มลด
                </td>
                <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    ลิ้งเลข
                </td>
                <td class="py-4 px-6">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
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