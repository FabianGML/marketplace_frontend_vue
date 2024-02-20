<script setup>
import { inject } from 'vue'


const menusState = inject('menusState')

const closeMenu = () => {
    menusState.isMenuOpen.value = false
}

const props = defineProps({
    text: String,
    nav: String,
    gray: Boolean
})

</script>

<template>
    <RouterLink :to="nav" className='w-28' @click="closeMenu">
        <li class='rounded-full text-white py-2 w-28 text-center cursor-pointer'
            :class="`${gray ? 'bg-gray-400 hover:bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`">
            {{ text }}
        </li>
    </RouterLink>
</template>