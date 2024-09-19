<template>
   <div class="addFolder_placeholder" @click="CreateFolder">
       <div class="addFolder_icon">
        <ion-icon :icon="add"></ion-icon>
       </div>
       <div class="text_f"> Create Folder </div>
    </div>
</template>

<script setup lang="ts">
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';
import { Dialog } from '@capacitor/dialog';

const CreateFolder = async () => {
  const { value, cancelled } = await Dialog.prompt({
    title: 'Create New Folder ',
    message: ``,
  });
  console.log('Name:', value);
  console.log('Cancelled:', cancelled);
};

</script>