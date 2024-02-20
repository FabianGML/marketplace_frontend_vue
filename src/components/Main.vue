<script setup>
import { inject } from 'vue'

const menusState = inject('menusState')

</script>

<template>
    <main @click="menusState.closeMenuAndProfile" class="mt-14 md2:mt-20 2xl:mt-24 h-screen flex">
        <slot />
    </main>
</template>