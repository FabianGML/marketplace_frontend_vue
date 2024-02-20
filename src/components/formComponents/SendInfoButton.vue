<script setup>
import { defineProps } from 'vue'
defineProps({
    text: String
})
</script>

<template>
    <button type='submit' className='bg-green-200 dark:bg-green-800 h-14 w-full
      rounded-xl text-lg text-slate-500 dark:text-white
      hover:bg-green-300 dark:hover:bg-green-900 hover:text-black'>
        {{ text }}
    </button>
</template>