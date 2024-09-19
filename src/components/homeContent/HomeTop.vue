<template>
    <div>
       <div class="homeTop_wrapper">
         <div class="Container">
         </div>
       </div>
       <router-link to="/storage">
          <div class="storage_box_wrapper">
          <div class="storage_box_wrap">
              <div class="storage_box_wrap_left">
               <div class="img_container">
                   <img src="../../assets/images/Folder.png">
               </div>
              </div>
              <div class="storage_box_wrap_right">
                  <div class="storage_title">
                   Used space
                  </div>
                  <div class="total_space_number">
                     2.80 GB
                  </div>
                  <div class="used_space">
                     Total space 
                     <span>5.00 GB</span>
                  </div>
              </div>
            </div>
         </div>
       </router-link>
    </div>
 </template>

 <script setup lang="ts">

</script>
