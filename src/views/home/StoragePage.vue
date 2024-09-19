<template>
 <ion-page>
     <CHeader/>
     <ion-content>
        <div class="storageBody_top">
        <div class="Container">
         <div class="storageCercle_wrapper">
            <div class="storageCercle">
               <div class="cercle">
                  <div class="used_number">
                       <div class="used_percent">
                          75% 
                       </div>
                       <div class="store_text">
                       Already used
                  </div>
                  </div>
                  
               </div>
            </div>
         </div>
         <div class="storage_upgrade">
            <div class="storage_upgrade_btn">
              Upgrade storage
            </div>
         </div>
         <div class="store_update">
                <div class="store_update_left">
                   Total Space : <span>5.00 GB</span>
                </div>
                <div class="store_update_left">
                  Used Space : <span>4.55 GB</span>
                </div>
            </div>
          </div>
      </div>
      <div class="storage_details_wrapper">
         <div class="Container">
             <h4>My Storage Category</h4>
            <div class="storage_detail_item">
                <div class="recent_item_img">
                     <img src="../../assets/images/video.png" alt="">
                  </div>
                  <div class="recent_ietm_info">
                     <div class="item_name"> Vedio <span> 32 Items</span> </div>
                     <div class="item_progress"> <ion-progress-bar   :value="progress"></ion-progress-bar>
  </div>
                </div>
            </div>
            <div class="storage_detail_item">
                <div class="recent_item_img">
                     <img src="../../assets/images/image.png" alt="">
                  </div>
                  <div class="recent_ietm_info">
                     <div class="item_name"> Photo <span> 32 Items</span> </div>
                     <div class="item_progress"> <ion-progress-bar  :value="progress"></ion-progress-bar></div>
                </div>
            </div>
            <div class="storage_detail_item">
                <div class="recent_item_img">
                     <img src="../../assets/images/file.png" alt="">
                  </div>
                  <div class="recent_ietm_info">
                     <div class="item_name"> Document <span> 32 Items</span> </div>
                     <div class="item_progress"> <ion-progress-bar  :value="progress"></ion-progress-bar> </div>
                </div>
            </div>
            <div class="storage_detail_item">
                <div class="recent_item_img">
                     <img src="../../assets/images/volume.png" alt="">
                  </div>
                  <div class="recent_ietm_info">
                     <div class="item_name"> Audio <span> 32 Items</span> </div>
                     <div class="item_progress"> <ion-progress-bar  :value="progress"></ion-progress-bar> </div>
                </div>
            </div>
         </div>
      </div>
     </ion-content>
     <BottomTab/>
   </ion-page>
</template>

<script setup lang="ts">
import { IonMenu, IonToolbar ,IonTitle, IonButton, IonPage , IonContent ,IonMenuToggle, IonIcon, IonHeader , } from '@ionic/vue';
import { menu, notifications} from 'ionicons/icons';
import { IonProgressBar } from '@ionic/vue';
import { ref } from 'vue';
import BottomTab from '@/components/commonComponent/BottomTab.vue';
import CHeader from '@/components/commonComponent/CHeader.vue';


const progress = ref(0.7); 

</script>