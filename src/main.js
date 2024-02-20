import { createApp, reactive, ref } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'

const isSessionActive = ref(false)
const headerData = ref({})
const menusState = reactive({
  isMenuOpen: false,
  isProfileMenuOpen: false,
  closeMenuAndProfile: () => {
    menusState.isMenuOpen = false
    menusState.isProfileMenuOpen = false
  }
})
createApp(App)
  .use(router)
  .provide('isSessionActive', isSessionActive)
  .provide('headerData', headerData)
  .provide('menusState', menusState)
  .mount('#app')
