<script setup>
import { inject, onMounted, ref, watch } from 'vue'
import axios from 'axios'
import HeaderButton from './HeaderButton.vue'
import HeaderLink from './HeaderLink.vue'
import HeaderProfileLink from './HeaderProfileLink.vue'
import ProfileImage from './ProfileImage.vue'
import ToggleDarkButton from './ToggleDarkButton.vue'
import Logout from './Logout.vue'
import icon from '../../assets/voxaroo.png'
import bars from '../../assets/bars.png'
import searchIcon from '../../assets/search.png'
import defaultImage from '../../assets/default.jpg'

const data = inject('headerData')
const isSessionActive = inject('isSessionActive')
const menusState = inject('menusState')

const url = import.meta.env.VITE_API_URL + '/users'

const searchInput = ref('')

// if there is an active session or data is already loaded
// we make a request
if (isSessionActive.value && Object.keys(data.value).length === 0) {
    // making the request to get the user data
    // response: 
    axios.get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(response => {
            data.value = response.data
        }).catch(error => {
            console.log(error)
        })
}

const openMenu = () => {
    menusState.isMenuOpen = true
}

const toggleProfileMenu = () => {
    menusState.isProfileMenuOpen = !menusState.isProfileMenuOpen
}

</script>

<template>
    <header class='flex flex-row gap-3 
     items-center  bg-green-300 dark:bg-green-800 h-14 w-full
     pr-4 md2:pl-4 md2:pr-9 py-2 fixed shadow-md top-0 z-20
     md2:h-20 md2:py-5 md2:gap-5 lg:pr-20 2xl:h-24
     '>
        <RouterLink to='/'>
            <img :src="icon" class='hidden w-10 md2:w-14 xl:inline-block' />
        </RouterLink>
        <img :src="bars" @click="openMenu" class='h-6 md2:hidden' />
        <div class='flex flex-row gap-4 h-full
        w-full border border-gray-400 rounded
        bg-white shadow px-3
        md2:w-1/3' @click="closeMenu">
            <img class='object-contain w-4' :src="searchIcon" />
            <input type='text' class='w-full outline-none bg-transparent' placeholder='Buscar Producto'
                v-model="searchInput" />
        </div>
        <nav class='bg-green-200 rounded-r-2xl dark:bg-green-800 shadow-lg
          fixed h-5/6 w-1/2 top-[10%] left-0 transition-transform 
          duration-300 ease-out z-10
          md2:relative md2:translate-x-0 md2:bg-transparent md2:shadow-none
          md2:flex md2:flex-2 md2:w-3/4' :class="`${menusState.isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`">
            <ul class='h-3/4 flex flex-col justify-center
        items-left gap-3
        md2:flex-row-reverse md2:h-full md2:items-center
        md2:w-full md2:justify-around'>
                <div v-if="!isSessionActive" class='flex flex-col gap-3 md2:flex-row ml-3'>
                    <HeaderButton text='Iniciar Sesión' nav='/login' />
                    <HeaderButton gray text='Registrarse' nav='/signup' />
                </div>
                <ProfileImage v-if="isSessionActive" :image="defaultImage" :username="data.username"
                    :toggleProfileMenu="toggleProfileMenu" />
                <div class='w-full bg-green-100 rounded-2xl dark:bg-green-600 text-start shadow-2xl transition-all duration-300 md2:flex
                    md2:absolute md2:-right-9 md2:top-14 2xl:top-20 md2:w-1/2 md2:bg-gray-200 md2:rounded-b-lg
                    md2:justify-center md2:shadow-lg md2:py-3 xl:w-1/4 '
                    :class="`${menusState.isProfileMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`">
                    <ul class='flex flex-col md2:items-center md2:text-center md2:w-full'>
                        <HeaderProfileLink link='profile' text='Perfil' hoverbg='bg-gray-500' />
                        <HeaderProfileLink link='compras' text='Compras' />
                        <HeaderProfileLink link='sales' text='Ventas' />
                        <HeaderProfileLink link='my-products' text='Gestionar Productos' />
                        <HeaderProfileLink v-if="data.isAdmin || data.isSuperAdmin" link='categories'
                            text='Admin. Categorias' />
                        <HeaderProfileLink v-if="data.isSuperAdmin" link='admins' text='Gestionar admins' />
                        <Logout />
                    </ul>
                </div>
                <div class='flex flex-col gap-5 ml-3 md2:flex-row lg:ml-10 lg:gap-0 xl:gap-3 xl:justify-end'>
                    <HeaderLink link='/' text='Inicio' />
                    <HeaderLink link='/favoritos' text='Favoritos' />
                    <HeaderLink link='/about' text='Sobre nosotros' />
                </div>
                <ToggleDarkButton />
            </ul>
        </nav>
    </header>
</template>