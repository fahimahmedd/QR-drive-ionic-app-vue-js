<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Scanner</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="scanBGRemove">

    </ion-content>
    <!-- <div class="getStart_wrapper"> 
        <div class="Getstart_img_container">
          <div class="folder_images">
             <div class="s_one">
                <img src="../../assets/images/s1.png" alt="">
             </div>
             <div class="s_two">
                <img src="../../assets/images/s3.png" alt="">
             </div>
             <div class="s_three">
                <img src="../../assets/images/s2.png" alt="">
             </div>
             <div class="s_four">
                <img src="../../assets/images/s4.png" alt="">
             </div>
           <div class="folder_img">
            <img src="../../assets/images/splash1.svg" alt="">
           </div>
          </div>
        </div>
       <div class="getStart_text">
         <h4>Save Your <span>Documents, <br> Photos  </span> & Videos.</h4>
         <h5>Easily accessible but highly secured !
             You get it in your Key Ring or metallic/plastic card.</h5>
       </div>
     </div> -->


       <div class="scan-box">
           <div class='anim-box center spacer'>
               <div></div>
              <div class='scanner'></div>
           </div>
        </div>
        <ion-footer :translucent="true">
          <div class="firstScrren_bottom_tab">
            <div class="bottom_content_left">
                <ion-icon :icon="qrCodeOutline"></ion-icon>
              </div>
              <RouterLink to="/first-screen">
                <div class="scanner_stop_icon" @click="stopScan">
                   <ion-icon :icon="radioButtonOnOutline"></ion-icon>
                </div>
              </RouterLink>
              <div class="bottom_content_right">
                   <ion-icon :icon="helpCircleOutline"></ion-icon>
              </div>
           </div>
       </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IonContent, IonIcon ,IonHeader, IonPage, IonTitle, IonToolbar ,IonFooter} from '@ionic/vue';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { radioButtonOnOutline, helpCircleOutline, qrCodeOutline } from 'ionicons/icons';


   const perErr = ref(null);  
   const startScan = async () => {
       // Check camera permission
       // This is just a simple example, check out the better checks below
       console.log('camera')
       await BarcodeScanner.checkPermission({ force: true });
       
       // make background of WebView transparent
       // note: if you are using ionic this might not be enough, check below
       BarcodeScanner.hideBackground();

       
       // hideBg.value='hideBg'
       const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
     
       // if the result has content
       if (result.hasContent) {
         console.log(result.content); // log the raw scanned content
       }
  
     };
   
   onMounted(() => {
     checkPermission();
     startScan();
   })
   
   const stopScan = () => {
   BarcodeScanner.showBackground();
   BarcodeScanner.stopScan();
  };
   
   const checkPermission = async () => {
     // check or request permission
     try {
       const status = await BarcodeScanner.checkPermission({ force: true });
       
       if (status.granted) {
         return true;
       }
     
       return false;
       
     } catch (error:any) {
       perErr.value = error.message
     }
   };
</script>

<style scoped>


</style>

