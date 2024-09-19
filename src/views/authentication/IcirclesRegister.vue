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
       <div class="register_content">
           <h4> Create an <span>iCircles</span> account. </h4>
           <h6>It's required to join in our iCircles account first.</h6>
           <div class="register_body">
             <div class="register_input_item">
                <ion-input label="Your Name" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
                <ion-input label="User Name" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
                <ion-input label="Password" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_input_item">
                <ion-input label="Confirm Password" 
                label-placement="floating" 
                fill="solid">
               </ion-input>
             </div>
             <div class="register_Btn">
                <RouterLink to="/activation">
                    <ion-button expand="block">Register</ion-button>
                </RouterLink>
             </div>
           </div>
       </div>
    </ion-page>
</template>

<script setup lang="ts">
  import { IonPage , IonInput , IonIcon , IonButton } from '@ionic/vue';
  import { chevronBackOutline } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const {back} = useRouter();

</script>