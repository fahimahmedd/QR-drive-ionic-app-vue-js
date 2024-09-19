<template>
    <ion-page>
       <CHeader/>
       <ion-content>
         <div class="recentPage_wrapper">
             <HomeRecent/>
         </div>
       </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import CHeader from '@/components/commonComponent/CHeader.vue';
import HomeRecent from '@/components/homeContent/HomeRecent.vue';
import { IonPage , IonContent } from '@ionic/vue';
</script>