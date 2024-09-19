<template>
      <div class="header_wrapper">
          <div class="header_content">
             <div class="notification_icon">
                <ion-icon :icon="arrowBack" @click="back()"></ion-icon>
             </div>
          </div>
      </div>
</template>

<script setup lang="ts">
import { IonIcon , IonHeader} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { arrowBack } from 'ionicons/icons';

const {back} = useRouter();

</script>