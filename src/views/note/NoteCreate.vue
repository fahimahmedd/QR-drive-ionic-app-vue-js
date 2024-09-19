

<template>
  <ion-page>
      <ion-content>
          <div class="note_create">
              <div class="create_header">
                     <div class="create_header_left" @click="back">
                        <ion-icon :icon="arrowBackOutline"></ion-icon>
                     </div>

                     <div class="create_header_middle">
                         Create Note
                     </div>

                     <div class="create_header_right">
                        <ion-icon :icon="checkmarkOutline"></ion-icon>
                     </div>
                 </div>
              <div class="Container">
                 <div class="note_createBody">
                  <div class="create_body_top">
                      <div class="note_create_date">
                          12 October 2023
                      </div>
                  </div>
                 
                  <div class="note_title">
                      <ion-input
                        label-placement="stacked"
                        :clear-input="true"
                        placeholder="Title"
                        value=""
                      >
                      </ion-input>
                  </div>

                  <div class="note_create_text">
                    <textarea class="form_control" name="" placeholder="Type your note"></textarea>
                  </div>
                   
                 </div>
              </div>
          </div>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage , IonInput , IonContent , IonIcon , IonTextarea} from '@ionic/vue';
import { arrowBackOutline , checkmarkOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
const {back} = useRouter();


</script>

<style scoped>
.block {
  width: 100%;
  height: 300px;
  padding: 30px 10px 10px 20px;
}

ion-modal {
  --height: auto;
}
</style>


