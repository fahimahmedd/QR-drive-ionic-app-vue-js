<template>
    <ion-page>
        <div class="register_header">
            <div class="back_btn">
               <ion-icon :icon="chevronBackOutline" @click="back()"></ion-icon>
               <span> Back</span>
            </div>
        </div>
       <div class="register_top">
       </div>
       <div class="register_content vaultSet_wrapper">
           <h4> Create your <span>iVault</span> account. </h4>
           <h6> Fill the form carefully. The input data is a very importnat part of this iVault account. </h6>
           <div class="register_body">
             <div class="register_input_item">
                <ion-input label="iVault Name" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
                <ion-input label="iVault Passcode" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
                <ion-input label="Confirm Passcode" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
              <ion-textarea label="iVault Descrpition" 
                   label-placement="floating" 
                   fill="solid">
               </ion-textarea>
             </div>
             <div class="register_input_item">
              <ion-textarea label="iVault Nominee Descrpition" 
                   label-placement="floating" 
                   fill="solid">
               </ion-textarea>
             </div>
             <div class="register_Btn">
                <RouterLink to="/home">
                    <ion-button expand="block">Register</ion-button>
                </RouterLink>
             </div>
           </div>
       </div>
    </ion-page>
</template>

<script setup lang="ts">
  import { IonPage , IonInput , IonIcon , IonButton , IonItem , IonTextarea} from '@ionic/vue';
  import { chevronBackOutline } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const {back} = useRouter();

</script>