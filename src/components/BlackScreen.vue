<script setup>
import { inject } from 'vue'
const menusState = inject('menusState')
</script>
<template>
    <div class='fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 transition-transform duration-300 ease-out
        transform z-10' :class="{ hidden: !menusState.isMenuOpen }" @click="menusState.closeMenuAndProfile" />
</template>