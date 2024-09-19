<template>
      <div class="file_loader_item">
       <div class="file_loader_img">
         <div class="lds-roller">
             <div></div><div></div><div></div>
             <div></div><div></div><div></div>
             <div></div><div></div>
        </div>
        <ion-icon :icon="closeOutline"></ion-icon>
       </div>
        <div class="file_details">
           <div class="folder_name">
             <span>Uploading...</span> <span> 10% </span>
          </div>
          <div class="folder_inner_item">
              17 October 23 <span> 12:00 PM </span>
          </div>
       </div>
    </div>
</template>

<script setup lang="ts" >
import { IonIcon } from '@ionic/vue';
import { closeOutline } from 'ionicons/icons';
  
</script>