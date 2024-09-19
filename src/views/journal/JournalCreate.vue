

<template>
    <ion-page>
        <ion-content>
            <div class="journal_create">
                <div class="create_header">
                       <div class="create_header_left" @click="back">
                          <ion-icon :icon="arrowBackOutline"></ion-icon>
                       </div>
                       <div class="create_header_middle">
                           Create Journal
                       </div>
                       <div class="create_header_right">
                          <ion-icon :icon="checkmarkOutline"></ion-icon>
                       </div>
                   </div>
                <div class="Container">
                   <div class="journal_createBody">
                    <div class="journal_body_top">
                        <div class="journal_create_date">
                            12 October 2023
                        </div>
                        <div class="jornal_multimidia" id="Adding-modal" expand="block">
                            <ion-icon :icon="ellipsisVerticalCircle"></ion-icon>
                        </div>
                    </div>
                   
                    <div class="journal_title">
                        <ion-input
                          label-placement="stacked"
                          :clear-input="true"
                          placeholder="Title"
                          value=""
                        >
                        </ion-input>
                    </div>
                      <QuillEditor theme="snow" />
                      <div class="journal_witness_wrapper">
                        <h4>Witness List : </h4>
                        <div class="witness_wrap">
                            <ul>
                                <li id="witness-modal"> <ion-icon :icon="person"></ion-icon> <span> shahinmolla@gmail.com</span> </li>
                            </ul>
                        </div>
                      </div>
                      <div class="journal_evidence_wrapper">
                        <h4>Evidence List : </h4>
                        <div class="evidence_wrap">
                            <div class="evidence_item" id="evidence-modal">
                               <img src="../../assets/images/Image1.webp" alt="">
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>

           <!--  Journal Adding Modal -->
            <ion-modal trigger="Adding-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
              <div class="block">
                <ul>
                    <li> 
                        <div class="Journal_file-input">
                              <input
                                type="file" name="file-input" id="file-input" class="file-input__input"/>
                                  <label class="file-input__label" for="file-input">
                                     <img src="../../assets/images/journal1.png" alt="">  <span> Add Evidence</span>
                               </label>
                        </div>
                    </li>
                    <li @click="addWitness"> <img src="../../assets/images/journal2.png" alt=""> <span> Add Witness </span> </li>
                </ul>
              </div>
            </ion-modal>

            <!--  Journal Witness Remove modal -->
            <ion-modal trigger="witness-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
              <div class="block">
                <div class="cancel_witness">
                    <ion-icon :icon="close"></ion-icon> <span>  Remove  Witness </span>
                </div>
              </div>
            </ion-modal>

            <!-- Journal Evidence View Remove modal -->
            <ion-modal trigger="evidence-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
              <div class="block">
                <div class="evidence_modal_list" @click="DetailModalOpen(true)">
                    <ion-icon :icon="eye"></ion-icon> <span>  See  Evidence </span>
                </div>
                <div class="evidence_modal_list">
                    <ion-icon :icon="close"></ion-icon> <span>  Remove  Evidence </span>
                </div>
              </div>
            </ion-modal>

            <!-- Journal Evedience View -->
           <ion-modal class="Evidence_view_modal" :is-open="detailsOpen">
             <ion-header>
               <ion-toolbar>
                 <ion-buttons slot="end">
                   <ion-button @click=" DetailModalOpen(false)">Close</ion-button>
                 </ion-buttons>
               </ion-toolbar>
             </ion-header>
             <ion-content class="ion-padding">
                <div class="evidence_img">
                    <img src="../../assets/images/Image1.webp" alt="">
                </div>
             </ion-content>
           </ion-modal>
        </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
 import { IonPage , IonHeader , IonToolbar , IonTitle , IonButton , IonButtons , IonInput , IonContent , IonModal, IonIcon} from '@ionic/vue';
 import { arrowBackOutline, checkmarkOutline , eye , person ,  close , checkmarkCircleOutline , ellipsisVerticalCircle} from 'ionicons/icons';
 import { QuillEditor } from '@vueup/vue-quill'
 import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue';
import { Dialog } from '@capacitor/dialog';
import { useRouter } from 'vue-router';

const {back} = useRouter();
 
// console.log(QuillEditor)
const detailsOpen = ref(false)
 function DetailModalOpen(detailsClose: boolean):void {
    detailsOpen.value = detailsClose;
 }

//  Journal Witness add modal
 const addWitness = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Type witness mail account',
    message: ``,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};


 </script>

<style scoped>
  .block {
    width: 100%;
    height: 300px;
    padding: 30px 10px 10px 20px;
  }

  ion-modal {
    --height: auto;
  }
</style>

  
