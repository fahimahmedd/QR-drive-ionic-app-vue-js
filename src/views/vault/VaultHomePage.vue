<template>
  <ion-page>
    <ion-Content>
        <div class="vault_home">
                <div class="back_btn" @click="back()">
                   <ion-icon :icon="chevronBackOutline"></ion-icon>
                   <span> Back to Home</span>
                </div>
            <div class="Container">
                <h2>Welcome to iVault</h2>
                <div class="vault_searchbar">
                    <ion-searchbar value=""></ion-searchbar>
                </div>
                <div class="vault_content_card">
                    <div class="vault_content_item">
                        <div>
                            <img src="../../assets/images/image.png" alt="">
                             <div class="item_name">
                              Photos
                             </div>
                        </div>
                    </div>
                    <div class="vault_content_item">
                        <div>
                            <img src="../../assets/images/file.png" alt="">
                             <div class="item_name">
                              Doc
                             </div>
                        </div>
                    </div>
                    <div class="vault_content_item">
                        <div>
                            <img src="../../assets/images/video.png" alt="">
                             <div class="item_name">
                              Video
                             </div>
                        </div>
                    </div>
                    <div class="vault_content_item">
                        <div>
                            <img src="../../assets/images/volume.png" alt="">
                             <div class="item_name">
                                Audio
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vault_home_wrapper">
                  <ion-grid>
                     <ion-row> 
                       <ion-col size-xs="4" class="ion-p-g">
                           <FolderCreate/>
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
                <div class="file_wrapper">
                 <ion-grid>
                     <ion-row>
                       <ion-col size="6" class="ion-p-g">
                          <VaultFileModal/>
                       </ion-col>
                     </ion-row>
                 </ion-grid>
                </div>
            </div>
    </ion-Content>
    <ion-footer>
           <div class="Tab_container Vault_tab">
              <RouterLink to="/vault">
                <div class="Tab_contant_item">
                  <ion-icon :icon="folderOpenOutline"></ion-icon>
                  <div class="tabName">
                      Vault
                  </div>
                </div>
              </RouterLink>
              <RouterLink to="/journal">
                <div class="Tab_contant_item">
                 <ion-icon :icon="albumsOutline"></ion-icon>
                 <div class="tabName">
                     Journal
                 </div>
               </div>
              </RouterLink> 
             </div>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import FolderCreate from '@/components/filesComponent/FolderCreate.vue';
import FolderItem from '@/components/filesComponent/FolderItem.vue';
import VaultFileModal from '@/components/vaultFileComponent/VaultFileModal.vue';
import { IonPage , IonFooter  , IonRow , IonGrid, IonCol, IonIcon , IonContent , IonSearchbar} from '@ionic/vue';
import { albumsOutline , chevronBackOutline ,folderOpenOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

  const {back} = useRouter();
</script>

<style scoped> 

.back_btn{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--primaryColor);
    padding-top: 12px;
}

.back_btn ion-icon{
        font-size: 24px;
        color: var(--primaryColor);
    }
</style>