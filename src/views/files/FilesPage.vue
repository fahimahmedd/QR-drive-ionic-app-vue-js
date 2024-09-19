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
        <ion-content :fullscreen="true">
             <div class="files_body">
                <div class="folder_wrapper">
                        <h3>  Files & Folder </h3>
                    
                        <ion-grid>
                           <ion-row > 
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderCreate/>
                             </ion-col>
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderItem/>
                             </ion-col>
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderItem/>
                             </ion-col>
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderItem/>
                             </ion-col>
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderItem/>
                             </ion-col>
                             <ion-col size-xs="4" class="ion-p-g">
                                 <FolderItem/>
                             </ion-col>
                           </ion-row>
                       </ion-grid>
                    </div>
                    <ion-item class="ion-margin">
                      <ion-avatar>
                        <ion-skeleton-text animated></ion-skeleton-text>
                      </ion-avatar>
                        <h3 class="boxxx">
                          <ion-skeleton-text class="ion-margin" animated style="width: 50%"></ion-skeleton-text>
                        </h3>
                    </ion-item>
                    <div class="file_wrapper">
                        <ion-grid>
                           <ion-row>
                             <ion-col size="6" class="ion-p-g">
                                 <FileItem/>
                             </ion-col>
                             <ion-col size="6" class="ion-p-g">
                                 <FileLoader/>
                             </ion-col>
                           </ion-row>
                       </ion-grid>
                    </div>
                    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                        <input
                          type="file" name="file-upload" id="file-upload" class="file-upload__input"/>
                            <label class="file-upload__label" for="file-upload">
                                <ion-fab-button>
                                      <ion-icon :icon="add"></ion-icon>
                               </ion-fab-button>
                            </label>
                    </ion-fab>
             </div>
        </ion-content>
        <BottomTab/>
    </ion-page>
</template>

<script setup lang="ts">
import BottomTab from '@/components/commonComponent/BottomTab.vue';
import FileItem from '@/components/filesComponent/FileItem.vue';
import FolderCreate from '@/components/filesComponent/FolderCreate.vue';
import FolderItem from '@/components/filesComponent/FolderItem.vue';
import FileLoader from '@/components/filesComponent/FileLoader.vue';
import {IonItem, IonAvatar, IonSkeletonText, IonLabel, IonFab , IonFabButton, IonGrid , IonRow , IonCol, IonMenuToggle , IonIcon , IonContent, IonHeader, IonPage} from '@ionic/vue';
import { menu , add} from 'ionicons/icons';
import { notifications} from 'ionicons/icons';

</script>