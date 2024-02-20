<script setup>
import { inject } from 'vue'

const props = defineProps({
    text: String,
    link: {
        type: String,
        default: ''
    }
})

const menusState = inject('menusState')
</script>
<template>
    <RouterLink :to="link" class='flex gap-3 hover:bg-green-300 dark:hover:bg-green-800 
        pl-3 py-2 w-full md2:hover:bg-gray-300 md2:rounded-full' @click="menusState.closeMenuAndProfile">
        <li class='inline-block text-sm dark:text-white md2:text-lg'>{{ text }}</li>
    </RouterLink>
</template>