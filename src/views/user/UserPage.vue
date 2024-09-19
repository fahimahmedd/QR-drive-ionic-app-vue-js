<template>

 <ion-page>
    <ion-header>
           <div class="header_wrapper">
              <div class="header_logo">
                 <img src="../../assets/images/logo.svg" alt="">
              </div>
              <div class="header_content">
                 <div class="notification_icon">
                    <ion-icon :icon="notifications"></ion-icon>
                 </div>
                 <ion-menu-toggle>
                     <ion-icon :icon="menu"></ion-icon>
                 </ion-menu-toggle> 
              </div>
           </div>
     </ion-header>
     <ion-content>
        <div class="user_body_top">
              <div class="Container user_img_area">
                 <!-- <h4> Profile </h4> -->
                  <div class="user_avatar">
                     <img src="../../assets/images/profile.jpg" alt="">
                  </div>
                  <div class="user_name">
                    Fahim Ahmed
                  </div>
                  <div class="user_email">
                    @fahimahmed
                  </div>
              </div> 
              <div class="user_setting_content">
               <div class="Container">
                   <router-link to="/userG">
                      <div class="setting_list_item">
                      <div class="setiing_list_icon">
                         <div class="u_icon">
                            <ion-icon :icon="settings"></ion-icon> 
                         </div>
                         <div class="item_title">
                          Genaral 
                         </div>
                      </div>
                      <div class="edit_btn">
                       <ion-icon :icon="createOutline"></ion-icon>
                      </div>
                   </div> 
                   </router-link>

                   <router-link to="/secuirity"> 
                      <div class="setting_list_item">
                         <div class="setiing_list_icon">
                           <div class="u_icon secuirity_icon">
                              <ion-icon :icon="lockClosed"></ion-icon>
                           </div>
                            <div class="item_title">
                             Secuirity 
                         </div>
                         </div>
                         <div class="edit_btn">
                           <ion-icon :icon="createOutline"></ion-icon>
                         </div>
                      </div> 
                   </router-link>
                   <div class="setting_list_item">
                      <div class="setiing_list_icon">
                        <div class="u_icon mode_icon">
                           <ion-icon :icon="partlySunny"></ion-icon>
                        </div>
                         <div class="item_title">
                          Dark Mode
                      </div>
                      </div>
                      <div class="edit_range">
                        <ion-toggle aria-label="Primary toggle" color="primary" :checked="true"></ion-toggle>
                      </div>
                   </div> 
                   <div class="setting_list_item">
                      <div class="setiing_list_icon">
                        <div class="u_icon ">
                           <ion-icon :icon="helpCircle"></ion-icon>
                        </div>
                         <div class="item_title">
                          Helpp Center
                      </div>
                      </div>
                   </div> 
                   <div class="setting_list_item">
                      <div class="setiing_list_icon">
                        <div class="u_icon">
                           <ion-icon :icon="shieldCheckmark"></ion-icon>
                        </div>
                         <div class="item_title">
                          Privacy & Policy
                      </div>
                      </div>
                   </div> 
               </div>
           </div>
        </div>
     </ion-content>
     <bottom-tab/>
 </ion-page>

</template>

<script setup lang="ts">
import { settings ,createOutline ,partlySunny ,lockClosed, notifications, menu, helpCircle , shieldCheckmark} from 'ionicons/icons';
import { IonPage , IonIcon ,IonContent, IonMenuToggle ,IonHeader , IonToggle} from '@ionic/vue';
import BottomTab from '@/components/commonComponent/BottomTab.vue';


</script>

<style scoped>

</style>