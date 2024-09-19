<template>
        <ion-modal
              trigger="Recent-item-info"
              :initial-breakpoint="0.50"
              :breakpoints="[0, 0.35, 0.5, 1]"
              handle-behavior="cycle" 
              >
              <ion-content class="ion-padding file_details_modal">
                <h4>File name is here</h4>
                <div class="fileDetails_action_item">
                    <div class="action_item_wrap">
                       <img src="../../assets/images/eye.png" alt="">
                       <div class="item_name">
                           View File
                        </div>
                     </div> 
                     <div class="action_item_wrap" @click="renameFIle">
                       <img src="../../assets/images/rename.png" alt="">
                       <div class="item_name">
                           Rename
                        </div>
                     </div> 

                     <div class="action_item_wrap"  @click="DetailModalOpen(true)">
                       <img src="../../assets/images/info.png" alt="">
                       <div class="item_name">
                           Detail
                        </div>
                     </div> 
                     <div class="action_item_wrap">
                       <img src="../../assets/images/mail.png" alt="">
                       <div class="item_name">
                           Sent File
                        </div>
                     </div>
                     
                  <div class="action_item_wrap border_top" @click="confirmTrash">
                     <ion-icon :icon="archiveOutline"></ion-icon>
                       <div class="item_name">
                           Trash
                        </div>
                   </div>
                   <div class="action_item_wrap" @click="confirmDelet">
                     <ion-icon :icon="trash"></ion-icon>
                       <div class="item_name">
                           Delet
                        </div>
                   </div>
                </div>

                <!-- Details Modal -->
                <ion-modal :is-open="detailsOpen">
                  <ion-header>
                    <ion-toolbar>
                      <ion-title>Item Info</ion-title>
                      <ion-buttons slot="end">
                        <ion-button @click="DetailModalOpen(false)">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                  </ion-header>
                  <ion-content class="ion-padding file_details_modal">
                     <div class="ion-margin-top">
                       <h4> File name is here </h4>
                       <div class="file_img">
                          <img src="../../assets/images/Image1.webp" alt="">
                       </div>
                       <div class="detail_info_list">File Size : <span>36.11 KB</span> </div>
                       <div class="detail_info_list">File Type : <span>image/jpeg</span> </div>
                       <div class="detail_info_list">Created Date : <span>Wensday, May 31, 2023</span> </div>
                     </div>
                  </ion-content>
                </ion-modal>
              </ion-content>
            </ion-modal>
</template>

<script setup lang="ts">
import { archiveOutline , trash} from 'ionicons/icons';
import { IonIcon, IonModal, IonContent ,IonHeader ,IonToolbar, IonTitle , IonButtons, IonButton} from '@ionic/vue';
import { Dialog } from '@capacitor/dialog';
import { ref } from 'vue';



const confirmTrash = async () => {
  const { value } = await Dialog.confirm({
    title: 'Move to Trash',
    message: `Are You sure to move it trash?`,
  });
  console.log('Confirmed:', value);
};

const confirmDelet = async () => {
  const { value } = await Dialog.confirm({
    title: 'Delet',
    message: `Are You sure to delet it?`,
   
  });
  console.log('Confirmed:', value); 
};

const renameFIle = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Rename ',
    message: `Please rename here?`,
  });
  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};

 const detailsOpen = ref(false)
 function DetailModalOpen(detailsClose: boolean):void {
    detailsOpen.value = detailsClose;
 }
    
    



</script>