<template>
  <ion-page>
      <div class="authentication_header">
          <div class="back_btn">
             <ion-icon :icon="chevronBackOutline" @click="back()"></ion-icon>
             <span> Back</span>
          </div>
      </div>
      <ion-content>
         <div class="authentication_body">
             <div class="passcode_icon">
                 <img src="../../assets/images/locked.png" alt="">
             </div>
             <h4>Check  Passcode</h4>
             <h6> For accessing in your account need <br> to verify your passcode </h6>

             <div class="passcode_filed">
                <ion-input
                  ref="input"
                  type="text"
                  label="Passcode"
                  label-placement="floating"
                  helper-text="Enter your passcode"
                  error-text="Invalid email"></ion-input>
             </div>
             <div class="submit_btn" @click="notify">
                <router-link to="/otp">
                    <ion-button expand="block">Submit</ion-button>
                </router-link>
             </div>
         </div>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonIcon , IonPage , IonContent , IonInput , IonButton} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { chevronBackOutline } from 'ionicons/icons';
import { onMounted, ref } from 'vue';
import { LocalNotifications } from '@capacitor/local-notifications';

const {back} = useRouter();
const email = 'shahin.seu@gmail.com'
onMounted(async()=>{
   await LocalNotifications.requestPermissions();
   

})

const notify = async () =>{
    await LocalNotifications.schedule({
      notifications: [
         {
            id: 1,
            title :` OTP sent to  ${email}`,
            body: "",
            summaryText:'iVault login OTP',
            largeBody:"Check your mail for collect otp.",
         }
       ]
   })
   console.log('Working' , LocalNotifications)
}
</script>

