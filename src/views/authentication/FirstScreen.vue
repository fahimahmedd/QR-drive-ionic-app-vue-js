<template>
  <ion-page >
         <ion-content id="scanBGRemove">
              <div class="scaneer_wrapper" :class="isShow ? '' : 'd-none'">
                 <!-- <div class="scanner_header">
                    Scanner
                 </div> -->
                 <div class="scanner_info">
                   Scan your <span>iVault</span> qr code <br> for access.
                 </div>
                 <div class="scan_img">
                  <img src="../../assets/images/qr.svg" alt="">
                 </div>
                 <div class="scanner_info_two">
                  For the reason of high Security we are <br> enable a unique qr code for accessing your <br> very personal information. <br> <span>Without scan QR code no one can  be access!</span>
                 </div>
              </div>
              <div class="scan-box" :class="isBoxShow ? '' : 'd-block'">
               <div class='anim-box center spacer'>
               <div></div>
                  <div class='scanner'></div>
               </div>
             </div>
         </ion-content>

        <ion-footer :translucent="true">
          <div class="firstScrren_bottom_tab">
            <RouterLink to="/passcode">
              <div class="bottom_content_left">
                <ion-icon :icon="qrCodeOutline"></ion-icon>
              </div>
            </RouterLink>
                 <div class="scanner_icon" v-if="showScanBtn" @click="startScan">
                   <ion-icon :icon="scanOutline"></ion-icon>
                </div>
                <div class="scanner_stop_icon" v-else @click="stopScan" >
                  <ion-icon :icon="radioButtonOnOutline"></ion-icon>
                </div>
              <RouterLink to="/home">
                <div class="bottom_content_right">
                     <ion-icon :icon="helpCircleOutline"></ion-icon>
                </div>
              </RouterLink>
           </div>
       </ion-footer>
    </ion-page>
  </template>
  
  
  <script setup lang="ts">
   import { IonIcon , IonPage, IonFooter , IonContent} from '@ionic/vue';
   import { onMounted, ref } from 'vue';
   import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
   import { scanOutline, helpCircleOutline, qrCodeOutline , radioButtonOnOutline} from 'ionicons/icons';
  

   const perErr = ref(null);  
   const isShow = ref(true);
   const isBoxShow = ref(true);
   const showScanBtn = ref(true);
   const stopScanBtn = ref(true);

   const startScan = async () => {
       // Check camera permission
       // This is just a simple example, check out the better checks below
       showScanBtn.value = false
       isShow.value = false
       isBoxShow.value = false
       console.log('camera')
       await BarcodeScanner.checkPermission({ force: true });
       // make background of WebView transparent
       // note: if you are using ionic this might not be enough, check below
       BarcodeScanner.hideBackground();
       const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
       // if the result has content
       if (result.hasContent) {
         console.log(result.content); // log the raw scanned content
       }
       
     };
   
   onMounted(() => {
     checkPermission();
    //  startScan();
   })
   
   const stopScan = () => {
   BarcodeScanner.showBackground();
   BarcodeScanner.stopScan();
   showScanBtn.value = true
   isShow.value = true
   isBoxShow.value = true
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

#scanBGRemove::part(background){
    display: none !important;
  }

  .d-none{
    display: none;
  }
  
  /* .scaneer_wrapper .scanner_header{
   text-align: center;
   font-size: 18px;
   color: #333;
   font-weight: 500;
   padding-top: 20px;
  } */
  .scaneer_wrapper .scanner_info{
    font-size: 22px;
    font-weight: 900;
    color: #333;
    text-align: center;
    padding-top: 75px;
    line-height: 32px;
    text-transform: uppercase;
  }
  .scaneer_wrapper .scanner_info span{
    text-transform: none;
    color: var(--primaryColor);
  }
  .scaneer_wrapper .scanner_info_two{
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #626161;
    padding: 0 25px;
    position: absolute;
    bottom: 100px;
    font-family: var(--Roboto);
  }
  .scaneer_wrapper .scanner_info_two span{
    color: var(--primaryColor);
    font-weight: 500;
  }
  .scan_img img{
    height: 240px;
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scan_btn{
    margin: 100px 0 0 100px;
    padding: 10px 40px;
  }
  .scan-box{
    box-shadow: 0 0 0 100vmax rgba(0,0,0,0.5);
    display: none;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  /* barcode container */
.anim-box {
	position: relative;
	height: 280px;
  width: 280px;
	padding: 25px 30px;
	transition: transform .6s ease-out;
}

/* adds the 4 corners */
.anim-box:before, .anim-box:after, .anim-box>:first-child:before, .anim-box>:first-child:after {
	position: absolute;
	width: 10%; height: 15%;
	border-color: #fff; 
	border-style: solid;
	content: ' ';
}

/* top left corner */
.anim-box:before {
	top: 0; left: 0;
	border-width: 4px 0 0 4px;
}

/* top right corner */
.anim-box:after {
	top: 0; right: 0;
	border-width: 4px 4px 0 0;
}

/* bottom right corner */
.anim-box>:first-child:before {
	bottom: 0; right: 0;
	border-width: 0 4px 4px 0;
}

/* bottom left corner */
.anim-box>:first-child:after {
	bottom: 0; left: 0;
	border-width: 0 0 4px 4px;
}

/* barcode bars */
.anim-box:hover .scanner {
  animation-play-state: running;
}

/* animated laser beam */
.scanner {
	width: 100%;
	height: 3px;
	background-color: red;
    opacity: 0.7;
    position:relative;
    box-shadow: 0px 0px 8px 10px rgba(170, 11, 23, 0.49);
    top:50%;
    animation-name: scan;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state:running;
}
.d-block{
    display: block;
  }

@keyframes scan {
  0% {
    box-shadow: 0px 0px 8px 10px rgba(170, 11, 23, 0.49);
    top: 50%;
  }  
  25% {
    box-shadow: 0px 6px 8px 10px rgba(170, 11, 23, 0.49);
    top: 5px;
  }
  75% {
    box-shadow: 0px -6px 8px 10px rgba(170, 11, 23, 0.49);
    top: 98%;
  }
  }
</style>


  