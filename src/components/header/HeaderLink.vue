<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
    text: String,
    link: String
})
const menusState = inject('menusState')
</script>
<template>
    <RouterLink :to="link" class='md2:flex md2:items-center md2:justify-center md2:text-center
      lg:hover:bg-gray-500 lg:w-32 lg:rounded-lg lg:hover:text-white' @click="menusState.closeMenuAndProfile">
        <li class='dark:text-white underline underline-offset-2 inline-block text-lg font-extrabold'>{{ text }}</li>
    </RouterLink>
</template>