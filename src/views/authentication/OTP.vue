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
                    <ion-icon :icon="mailUnreadOutline"></ion-icon>
                </div>
                <h4>Enter 6 digit OTP code.</h4>
                <h6>Sent to your gmail account</h6>
                <div class="email_filed">
                  <div style="display: flex; flex-direction: row ;">
                   <v-otp-input
                     ref="otpInput"
                     v-model:value="bindModal"
                     input-classes="otp-input"
                     separator="  "
                     :num-inputs="6"
                     :should-auto-focus="true"
                     input-type="letter-numeric"
                     :conditionalClass="['one', 'two', 'three', 'four','five','six' ]"
                     
                   />
                 </div>
                </div>
                <div class="email_submit" @click="notifyRemove">
                    <RouterLink to="/vault">
                        <ion-button expand="block">Submit</ion-button>
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
  import { chevronBackOutline , mailUnreadOutline} from 'ionicons/icons';
  import { ref } from "vue";
  import VOtpInput from "vue3-otp-input";
  import { LocalNotifications } from '@capacitor/local-notifications';

  const {back} = useRouter();
  
  const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
  const bindModal = ref("");

  // const handleOnComplete = (value: string) => {
  //   console.log("OTP completed: ", value);
  // };
  
  // const handleOnChange = (value: string) => {
  //   console.log("OTP changed: ", value);
  // };

  const notifyRemove = async ()=> {
   await LocalNotifications.removeAllDeliveredNotifications();
   }  

  </script>


  