<template>
    <ion-page>
       <CHeader/>
         <ion-content>
              <div class="secuirity_wrapper">
                  <div class="Container">
                     <div class="secuirity_wrap">
                        <h5>Change iVault Passcode</h5>
                        <div class="secuirity_item">
                            <ion-input :type="isPassword ? 'password' : 'text'" placeholder="Old Passcode" v-model="password"></ion-input>
                            <div class="showHide_icon" @click="showOrNot">
                                <ion-icon :icon="eye"></ion-icon>
                            </div>
                        </div>
                        <div class="secuirity_item">
                            <ion-input :type="isPassword ? 'password' : 'text'" placeholder="New Passcode" v-model="password"></ion-input>
                            <div class="showHide_icon" @click="showOrNot">
                                <ion-icon :icon="eye"></ion-icon>
                            </div>
                        </div>
                        <div class="secuirity_item">
                            <ion-input :type="isPassword ? 'password' : 'text'" placeholder="Confirm Password" v-model="password"></ion-input>
                            <div class="showHide_icon" @click="showOrNot">
                                <ion-icon :icon="eye"></ion-icon>
                            </div>
                        </div>
                     </div>
                     <div class="Setting_update_btn">
                        <ion-button expand="block">Update</ion-button>
                      </div>
                  </div>
              </div>
         </ion-content>
    </ion-page>
  </template>
  

<script setup lang="ts">
import CHeader from '@/components/commonComponent/CHeader.vue';
import { IonPage , IonContent , IonInput , IonButton } from '@ionic/vue';
import { IonIcon } from '@ionic/vue';
import { eye } from 'ionicons/icons';
import { ref } from 'vue';

const password = ref<any>(null)
const isPassword = ref(true)
function showOrNot() {
    isPassword.value = !isPassword.value
    console.log("password") 
}
</script>