<template>
    <ion-page>
        <ion-header>
             <div class="journal_header_content">
                <div class="header_left">
                    Note
                </div>
                <div class="header_right">
                    <RouterLink to="/note-create">
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
            <div class="note_body">
                <div class="Container">
                    <h4>Note List</h4>

                    <div class="note_list_wrapper">
                        <ion-grid>
                           <ion-row>
                             <ion-col size="6" class="ion-p-g">
                                <div class="note_item">
                                  <div class="note_date">
                                     12 Ocotober 2023
                                  </div>
                                  <div class="note_item_head">
                                     Lorem ipsum dolor
                                  </div>
                                  <div class="note_item_text">
                                     <p>Lorem ipsum, dolor sit dolorum voluptate esse magnam debitis culpa! Accusamus, quo.</p>
                                  </div>
                               </div>
                             </ion-col>
                             <ion-col size="6" class="ion-p-g">
                                <div class="note_item">
                                   <div class="note_date">
                                      19 Ocotober 2023
                                   </div>
                                   <div class="note_item_head">
                                      Lorem ipsum dolor
                                   </div>
                                   <div class="note_item_text">
                                      <p>Lorem ipsum, dolor sit amet  elit. Asperiores provident sit hic </p>
                                   </div>
                                </div>
                             </ion-col>
                           </ion-row>
                       </ion-grid>
                    </div>
                </div>
            </div>
        </ion-content>
        <BottomTab/>
    </ion-page>
</template>

<script setup lang="ts">

 import BottomTab from '@/components/commonComponent/BottomTab.vue';
 import { IonPage, IonHeader, IonContent , IonGrid , IonRow , IonCol , } from '@ionic/vue';
 import { add , search } from 'ionicons/icons';


</script>