<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-menu-toggle :auto-hide="false">
              <div class="ion_sidebar_wrapper">
                <router-link to="/user">
                  <div class="sidmenu_profile">
                     <div class="userProfile_img">
                        <img src="./assets/images/profile.jpg" alt="">
                     </div>
                     <div class="user_info">
                        <div class="user_name">
                            Fahim Ahmed
                        </div>
                        <div class="user_email">
                           fahimahmed01568@gmail.com
                        </div>
                     </div>
                  </div>
                </router-link>
                 <div class="sidemenu_wrapper">
                    <h5>Menu list</h5>
                    <router-link to="/history">
                      <div class="sidemenu_item">
                         <ion-icon :icon="reloadCircleOutline"></ion-icon>
                          <div class="item_name">
                             History
                          </div>
                      </div>
                    </router-link>
                     <router-link to="/trash">
                       <div class="sidemenu_item">
                          <ion-icon :icon="trashOutline"></ion-icon>
                           <div class="item_name">
                              Trash
                           </div>
                       </div>
                     </router-link>
                     <router-link to="/user">
                       <div class="sidemenu_item">
                          <ion-icon :icon="settingsOutline"></ion-icon>
                           <div class="item_name">
                              Setting
                           </div>
                       </div>
                     </router-link>

                     <div class="sidemenu_item menu_border">
                        <ion-icon :icon="shieldHalfOutline"></ion-icon>
                         <div class="item_name">
                            Privacy & Policy
                         </div>
                     </div>
                     <div class="sidemenu_item">
                        <ion-icon :icon="helpOutline"></ion-icon>
                         <div class="item_name">
                            Help
                         </div>
                     </div>
                 </div>
                 <div class="upgrade_box">
                    <h4>Upgrade  </h4>
                    <p>You can upgrade your storage as <br> much as you want</p>
                    <div class="up_icon_1">
                       <img src="./assets/images/upgrade1.png" alt="">
                    </div>
                    <div class="up_icon_2">
                       <img src="./assets/images/upgrade2.png" alt="">
                    </div>
                 </div>
                 <div class="Logout_btn">
                    <ion-button> <ion-icon :icon="logOutOutline"></ion-icon> Logout</ion-button>
                 </div>
              </div>
            </ion-menu-toggle>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">

import { IonButton , IonApp, IonContent, IonIcon, IonMenu,IonMenuToggle,IonRouterOutlet, IonSplitPane,} from '@ionic/vue';
import { settingsOutline, reloadCircleOutline ,logOutOutline , trashOutline , shieldHalfOutline , helpOutline} from 'ionicons/icons';

</script>

