<template>
    <div class="Container">
     <div class="section_head">
          <div class="section_head_left">
            <ion-icon :icon="reloadCircle"></ion-icon> Recent
          </div>
        </div>
        <div class="recent_wrapper">
           <div class="recent_item" id="Recent-item-info">
              <div class="recent_item_left">
                 <div class="recent_item_img">
                    <img src="../../assets/images/Image1.webp" alt="">
                 </div>
                 <div class="recent_ietm_info">
                    <div class="item_name"> Alimdar Makmur </div>
                    <div class="item_info"> <span>12 May</span>  <span>12:00 PM</span> Size : 17 MB </div>
                 </div>
              </div>
           </div>
           <div class="recent_item" id="Recent-item-info">
              <div class="recent_item_left">
                 <div class="recent_item_img">
                    <img src="../../assets/images/Image1.webp" alt="">
                 </div>
                 <div class="recent_ietm_info">
                    <div class="item_name"> Alimdar Makmur </div>
                    <div class="item_info"> <span>12 May</span>  <span>12:00 PM</span> Size : 17 MB </div>
                 </div>
              </div>
           </div>
           <div class="recent_item" id="Recent-item-info">
              <div class="recent_item_left">
                 <div class="recent_item_img">
                    <img src="../../assets/images/Image1.webp" alt="">
                 </div>
                 <div class="recent_ietm_info">
                    <div class="item_name"> Alimdar Makmur </div>
                    <div class="item_info"> <span>12 May</span>  <span>12:00 PM</span> Size : 17 MB </div>
                 </div>
              </div>
           </div>
           <RecentFileInfoModal/>
        </div>
    </div>
 </template>

<script setup lang="ts">
import {  reloadCircle} from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import RecentFileInfoModal from '../filesComponent/RecentFileInfoModal.vue';





</script>