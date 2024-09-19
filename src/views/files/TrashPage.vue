<template>
    <ion-page>
       <CHeader/>
       <ion-content>
            <div class="trash_empty">
                <img src="../../assets/images/trash.png" alt="">
                <h4>No files found !</h4>
            </div>
       </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import CHeader from '@/components/commonComponent/CHeader.vue';
import { IonPage , IonContent } from '@ionic/vue';
</script>