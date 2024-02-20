<script setup>
import { ref, watch } from 'vue'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

const isDarkMode = ref(false)
const getDarkMode = () => {
    const isDarkModeLocalStorage = window.localStorage.getItem('isDarkMode')
    const isDarkModeSet = isDarkModeLocalStorage === 'true'
    if (isDarkModeSet) {
        isDarkMode.value = JSON.parse(isDarkModeSet)
        document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
        document.getElementsByTagName('html')[0].classList.remove('dark')
    }
}
getDarkMode()

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode.value))
}

watch(isDarkMode, () => {
    document.getElementsByTagName('html')[0].classList.toggle('dark')
})

</script>
<template>
    <label htmlFor='darkModeToggle' class='cursor-pointer ml-3 flex'>
        <span class='relative inline-block min-w-[4rem] 
        h-8 rounded-full bg-gray-200 transition-all duration-300'
            :class="`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`" @click="toggleDarkMode">
            <span
                class='absolute top-1 right-7 inline-block w-6 h-6 transform -translate-x-1/2 rounded-full transition-transform duration-300'
                :class="`${isDarkMode ? 'translate-x-full bg-white' : '-translate-x-2 bg-gray-700'}`" />
        </span>
        <input type='checkbox' id='darkModeToggle' class='sr-only' />
        <img v-if="isDarkMode" :src="moon" class='w-6 h-6 ml-2' />
        <img v-if="!isDarkMode" :src="sun" class='w-6 h-6 ml-2' />
    </label>
</template>