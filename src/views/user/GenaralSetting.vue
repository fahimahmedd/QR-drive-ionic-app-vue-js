<template>
  <ion-page>
     <CHeader/>
     <ion-content>
        <div class="user_setting_wrapper">
            <div class="Container">
              <div class="genaralSetting_wrapper">
                 <div class="user_setting_info">
                   <h4>Name</h4>
                     <div class=" setting_filed " @click="NameEdit">
                        Fahim Ahmed
                     </div>
                 </div>
                 <!-- Vault Details -->
                 <div class="user_setting_info">
                   <h4>Vault Details</h4>
                    <div class=" setting_filed" @click="VaultDetailEdit">
                        It is a long established fact at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                    </div>
                 </div>
        
                 <!-- Nominee Details -->
                 <div class="user_setting_info">
                   <h4>Nominee Details</h4>
                   <div class=" setting_filed" @click="NomineeDetailEdit">
                        It is a long established fact at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal layout. The point of using Lorem Ipsum is that it has a more-or-less normal  distribution of letters, as opposed to using 'Content here, content here'
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
import { Dialog } from '@capacitor/dialog';
import { IonContent , IonButton , IonPage } from '@ionic/vue';




const NameEdit = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Edit your name',
    message: ``,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};

const VaultDetailEdit = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Edit vault detail',
    message: ``,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};

const NomineeDetailEdit = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Edit nominee detail',
    message: ``,
  });

  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};



</script>