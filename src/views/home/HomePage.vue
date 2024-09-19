<template>

    <ion-page>
        <div class="header_wrapper">
              <div class="header_logo">
                 <img src="../../assets/images/logo.svg" alt="">
              </div>
              <div class="header_content">
                 <div class="notification_icon">
                    <ion-icon :icon="notifications"></ion-icon>
                 </div>
                 <ion-menu-toggle>
                     <ion-icon :icon="menu"></ion-icon>
                 </ion-menu-toggle> 
             </div>
        </div>
        <ion-content :fullscreen="true">
            <div class="Home_wrapper_bg">
                <HomeTop/>
                <CardStorage/>
                 <div class="Container">
                     <video ref="promotionVid" class="promotion_vedio" controls="true" controlsList="nodownload" autoplay="true" preload="metadata" webkit-playsinline="webkit-playsinline" >
                       <source src= "../../assets/images/Add.mp4" type="video/mp4"/>
                     </video>
                 </div> 
                <HomeRecent/>
            </div>
        </ion-content>
        <BottomTab/>
    </ion-page>

</template>

<script setup lang="ts">
import CardStorage from '@/components/homeContent/CardStorage.vue';
import HomeRecent from '@/components/homeContent/HomeRecent.vue';
import HomeTop from '@/components/homeContent/HomeTop.vue';
import { IonMenu, IonToolbar ,IonTitle, IonButton, IonMenuToggle , IonIcon , IonContent, IonHeader, IonPage, onIonViewDidLeave, onIonViewDidEnter} from '@ionic/vue';
import { menu } from 'ionicons/icons';
import { notifications} from 'ionicons/icons';
import BottomTab from '@/components/commonComponent/BottomTab.vue';
import { ref } from 'vue';

const promotionVid = ref(null)

onIonViewDidLeave(() => {
    // @ts-ignore
    promotionVid.value.pause() 

})

onIonViewDidEnter(()=>{
    // @ts-ignore
      promotionVid.value.play() 
})





</script>

<style scoped lang="scss">
.Home_wrapper_bg{
    background-color: #f2f2f3;
    min-height: 100%;
    width: 100%;
}

</style>