<script setup>
import { useRouter } from 'vue-router'
import logOutImg from '../../assets/logout.png'
import { inject } from 'vue'

const router = useRouter()
const isSessionActive = inject('isSessionActive')

const handleLogout = () => {
    console.log('entranding')
    router.push('/')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('token')
    window.location.reload()
    isSessionActive.value = false
}
</script>

<template>
    <div class='flex gap-3 hover:bg-green-300 dark:hover:bg-green-800 pl-3 py-2 w-full md2:hover:bg-gray-300 md2:rounded-full'
        @click="handleLogout">
        <img :src="logOutImg" class='w-7 dark:filter dark:invert' />
        <li class='inline-block text-sm dark:text-white md2:text-lg'>Cerrar Sesión</li>
    </div>
</template>