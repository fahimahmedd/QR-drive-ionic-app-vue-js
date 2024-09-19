import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import FirstScreen from '../views/authentication/FirstScreen.vue';
import Scan from '../views/authentication/Scan.vue';
import HomePageVue from '@/views/home/HomePage.vue';
import StoragePage from '@/views/home/StoragePage.vue';
import FilesPage from '@/views/files/FilesPage.vue';
import UserPage from '@/views/user/UserPage.vue';
import GenaralSetting from '@/views/user/GenaralSetting.vue';
import Secuirity from '@/views/user/Secuirity.vue';
import Passcode from '@/views/authentication/Passcode.vue';
import OTP from '@/views/authentication/OTP.vue';
import EmailCheck from '@/views/authentication/EmailCheck.vue';
import IcirclesRegister from '@/views/authentication/IcirclesRegister.vue';
import Activation from '@/views/authentication/Activation.vue';
import VaultRegister from '@/views/authentication/VaultRegister.vue';
import VaultHomePage from '@/views/vault/VaultHomePage.vue';
import JournalPage from '@/views/journal/JournalPage.vue';
import JournalCreate from '@/views/journal/JournalCreate.vue';
import NoteCreate from '@/views/note/NoteCreate.vue';
import NotePage from '@/views/note/NotePage.vue';
import TrashPage from '@/views/files/TrashPage.vue';
import HistoryPage from '@/views/files/HistoryPage.vue';

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/first-screen'},

  {path: '/home', name: 'Home', component: HomePageVue},
  {path: '/first-screen', name: 'FirstScreen', component: FirstScreen},
  {path: '/scan', name: 'Scan', component: Scan},
  {path: '/storage', name: 'Storage', component: StoragePage},
  {path: '/files', name: 'Files', component: FilesPage},

  // User Pages Route Link
  
  {path: '/user', name: 'User', component: UserPage},
  {path: '/userG', name: 'UserG', component: GenaralSetting},
  {path: '/secuirity', name: 'Secuirity', component: Secuirity},

  // Authentication_pages
  {path: '/passcode', name: 'Passcode', component: Passcode},
  {path: '/otp', name: 'OTP', component: OTP},
  {path: '/emailCheck', name: 'EmailCheck', component: EmailCheck},
  {path: '/icirclesRegister', name: 'IcirclesRegister', component: IcirclesRegister},
  {path: '/activation', name: 'Activation', component: Activation},
  {path: '/vaultRegister', name: 'VaultRegister', component: VaultRegister},

  // Vault Pages
  {path: '/vault', name: 'VaultHome', component: VaultHomePage},

  // Journal Pages
  {path: '/journal', name: 'Journal', component: JournalPage},
  {path: '/journal-create', name: 'JournalCreate', component: JournalCreate},
  
  // Note page
  {path: '/note', name: ' Note', component:NotePage},
  {path: '/note-create', name: 'NoteCreate', component: NoteCreate},

  // Trash Page
  {path: '/trash', name: 'Trash', component: TrashPage},

  // History Page
  {path: '/history', name: 'History', component: HistoryPage},

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
