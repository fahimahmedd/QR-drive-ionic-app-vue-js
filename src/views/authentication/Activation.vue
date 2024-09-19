<template>
    <ion-page>
        <div class="register_header">
            <div class="back_btn">
               <ion-icon :icon="chevronBackOutline" @click="back()"></ion-icon>
               <span> Back</span>
            </div>
        </div>
        <ion-content>
           <div class="emailCheck_body">
             <div class="emailCheck_content">
                <div class="check_icon">
                    <ion-icon :icon="shieldCheckmarkOutline"></ion-icon>
                </div>
                <h4>Enter The Activation Code.</h4>
                <div class="email_filed">
                <ion-input
                  ref="input"
                  type="text"
                  error-text="Invalid email"
                  placeholder="Activation Code" >
                </ion-input>
                </div>
                <div class="email_submit">
                    <RouterLink to="/vaultRegister">
                        <ion-button expand="block">Active</ion-button>
                    </RouterLink>
                </div>
             </div>
           </div>
        </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonIcon , IonPage , IonContent , IonButton , IonCol , IonInput} from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import { shieldCheckmarkOutline ,chevronBackOutline } from 'ionicons/icons';

  const {back} = useRouter();
  


  </script>


  