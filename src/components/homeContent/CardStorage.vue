<template>
    <div class="storage_card_wrapper">
       <swiper
         :navigation="true"
         :slidesPerView="2"
         :spaceBetween="10"
         :modules="modules"
         class="mySwiper">
         <swiper-slide>
             <div class="storage_card">
               <div class="icon_div">
                  <img src="../../assets/images/video.png" alt="">
               </div>
               <div class="storage_card_title">
                  Video
               </div>
               <ion-progress-bar  :value="progress"></ion-progress-bar>
               <div class="storage_quantity">
                  <div class="quantity_left">
                      299 Items
                  </div>
                  <div class="quantity_right">
                     9.90 GB
                  </div>
               </div>
            </div>
         </swiper-slide>
         <swiper-slide>
             <div class="storage_card">
               <div class="icon_div">
                  <img src="../../assets/images/image.png" alt="">
               </div>
               <div class="storage_card_title">
                 Picture
               </div>
               <ion-progress-bar  :value="progress"></ion-progress-bar>
               <div class="storage_quantity">
                  <div class="quantity_left">
                      8809 Items
                  </div>
                  <div class="quantity_right">
                     3.09 GB
                  </div>
               </div>
            </div>
         </swiper-slide>
         <swiper-slide>
             <div class="storage_card">
               <div class="icon_div">
                   <img src="../../assets/images/file.png" alt="">
               </div>
               <div class="storage_card_title">
                  Document
               </div>
               <ion-progress-bar  :value="progress"></ion-progress-bar>
               <div class="storage_quantity">
                  <div class="quantity_left">
                      249 Items
                  </div>
                  <div class="quantity_right">
                     1.9 GB
                  </div>
               </div>
            </div>
         </swiper-slide>
         <swiper-slide>
             <div class="storage_card">
               <div class="icon_div">
                  <img src="../../assets/images/video.png" alt=""> 
               </div>
               <div class="storage_card_title">
                  Audio
               </div>
               <ion-progress-bar  :value="progress"></ion-progress-bar>
               <div class="storage_quantity">
                  <div class="quantity_left">
                      249 Items
                  </div>
                  <div class="quantity_right">
                     1.9 GB
                  </div>
               </div>
            </div>
         </swiper-slide>
     </swiper>
    </div>
</template>

<script setup lang="ts">
     import { IonProgressBar  } from '@ionic/vue';
     import { ref } from 'vue';
     import { Swiper, SwiperSlide } from 'swiper/vue';
     import 'swiper/css';
     import 'swiper/css/navigation';
     import { Navigation } from 'swiper';  
     const modules = [Navigation]
     const progress = ref(0.7);     
     
</script>

<style scoped lang="scss">

</style>