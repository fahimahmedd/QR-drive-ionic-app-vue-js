

<template>
    <ion-page>
        <ion-header>
             <div class="journal_header_content">
                <div class="header_left">
                    Journal
                </div>
                <div class="header_right">
                    <RouterLink to="/journal-create">
                        <div class="add_icon">
                            <ion-icon :icon="add"></ion-icon>
                        </div>
                    </RouterLink>
                    <div class="search_icon">
                        <ion-icon :icon="search"></ion-icon>
                    </div>
                </div>
            </div>
       </ion-header>
        <ion-content>
            <div class="Container">
                <div class="journal_body">
                    <h4>Journal list</h4>
                    <div class="journal_wrapper">
                         <RouterLink to="/journal-create">
                            <div class="Journal_item">
                             <div class="item_title">
                                My house's important Document
                             </div>
                             <div class="item_details">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                             </div>
                             <div class="item_create_date">
                                 18 October 2023
                             </div>
                         </div>
                         </RouterLink>
                    </div>
                </div>
            </div>
        </ion-content>
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
 import { IonPage , IonHeader , IonContent , IonFooter , IonIcon} from '@ionic/vue';
 import { add , search , folderOpenOutline , albumsOutline} from 'ionicons/icons';
  </script>


  
