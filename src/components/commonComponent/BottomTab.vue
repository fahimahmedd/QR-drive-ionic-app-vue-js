<template>
        <ion-footer>
           <div class="Tab_container">
               <RouterLink to="/home">
                 <div class="Tab_contant_item active">
                   <ion-icon :icon="homeOutline"></ion-icon>
                   <div class="tabName">
                       Home
                   </div>
                 </div>
               </RouterLink>
              <RouterLink to="/files">
                <div class="Tab_contant_item">
                  <ion-icon :icon="folderOpenOutline"></ion-icon>
                  <div class="tabName">
                      Files
                  </div>
                </div>
              </RouterLink>
              <RouterLink to="/passcode">
                <div class="Tab_contant_item">
                  <ion-icon :icon="shieldHalf"></ion-icon>
                  <div class="tabName">
                      Vault
                  </div>
                </div>
              </RouterLink>
              <RouterLink to="/note">
                <div class="Tab_contant_item">
                 <ion-icon :icon="clipboardOutline"></ion-icon>
                 <div class="tabName">
                     Note
                 </div>
               </div>
              </RouterLink>
             </div>
         </ion-footer>
</template>

<script setup lang="ts">
import { IonIcon , IonFooter } from '@ionic/vue';
import { homeOutline, folderOpenOutline,clipboardOutline ,albumsOutline , shieldHalf} from 'ionicons/icons';

</script>